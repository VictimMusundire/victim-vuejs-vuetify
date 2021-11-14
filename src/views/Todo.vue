<template>
  <div class="todos pa-6">

    <v-text-field
        @click:append="addTask()"
        @keyup.enter="addTask()"
        v-model="taskTitle"
        class="pa-3"
        label="Enter your task"
        append-icon="mdi-plus-circle"
        hide-details
        clearable

    ></v-text-field>

<div v-if="$store.state.tasks">
    <v-list

        class="pt-0"
        flat
        v-for="task of $store.state.tasks"
        :key="task.id"
    >

      <v-list-item
          @click="$store.dispatch('doneTask', task.id)"
          :class="{'blue lighten-5' : task.done}"
      >

        <template v-slot:default>
          <v-list-item-action>
            <v-checkbox
                :input-value="task.done"
                color="primary"
            ></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title :class="{'text-decoration-line-through' : task.done}">{{task.title}}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon
                   @click.stop="dialogs.dialog = true"
            >
              <v-icon color="red">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </template>
      </v-list-item>

      <v-dialog
          v-if="dialogs.dialog"
          v-model="dialogs.dialog"
          max-width="290"
      >
        <v-card>
          <v-card-title class="text-h5">
            Delete task !
          </v-card-title>

          <v-card-text>
            Are you sure you want to delete this task ?
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                color="darken-1"
                text
                @click="dialogs.dialog = false"
            >
              No
            </v-btn>

            <v-btn
                color="red darken-1"
                text
                @click="($store.dispatch('deleteTask', task.id), dialogs.dialog = false)"
            >
              Yes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-divider></v-divider>

    </v-list>

   </div>

    <div v-if="$store.state.tasks.length === 0">
      <v-card
          class="mx-auto"
          max-width="344"
          outlined
          style="margin-top: 100px;"
      >
        <v-list-item >
          <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1"
            >
              No Tasks Found ...

            </v-list-item-title>
          </v-list-item-content>
          <v-icon color="primary"
          size="50">mdi-check-underline</v-icon>

        </v-list-item>
      </v-card>
    </div>


  </div>
</template>

<script>
export default {
  name: "Todo",
  data(){
    return {
      taskTitle: '',
      dialogs: {
        dialog: false
      },
    }
  },

  methods:{

    addTask(){
      this.$store.dispatch('addTask',this.taskTitle)
      this.taskTitle = ''
    },

    deleteTask(){

    }

  }
}
</script>

<style scoped>

</style>
