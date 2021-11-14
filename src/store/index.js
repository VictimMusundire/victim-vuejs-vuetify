import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: 'Default Task ',
        done: false
      },
    ],
    snackBar: {
      show: false,
      text: `Hey King of winning ...`,
    }
  },
  mutations: {
    taskAdd(state,taskTitle){
      let newTask = {
        id: Date.now(),
        title: taskTitle,
        done: false
      }
      state.tasks.unshift(newTask)
    },

    doneTask(state, id){
      let task = state.tasks.filter(task => task.id === id)[0]
      task.done = !task.done
    },

    deleteTask(state, id){
      state.tasks = state.tasks.filter(task => task.id !== id)
    },

    showSnackBar(state,text){
      let timeOut = 0;
      if (state.snackBar.show){
        state.snackBar.show = false;
        timeOut = 300
      }

      setTimeout (()=> {
        state.snackBar.show = true
        state.snackBar.text = text
      }, timeOut)

    },

    dismissSnackBar(state){
      state.snackBar.show  = false
    }

  },
  actions: {
    addTask({commit}, newTask){
      commit('taskAdd', newTask)
      commit('showSnackBar','Task added successfully')
    },

    deleteTask({commit}, id){
      commit('deleteTask', id)
      commit('showSnackBar','Task deleted')
    },

    doneTask({commit}, id){
      commit('doneTask', id)
      commit('showSnackBar','Task completed successfully')
    }
  },
  modules: {
  }
})
