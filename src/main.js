// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill' 
import Vue from 'vue';
import App from './App';

import router from './router';
import store from "./store";

// Global filters registration
import './shared/filters/index.js';
// Directives
import './shared/directives/index.js';
// mixins
import './shared/mixins/index.js';
// Translations
import i18n from './i18n/i18n.js'

const rtl = false;
// accessing vuetify instance in any vue app scope, i.e, changing rtl dynamically
Vue.prototype.$vuetify.rtl = rtl;
Vue.config.productionTip = false

// toastr
import './plugins/toastr2.js'
// Vuetify
import './plugins/vuetify.js'
// stylus ¡!overwrite here global css
import './stylus/main.styl'


Object.defineProperty(Vue.prototype, '$locale', {
  get: function () {
    return app.i18n.locale
  },
  set: function (locale) {
    app.i18n.locale = locale
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App },
})
