<template>
  <div>

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Card",
  data() {
    return {
      events : []
    }
  },
  mounted() {
    this.getEvents()

  },
  methods: {
    getEvents() {
      axios
        .get("/api/v1/events/")
        .then(response => {
          this.events = response.data;
          console.log(this.events);
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>