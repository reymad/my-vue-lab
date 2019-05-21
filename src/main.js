// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router';
import store from "./store";

// npm's 
// Toastr: https://www.npmjs.com/package/vue-toastr-2 | https://www.npmjs.com/package/toastr || https://github.com/CodeSeven/toastr (config documentation)
import VueToastr2 from 'vue-toastr-2';
import 'vue-toastr-2/dist/vue-toastr-2.min.css';

// Global filters registration
import './filters/index.js';

// mixins
import './mixins/index.js';

// Translations
import i18n from './i18n/i18n.js'

window.toastr = require('toastr')

Vue.use(VueToastr2)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

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
