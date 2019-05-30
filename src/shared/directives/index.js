// https://vuejs.org/v2/guide/custom-directive.html

import Vue from 'vue'

// Register a global custom directive called `v-focus`
Vue.directive('focus', {
    // When the bound element is inserted into the DOM...
    inserted: function (el) {
      // Focus the element
     // Vue.nextTick(function() {
     //   el.focus();
     // });
     setTimeout( () => { el.focus(); console.log("Directive loaded but not focused...") } );
     
    }
  })