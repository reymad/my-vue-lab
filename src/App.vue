<template>
  <div id="app">
    <component :is="layout"></component>    
    <header>
        <b-navbar toggleable="md" type="light" variant="light">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-navbar-brand to="/">Food Tracker</b-navbar-brand>
          <b-collapse is-nav id="nav-collapse">
            <b-navbar-nav>
              <b-nav-item href="#" @click.prevent="login" v-if="!user">Login</b-nav-item>
              <b-nav-item href="#" @click.prevent="logout" v-else>Logout</b-nav-item>
              <b-nav-item to="/Jesus">{{ $t("hello", ["Jesús"]) }}</b-nav-item>
              <b-nav-item to="/component1">Comp1</b-nav-item>
              <b-nav-item to="/apitest">Api test</b-nav-item>
              <b-button variant="outline-primary" :to="{ name: 'Jesus', params: { id: 123 } }">To Jesús as well</b-button>
              <!--n18i component-->
              <locale-changer></locale-changer>

            </b-navbar-nav>
          </b-collapse>
          
        </b-navbar>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  // imports
  import Vue from 'vue'
  import AppEvents from  './event';
  import BackendLayout from './layouts/backend';
  import DefaultLayout from './layouts/default';
  import LocaleChanger from './components/Localechanger';


  Vue.component('backend-layout', BackendLayout);
  Vue.component('default-layout', DefaultLayout);
  const default_layout = 'default';

  // Inside console.log(window.getApp)
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
        user: null
      }
    },
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
        return (this.$route.meta.layout || default_layout) + '-layout';
      }
    }
  }

</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #f8f9fa;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>