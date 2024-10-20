<template>
    <div class="organizers">
        <h1 class="text-2xl text-gray-400 font-bold">{{ Organizers.username }}</h1>

        blablablablablabal
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Discover',
    data() {
        return {
            Organizers: []
        }
    },
    mounted() {
        this.getOrganizers()
    },

    methods: {
        getOrganizers () {
            axios
                .get(`/api/v1/organizers/`)
                .then(response => {
                    this.Organizers = response.data
                    console.log(this.Organizers)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>