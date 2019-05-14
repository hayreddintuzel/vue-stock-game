<template>
  <div class="container mt-4">
    <div class="row">
      <div class="card col-6" v-for="stock in getStocks">
        <div class="card-body">
          <h5 class="card-title">#{{stock.id}} - {{stock.stockname}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Price: {{stock.value}}</h6>
          <div class="row">
            <div class="form-group offset-md-5 mb-2 col-4">
              Amount:
              <input type="number" class="form-control-plaintext" value="1" v-model="amounts[stock.id-1]">
            </div>
            <button class="btn btn-sml btn-primary col-3" @click="buyStocks(stock.id)">Buy</button>
          </div>
        </div>
      </div>
    </div>
    <li v-for="amount in getPortfolios">{{amount}}</li>
  </div>
</template>

<script>
  export default {
    name: 'Stocks',
    data() {
      return {
        amounts : [1, 1, 1, 1],
      }
    },
    computed: {
      getStocks() {
        return this.$store.state.stocks;
      },
      getPortfolios() {
        return this.$store.state.portfolio;
      }
    },
    methods: {
      buyStocks(index) {
        this.$store.commit('buyStock',
          {
            amount: this.amounts[index-1],
            index: index
          }
        )
      }
    }
  }

</script>
