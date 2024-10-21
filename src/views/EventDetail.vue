<template>
    <section class="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
        <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
                    <img class="w-full dark:hidden rounded-lg" :src="event.get_event_img" alt="" />
                    <img class="w-full hidden dark:block rounded-lg" :src="event.get_event_img" alt="" />
                </div>

                <div class="mt-6 sm:mt-8 lg:mt-0">
                    <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">{{ event.event_name }}
                    </h1>
                    <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
                        <p class="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                            Status: {{ event.event_status }}
                        </p>
                    </div>

                    <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                        <a href="/attend-event" title=""
                            class="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-green rounded-lg border border-gray-200 hover:bg-green-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-700 dark:bg-green-800 dark:text-gray-400 dark:border-green-600 dark:hover:text-white dark:hover:bg-green-700"
                            role="button">
                            <svg class="w-5 h-5 -ms-2 me-2" fill="#000000" viewBox="0 -4 40 40" version="1.1"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <title>ticket</title>
                                    <path
                                        d="M39.5 23h0.5v1c-0.299 0-0.628 0-1 0-1.104 0-2 0.896-2 2 0 0.366 0 0.705 0 1h-34c0-0.295 0-0.634 0-1 0-1.104-0.896-2-2-2-0.319 0-0.666 0-1 0v-1h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.5v-1h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.5v-1h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.5v-1h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.5v-1h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.5v-1h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.5v-1h0.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-0.5v-1c0.299 0 0.628 0 1 0 1.104 0 2-0.896 2-2 0-0.366 0-0.705 0-1h34c0 0.295 0 0.634 0 1 0 1.104 0.896 2 2 2 0.372 0 0.701 0 1 0v1h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h0.5v1h-0.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5zM36 11c0-1.104-0.896-2-2-2h-28c-1.104 0-2 0.896-2 2v11c0 1.104 0.896 2 2 2h28c1.104 0 2-0.896 2-2v-11zM34 23h-28c-0.553 0-1-0.448-1-1v-11c0-0.553 0.447-1 1-1h28c0.552 0 1 0.447 1 1v11c0 0.552-0.448 1-1 1zM11.387 13.988h-3.973v0.59h1.652v4.422h0.664v-4.422h1.656v-0.59zM12.768 13.988h-0.664v5.012h0.664v-5.012zM14.759 15.49c0.104-0.312 0.287-0.56 0.546-0.744 0.258-0.185 0.58-0.277 0.965-0.277 0.335 0 0.613 0.083 0.834 0.25 0.222 0.166 0.39 0.432 0.506 0.797l0.652-0.154c-0.134-0.462-0.372-0.821-0.714-1.076s-0.764-0.383-1.265-0.383c-0.442 0-0.847 0.101-1.215 0.303s-0.651 0.497-0.852 0.886c-0.199 0.389-0.299 0.844-0.299 1.365 0 0.479 0.089 0.927 0.266 1.344s0.434 0.736 0.771 0.956c0.339 0.22 0.778 0.33 1.318 0.33 0.521 0 0.963-0.143 1.324-0.429s0.611-0.701 0.75-1.246l-0.664-0.168c-0.091 0.422-0.266 0.74-0.522 0.955-0.258 0.214-0.571 0.321-0.943 0.321-0.305 0-0.589-0.079-0.851-0.236s-0.455-0.395-0.579-0.713-0.187-0.69-0.187-1.117c0.002-0.332 0.054-0.653 0.159-0.964zM23.363 13.988h-0.898l-2.488 2.48v-2.48h-0.664v5.012h0.664v-1.738l0.822-0.795 1.783 2.533h0.875l-2.195-2.98 2.101-2.032zM27.938 18.41h-3.074v-1.707h2.77v-0.59h-2.77v-1.535h2.957v-0.59h-3.621v5.012h3.738v-0.59zM32.625 13.988h-3.973v0.59h1.652v4.422h0.664v-4.422h1.656v-0.59z">
                                    </path>
                                </g>
                            </svg>
                            Get Ticket
                        </a>

                        <a href="#" title=""
                            class="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-green-800 focus:ring-4 focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                            role="button">
                            <svg class="w-5 h-5 -ms-2 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                            </svg>

                            Add to Calendar
                        </a>
                    </div>

                    <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                    <p class="mb-6 text-gray-500 dark:text-gray-400">
                        {{ event.event_desc }}
                    </p>

                    <p class="mb-6 text-gray-500 dark:text-gray-400">
                        Venue: {{ event.event_venue }} <br />
                        Location: {{ event.location }}
                    </p>

                    <p class="mb-4 text-gray-500 dark:text-gray-400">
                        From: {{ event.event_start }} To: {{ event.event_end }}
                    </p>

                    <p class="mb-4 text-gray-500 dark:text-gray-400">
                        Time: {{ event.start_time }} - {{ event.end_time }}
                    </p>

                    <p class="mb-4 text-gray-500 text-lg dark:text-gray-400 text-lg">
                        Brought to you by: {{ event.organizer }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="js">
import axios from 'axios';
export default {
    name: 'EventDetail',
    data() {
        return {
            event: []
        }
    },
    mounted() {
        this.getEvent()
    },
    methods: {
        getEvent() {
            const id = this.$route.params.id
            axios
                .get(`/api/v1/events/${id}`)
                .then(response => {
                    this.event = response.data
                    console.log(this.event)
                    document.title = this.event.event_name + ' | AfroFEST.com'

                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
}
</script>