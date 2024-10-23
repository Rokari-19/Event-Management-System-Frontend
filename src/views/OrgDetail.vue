<template>
    <div class="">

    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Organizer-Detail',
    data() {
        return {
            eventsList: []
        }
    },
    mounted() {
        this.getOrganizerEvents()
    },
    methods: {
        
        getOrganizerEvents() {
            const org = this.$route.params.username
            axios
                .get(`/api/v1/organizers/${org}/events/`)
                .then(response => {
                    this.eventsList = response.data
                    console.log(this.eventsList)
                })
        }
    }
}
</script>