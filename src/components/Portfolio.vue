<template>
  <div class="container">
    <div class="row">
      <div class="col-6 p-1" v-for="portfolio in getPortfolios">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">#{{portfolio.id}} - {{portfolio.stockname}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Price: {{getStocks[portfolio.id-1].value}}</h6>
            <div class="row">
              <div class="col-4">
                Stock : {{portfolio.amount}}
              </div>
              <div class="form-group offset-md-5 mb-2 col-4">
                Amount:
                <input type="number" class="form-control-plaintext" value="1"
                  v-model="amounts[portfolio.id-1]">
              </div>
              <button class="btn btn-sml btn-primary col-3" @click="sellStocks(portfolio.id)">Sell</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        amounts: [1, 1, 1, 1]
      }
    },
    computed: {
      getPortfolios: function () {
        return this.$store.state.portfolio;
      },
      getStocks: function() {
        return this.$store.state.stocks;
      },
    },
    methods: {
      sellStocks: function (index) {
        this.$store.commit('sellStock',
          {
            amount: this.amounts[index-1],
            index: index
          }
        )
      }
    }
  }

</script>

<style>

</style>
