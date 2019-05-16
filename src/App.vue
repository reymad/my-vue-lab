<template>
  <div id="app">
    <header>
      <b-navbar toggleable="md" type="light" variant="light">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand to="/">Food Tracker</b-navbar-brand>
        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav>
            <b-nav-item href="#" @click.prevent="login" v-if="!user">Login</b-nav-item>
            <b-nav-item href="#" @click.prevent="logout" v-else>Logout</b-nav-item>
            <b-nav-item to="/Jesus">Jesús</b-nav-item>
            <b-nav-item to="/component1">Comp1</b-nav-item>
            <b-nav-item to="/apitest">Api test</b-nav-item>
            <b-button variant="outline-primary" :to="{ name: 'Jesus', params: { id: 123 } }">To Jesús as well</b-button>
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
  import AppEvents from  './event';

  export default {
    name: 'app',
    data () {
      return {
        user: null
      }
    },
    methods: {
      login () {

      },
      async logout () {

      }
    },
    // implantacion de eventos the app
    created () {
      AppEvents.forEach(item => {
        this.$on(item.name, item.callback);
      });
      window.getApp = this;
    },
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