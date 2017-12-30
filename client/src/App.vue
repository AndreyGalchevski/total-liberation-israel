<template>
  <div id="app">
    <navbar></navbar>
    <router-view :key="$route.params.id"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Arimo', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  direction: rtl;
}

body { 
  padding-top: 85px;
  padding-bottom: 25px;
}

.fa-spinner {
  font-size:50px;
} 

@media (max-width: 970px) {
    body {
        padding-top: 1opx;
    }
}
</style>
