<template>
  <Header />
  <div class="page-container">
    <Home />
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Home from './Pages/home/Home.vue'

export default {
  components: {
    Header,
    Home
  }
}
</script>

<style>
@import './styles/global.css';
</style>
