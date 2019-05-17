'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// jr> Meter aquí variables de configuraciónd e la aplicación globales a acceder con 'process.env.NOMBRE_VAR'

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  IS_DEBUG: true,
  SENDGRID_API_KEY: '"YOUR_SENDGRID_APIKEY_DEV"'
})
