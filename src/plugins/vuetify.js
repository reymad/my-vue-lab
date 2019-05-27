import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// docs: https://vuetifyjs.com/en/framework/icons
// Helpers
// import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
    theme: {
      primary: '#49c5b6',//'#cb3837',
      secondary: '#424242',
      accent: '#82B1FF',
      error: '#FF5252',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FFC107',// '#FFC107'
      custom: '#FF69B4',
      white: '#ffffff',
      black: '#666666',
    },
    customProperties: true,
    iconfont: 'md',
    rtl: false,
  })
  