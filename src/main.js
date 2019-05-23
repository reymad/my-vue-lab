// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

// eliminar a futuro, usamos vuetify instead
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import router from './router';
import store from "./store";

// Global filters registration
import './filters/index.js';

// mixins
import './mixins/index.js';

// Translations
import i18n from './i18n/i18n.js'

const rtl = false;
// accessing vuetify instance in any vue app scope, i.e, changing rtl dynamically
Vue.prototype.$vuetify.rtl = rtl;

Vue.config.productionTip = false

Vue.use(BootstrapVue)

// toastr
import './plugins/toastr2.js'
// Vuetify
import './plugins/vuetify.js'

import './stylus/main.styl'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App },
  /* // this.$root.getMessage('ejemplo')
  methods: {
    getMessage: function (key) {
      return this.$t(key)
    }
  }
  */
})
