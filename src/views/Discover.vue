<template>
    <div class="organizers">
        <h1 class="text-2xl text-gray-400 font-bold">{{ Organizers[1] }}</h1>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Discover',
    data() {
        return {
            Organizers: [],
            orgEvents: []
        }
    },
    mounted() {
        this.getOrganizers()
    },

    methods: {
        getOrganizers() {
            axios
                .get(`/api/v1/organizers/`)
                .then(response => {
                    this.Organizers = response.data
                    console.log(this.Organizers[1].username)
                })
                .catch(error => {
                    console.log(error)
                })
        },

        getOrganizerEvents() {
            const org = this.Organizers[1].username
            axios
                .get(`/api/v1/organizers/${org}/events/`)
                .then(response => {
                    this.orgEvents = response.data
                })
        }
    }
}
</script>