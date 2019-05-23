<template>
<!--
    // regular select
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </div>
-->
 <div class="locale-changer">
    <b-form-select v-model="$i18n.locale"  class="mb-1" @change="langChanged">
      <!-- This slot appears above the options from 'options' prop -->
      <template slot="first">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.code" :selected="($i18n.locale==lang.code)">{{ lang.text }}</option>
      </template>
    </b-form-select>
</div>
<!--
<b-dropdown id="dropdown-left" :text="$i18n.locale" variant="primary" class="m-2">
    <b-dropdown-item v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang" @click.prevent="changeLang($event)">{{ lang }}</b-dropdown-item>
</b-dropdown>
-->
</template>


<script>
export default {
  name: 'LanguageSwipper',
  data () {
    return { langs: [
            { code: 'en_us', text: 'English (US)' },
            { code: 'es_es', text: 'Español (ES)' },
        ]
    }
  },
  methods: {
      langChanged(){
          this.$toastr.success(this.$t("Language changed", [this.$i18n.locale]))
      }
  }
}
</script>


<style lang="css" scoped>
    .locale-changer{
        width: auto;
    }
</style>