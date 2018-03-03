<template>
  <div id="app">
    <navbar></navbar>
    <router-view class="scroll" :key="$route.params.id"/>
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
@import '../node_modules/quill/dist/quill.core.css';
@import '../node_modules/quill/dist/quill.snow.css';

strong {
  font-weight: bold;
}

#app {
  font-family: 'Arimo', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  direction: rtl;
  height: 100%;
  overflow-y: hidden;
}

body { 
  padding-top: 85px;
  padding-bottom: 25px;
  height: 100%;
}

.scroll {
  height: 100%;
  overflow-y: auto;
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
