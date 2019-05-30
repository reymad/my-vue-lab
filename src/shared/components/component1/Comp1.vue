<template>
  <div>
    <div class="comp1">
	    <h1>{{ title }}</h1>
    </div>
    <Jesus></Jesus><!--*Ejemplo incrustar otro componente en este componente-->
  </div>
</template>

<script>
import Jesus from './../Jesus' //*

export default {
  data () {
	  return {
          title: 'Component1 in subfolder',
	  }
  },
  components: {
      Jesus, //*
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
  color:blue;
}
</style>