<template>
  <div class="jesus">
    <h1>{{ title }}</h1>
    <a href="#" @click.prevent="jesusSalutes">Jesús component works!</a>
      <p>{{ text | toUpper | toUSD | truncate(5) }}</p>
    <br />
    <v-btn color="primary" flat @click="testGlobalEvent" > Test Global event</v-btn> 
    <br />
    <v-btn color="success" flat @click="handleFullScreen" > toggle full screen</v-btn> 
    <br />
    <v-btn color="warning" @click="kebab" > Kebab something and change... </v-btn> 
    <div>
      <p>Pluralization: </p>
      <p>{{ $tc('apple', 10, { count: 10 }) }}</p>
      <p>{{ $tc('car' , 1) }}</p>
      <p>{{ $tc('test | tests' , 1) }}</p>
      <p>{{ $tc("This is a {count} | This are a {count} | This are a lot of {count}", 12 , { count: 12 } ) }}</p>
    </div>
    <p>
      <SelectProvincias />
    </p>
  </div>
</template>


<script>

import Util from '@/shared/util';
import SelectProvincias from '@/shared/components/SelectProvincias'

export default {
  data () {
	  return {
          title: 'Let\'s see what this is',
          text: 'Waiting...'
	  }
  },
  components: {
    SelectProvincias,
  },
  methods:{
      jesusSalutes(){
          alert('Jesus says Hi yo!' + Util.randomString())
          alert(process.env.SENDGRID_API_KEY);
          alert(process.env.NODE_ENV);
      },
      testGlobalEvent(){
          window.getApp.$emit('APP_TEST_EVENT');// ejemplo de utilización de eventos globales definidos en event.js
          
      },
      handleFullScreen () {
        Util.toggleFullScreen(); // test utils
        Util.jesusTest();
      },
      kebab(){
        this.$toastr.success(Util.kebab('SomethingToKebab'), '', { timeOut:0, extendedTimeOut: 0});
        this.$toastr.error(Util.kebab('something to kebab'));
        this.$toastr.error(Util.kebab('somethingtokebab'));
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
<style scoped lang="css">
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