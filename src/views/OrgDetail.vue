<template> 
        <div class="grid md:grid-cols-3 grid-cols-none gap-0" v-for="event in eventsList" v-bind:key="event.id">
            <RouterLink :to="{ name: 'EventDetail', params: { id: event.id } }"
                class="items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-5 my-5">
                <img class="mx-auto mt-5 rounded-lg h-auto md:h-auto md:w-48 md:rounded-lg md:rounded-lg"
                    :src="event.get_event_thumb" alt="">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{
                        event.event_name }}</h5>
                    <!-- <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ event.event_desc }}</p> -->
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Date: {{ event.event_start }} to {{
                        event.event_end
                    }}</p>
                    <!-- <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Time: {{ event.start_time }} to {{ event.end_time }}</p> -->
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Hosted by: {{ event.organizer }}
                    </p>
                </div>
            </RouterLink>
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
                    // console.log(this.eventsList)
                    
                    document.title = this.org + '| Afrofest.com'
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>