<template>
  <div class="bg-gray-900">

    <Navbar />

    <section class="mt-6 bg-gray-900">
      <router-view />
    </section>

    <Footer />

  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

nav {
  padding: 20px;
  display: flex;

  justify-content: space-between;
  background-color: #2c3e50;

  a {
    font-weight: bold;
    color: antiquewhite;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>
