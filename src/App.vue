<template>
  <div class="container">
    <app-header></app-header>
  </div>
</template>

<script>
  import stockTrader from './components/StockTrader.vue';
  import header from './components/Header.vue';

  export default {
    components: {
      appStockTrader: stockTrader,
      appHeader : header
    }
  }
</script>

