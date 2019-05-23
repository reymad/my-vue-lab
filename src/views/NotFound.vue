<template>
      <v-container bg fill-height grid-list-md text-xs-center>
        <v-layout row wrap align-center>
          <v-flex>
            <!---->
            <div id="404" class="text-md-center">
              <h1>404</h1>
              <h2 class="my-3 headline">Sorry, page not found</h2>
              <div>
                <v-btn flat color="secondary" @click="goHome">Go home</v-btn>
              </div>  
            </div>
            <!---->
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
export default {
  methods: {
    goHome () {
      this.$router.push({ path: '/' });
    }
  }  
};
</script>
<style scoped lang="css">
  h1 {
    font-size: 150px;
    line-height: 150px;
    font-weight: 700;
    color: #252932;
    text-shadow: rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px, rgba(61, 61, 61, 0.3) 3px 3px;    
  }
</style>
