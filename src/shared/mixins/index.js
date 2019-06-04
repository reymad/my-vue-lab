import Vue from 'vue';

// This is a global mixin, it is applied to every vue instance
Vue.mixin({
    data: function() {
      return {
        mixinTest: {
            title: '[from mixin] Soy el title',
        }
      }
    }
})