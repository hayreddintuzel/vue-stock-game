<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Stock Trader</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" to="/stocks"  class="nav-item" active-class="active">
            <a class="nav-link">Stocks</a>
          </router-link>
          <router-link tag="li" to="/portfolio" class="nav-item" active-class="active">
            <a class="nav-link">Portfolio</a>
          </router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }

</script>
