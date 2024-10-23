<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-12 lg:px-12">
            <h1
                class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Check out the Latest Events from diverse Organizers</h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"></p>
            <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="#"
                    class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Learn more
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
    </section>

    <div class="grid md:grid-cols-4 grid-cols-none gap-0">
        <h3 v-for="item in Organizers" v-bind:key="item.id"
            class="flex justify-center  rounded-lg mx-4 my-4">
            <RouterLink :to="{ name: 'Organizer-Detail', params: { username: item.username } }"
                class="items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-5 my-5">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ item.org_name
                        }}</h5>

                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ item.email }}</p>

                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Owned by: {{ item.username }}</p>
                </div>
            </RouterLink>
        </h3>
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
        document.title = 'Discover | AfroFEST.com'
    },

    methods: {
        getOrganizers() {
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