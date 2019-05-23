<template>
<!--https://github.com/vuetifyjs/vuetify/blob/master/packages/docs/src/examples/layouts/baseline.vue-->
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      dark
      v-if="this.$route.meta.layout!='none'"
    >
      <v-list dense>
        <v-list-tile @click="login">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="login">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><LocaleChanger /></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="elevation-0 default" class="black--text" v-if="this.$route.meta.layout!='none'" fixed app>
      <v-toolbar-side-icon class="black--text" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title to="/">Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat class="info--text" to="/jesus">{{ $t("hello", ["Jesús"]) }}</v-btn>
        <v-btn flat class="success--text" to="/component1">component 1</v-btn>
        <v-btn flat class="warning--text" to="/apitest">Api test</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-start
        >
        <router-view/>
        <!--
          <v-flex text-xs-center>
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon large>code</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn icon large href="https://codepen.io/johnjleider/pen/rJdVMq" target="_blank" v-on="on">
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-flex>
        -->
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="default" app>
      &nbsp;<span class="">&copy; {{ year }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  // imports
  import Vue from 'vue'
  import AppEvents from  './event';
  import BackendLayout from './layouts/backend';
  import DefaultLayout from './layouts/default';
  import NoneLayout from './layouts/none';
  import LocaleChanger from './components/LocalesChanger';


  Vue.component('backend-layout', BackendLayout);
  Vue.component('default-layout', DefaultLayout);
  Vue.component('none-layout', NoneLayout);
  const default_layout = 'default';

  // Inside console.log(window.getApp.$appInfo)
  Vue.prototype.$appInfo = 
  {
      ip: 'todo:ip',
      debug: process.env.IS_DEBUG,
      env: process.env.NODE_ENV,
  };

  // globals

  export default {
    name: 'app',
    data () {
      return {
        user: null,
        drawer: false,
        year: new Date().getFullYear(),
      }
    },
    // props: ['default'],
    components: {
      LocaleChanger,
    },
    // mixin: [Mixins],
    methods: {
      login () {
        alert('todo:login')
      },
      async logout () {

      },
    },
    // implantacion de eventos the app
    created () {
      AppEvents.forEach(item => {
        this.$on(item.name, item.callback);
      });
      window.getApp = this;// for console
      if(process.env.IS_DEBUG){
        this.$toastr.info('Dev info', 'NODE_ENV: "development"\nIS_DEBUG: true');
      }

    },
    computed: {
      // see: https://itnext.io/anyway-heres-how-to-create-a-multiple-layout-system-with-vue-and-vue-router-b379baa91a05
      layout() {
        return ( (this.$route.meta.layout) || default_layout) + '-layout';
      }
    }
  }

</script>

<style lang="css">
html{
  overflow-y: auto; /* overwrite from vuetify styles */
}
</style>