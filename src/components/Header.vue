<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Stock Trader</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" to="/stocks" class="nav-item" active-class="active">
            <a class="nav-link">Stocks</a>
          </router-link>
          <router-link tag="li" to="/portfolio" class="nav-item" active-class="active">
            <a class="nav-link">Portfolio</a>
          </router-link>
        </ul>
      </div>
      <button class="btn btn-sm btn-secondary mr-2">End Day</button>
      <div class="dropdown mr-2">
        <button class="btn btn-sm dropdown-toggle" data-toggle="dropdown">Save & Load</button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Save</a>
            <a class="dropdown-item" href="#">Load</a>
          </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }

</script>
