<template>
  <div class="jesus">
    <h1>{{ title }}</h1>
    <a href="#" @click.prevent="jesusSalutes">Jesús component works!</a>
      <p>{{ text | toUpper | toUSD | truncate(5) }}</p>
    <br />
    <b-button variant="outline-primary" @click="testGlobalEvent" > Test Global event</b-button> 
    <br />
    <b-button variant="outline-success" @click="handleFullScreen" > toggle full screen</b-button> 
  </div>
</template>


<script>

import Util from '@/util';

export default {
  data () {
	  return {
          title: 'Let\'s see what this is',
          text: 'waiting...'
	  }
  },
  methods:{
      jesusSalutes(){
          alert('Jesus says Hi yo!')
      },
      testGlobalEvent(){
          window.getApp.$emit('APP_TEST_EVENT');// ejemplo de utilización de eventos globales definidos en event.js
      },
      handleFullScreen () {
        Util.toggleFullScreen(); // test utils
        Util.jesusTest();
      }
  },
  created() {
      console.info(this.$route.params);
  },
  mounted() {
      // alert('Jesus mounted!');
      var self = this;
      setTimeout(function(){  
          self.text = 'Mounted'; }
          , 3000);

    this.$toastr.success('Esto marcha :-)', 'Title', {timeOut: 5000});

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color:red;
}

.jesus{
    border: 2px dashed #ccc;
    display: inline-block;
}
</style>