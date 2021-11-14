<template>
  <v-app id="inspire">

    <v-navigation-drawer
        v-model="drawer"
        app>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="vicky.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>vmusundire</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>


      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.to"

        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group
            v-for="item in subItems"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.action"
            no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
              v-for="child in item.items"
              :key="child.title"
              :to="child.to"
          >

            <v-list-item-icon>
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="child.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-group>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        app
        color="primary"
        dark
        shrink-on-scroll
        height="56"
        src="light.jpg"
        fade-img-on-scroll
        scroll-threshold="500"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>My Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view> </router-view>

      <SnackBar/>

    </v-main>
  </v-app>
</template>

<script>
import SnackBar from "./components/Shared/SnackBar";
export default {
  components: {SnackBar},
  data: () => ({
    drawer: null,
    items: [
      { title: 'Home', icon: 'mdi-home', to: '/' },
      { title: 'Posts', icon: 'mdi-post', to: '/posts' },
      { title: 'Todos', icon: 'mdi-format-list-checks', to: '/todos' },
      { title: 'About', icon: 'mdi-alpha-a-circle', to: '/about' },
    ],
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,

    subItems: [
      {
        action: 'mdi-ticket',
        items: [
            {
              to:'/list',
              title: 'List Item',
              icon: 'mdi-alpha-a-circle'
            }
        ],
        title: 'Attractions',
      },
      {
        action: 'mdi-school',
        items: [
            {
              to:'/',
              title: 'List Item',
              icon: 'mdi-alpha-a-circle'
            },
          {
            to:'/assets',
            title: 'Assets',
            icon: 'mdi-alpha-a-circle'
          }
            ],
        title: 'Education',
      },

    ],

  }),

}
</script>
