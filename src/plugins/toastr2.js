import Vue from 'vue'
// npm's 
// Toastr: https://www.npmjs.com/package/vue-toastr-2 | https://www.npmjs.com/package/toastr || https://github.com/CodeSeven/toastr (config documentation)
import VueToastr2 from 'vue-toastr-2';
import 'vue-toastr-2/dist/vue-toastr-2.min.css';

window.toastr = require('toastr')

Vue.use(VueToastr2, {
  prventDuplicates: true,
  timeout: 3000,
  extendedTimeOut: 6000,
  progressBar: true,
  rtl: false,
  escapeHtml : true,
  positionClass: 'toast-bottom-left'
})