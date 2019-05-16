<template>
<div class='api'>

  <h1>Bitcoin Price Index</h1>
  <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>
  <section v-else>
    <div v-if="loading">Loading...</div>
    <div
      v-else
      v-for="currency in info.bpi"
      v-bind:key="currency.code"
      class="currency"
      >
      {{ currency.description }}:
      <span class="lighten">
        <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
      </span>
    </div>

    <p v-if="info" class="text-primary">Timestamp: {{ info.time.updated }} </p>

  </section>

</div>
</template>

<script>

import testService from '@/api/test.service';

export default {
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
      testService.getAll()
        .then(response => {
            this.info = response.data
        })
        .catch(error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => this.loading = false)
  }
}
</script>
