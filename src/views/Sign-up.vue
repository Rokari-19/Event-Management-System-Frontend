<template>
    <div class="Signup">
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-5 py-7 mx-auto md:h-screen lg:py-0">
                <a href="/" class="felx items-center mb-6 text-2xl ">
                    <span class="text-green-400 text-xl mr-1">
                        <i class="bi bi-calendar2-event"></i>
                    </span>
                    AfroFEST
                </a>

                <div
                    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

                        <h1 class="text-xl font-bold leading-tight tracking-tight text0gray-900 md:text-2xl dark:text-white">
                            Create An AfroFEST Account
                        </h1>

                        <form class="space-y-4" @submit.prevent="submitForm">
                            <div class="">
                                <label for="username" class="block mb-2 text-sm font-medium text-gray-900 text-center dark:text-white">
                                    Your Username
                                </label>
                                <input 
                                    type="username" 
                                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    v-model="username"
                                    placeholder="username"
                                >
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 text-center dark:text-white">
                                    Type A Password
                                </label>
                                <input 
                                    type="password" 
                                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    v-model="password"
                                    placeholder="••••••••"
                                >
                                <label for="confirmm" class="block mb-2 text-sm font-medium text-gray-900 text-center dark:text-white">
                                    Confirmm Your Password
                                </label>
                                <input 
                                    type="password" 
                                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    v-model="confirm"
                                    placeholder="••••••••"
                                >
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 text-center dark:text-white">
                                    Enter Your Email (optional)
                                </label>
                                <input 
                                    type="email" 
                                    class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    v-model="email"
                                    placeholder="example: blank@mail.com"
                                >
                            </div>
                            <button type="submit"
                                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                Submit
                            </button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Have An Account Already? <RouterLink to="/login" href="#"
                                    class="font-medium text-primary-600 hover:underline dark:text-primary-500">Log
                                    In</RouterLink>
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import axios from 'axios';
import { toast } from 'bulma-toast';
export default {
    name: 'Signup',
    data() {
        return {
            username: '',
            email: '',
            password: '',
            confirm: '',
            errors: []
        }
    },
    mounted() {
        document.title = "Sign Up | AfroFEST.com"
    },
    methods: {
        submitForm() {
            // handling errors and notifications using bulma toast
            this.errors = []
            if (this.username === '') {
                this.errors.push('You need a Username to create an account')
            }

            if (this.password === '') {
                this.errors.push('Password is too short')
            }

            if (this.password !== this.confirm) {
                this.errors.push('passwords don\'t match')
            }

            // parsing the data into one object to push to the api

            if (!this.errors.length) {
                const data = {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    confirm: this.confirm,
                }
                console.log(data)

                axios
                    .post('/api/v1/signup/', data)
                    .then(response => {
                        toast({
                            message: 'Successfully Created an Account!!!',
                            type: 'is-success',
                            dismissible: true,
                            pauseOnHover: true,
                            duration: 2800,
                            position: 'bottom-center'
                        })

                        this.$router.push('/login')
                    })
                    .catch(error => {
                        if (error.response) {
                            for (const property in error.response.data) {
                                this.errors.push(`${property}: ${error.response.data[property]}`)
                            }
                            console.log(JSON.stringify(error.response.data))
                        } else if (error.message) {
                            this.errors.push('please reload page')
                            console.log(JSON.stringify(error))
                        }
                    })
            }
        }
    }
}
</script>