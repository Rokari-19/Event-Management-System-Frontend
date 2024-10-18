<template>
  <div class="home">
    <Welcome />
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue';
export default {
  name: 'Home',
  mounted() {
    document.title = "Home | AfroFEST.com"
  }
}
</script>
