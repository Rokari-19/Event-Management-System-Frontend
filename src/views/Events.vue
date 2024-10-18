<template>
    <div class="grid md:grid-cols-3 grid-cols-none ">
      <Card v-for="item in events" v-bind:key="item.id" v-bind:event="item"/>
    </div>
</template>

<script>
import axios from 'axios'
import Card from '@/components/Card.vue';
export default {
    name: "Events",
    data() {
        return {
            events: []
        }
    },
    components: {
        Card
    },
    mounted() {
        this.getEvents()

        document.title = 'Events | AfroFEST.com'

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