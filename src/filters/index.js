import Vue from 'vue';

// Register each Global filter here

// toUpper
Vue.filter('toUpper', value => {
  return value.toUpperCase();
});

// Capitalize first letter
Vue.filter('capitalize', value => {
    return value.charAt(0).toUpperCase() + value.slice(1);
});

// toLower
Vue.filter('toLower', function (value) {
    return value.toLowerCase();
});
// trim
Vue.filter('trim', function (value) {
    return value.trim();
});
// toUsd
Vue.filter('toUSD', function (value) {
    return `$${value}`;
});
// truncate
Vue.filter('truncate', function(value, size){
    return (value.length > size) ? value.substr(0, size) + '...' : value; //&hellip;
});
// currencydecimal
Vue.filter('currencydecimal', function (value) {
    return value.toFixed(2);
});



