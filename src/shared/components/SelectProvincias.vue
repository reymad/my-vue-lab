<template>

     <v-flex xs6 right>

            <v-select with="auto"
            class="text--small"
            item-text="text"
            item-value="text"
            :items="provincias"
            menu-props="auto"
            hide-details
            single-line
            prepend-inner-icon="globe"
            hide-selected
            @change="changeProvincia"           
            ></v-select>

        </v-flex>


</template>

<script>

import Provincias from '@/assets/data/provincias_es.js'

console.info(Provincias.provincias_es)

export default {
  data () {
    return {
        provincias: []
    }
  },
  mounted(){
      // filtering an object by prop (it works)
      // let cur_lang = this.langs.filter(lang => lang.code === this.$i18n.locale );
      // console.info(cur_lang[0].text);
      // this.current_lang = cur_lang[0].text;
      // console.log(Provincias)
      this.provincias = Provincias.provincias_es;
  },
  methods: {
      changeProvincia(value) {
          this.$toastr.success(this.$t("Provincia changed to {0}", [value] ))
      }
  }
}
</script>
