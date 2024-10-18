<template>
    <div class="nav bg-gradient-to-b from-gray-700 text-gray-100 py-3.5 px-24 shadow md:flex justify-between 
    items-center">
        <div class="flex items-center cursor-pointer">

            <span class="text-green-400 text-xl mr-1">
                <i class="bi bi-calendar2-event"></i>
            </span>
            <a href="/">
                <div class="text-xl">AfroFEST.com</div>
            </a>
        </div>

        <span @click="menuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
            <i :class="[open ? 'bi bi-x' : 'bi bi-list']"></i>
        </span>

        <ul class="md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute  md:w-auto w-full top-14 duration-500 ease-in"
            :class="[open ? 'left-0 bg-gray-900' : 'left-[-100%] bg-transparent']">
            <li class="md:mx-4 md:my-0 my-6">
                <RouterLink class="text-xl hover:text-green-400" to="/events">Events</RouterLink>
            </li>
            <li class="md:mx-4 md:my-0 my-6">
                <RouterLink class="text-xl hover:text-green-400" to="/discover">Discover</RouterLink>
            </li>

            <template v-if="$store.state.isAuth">
                <router-link to="/account" class="text-xl hover:text-green-400">Account</router-link>
            </template>

            <template v-else>
                <router-link to="/login" class="text-xl hover:text-green-400">Log In</router-link>
            </template>


            <li class="md:mx-4">
                <RouterLink class="text-xl hover:text-green-400" to="/calenders">Calenders</RouterLink>
            </li>
            <Button></Button>
        </ul>

    </div>
</template>

<script>
import { ref } from 'vue';
import Button from './button.vue'

export default {
    name: 'Navbar',
    components: {
        Button
    },
    setup() {
        let open = ref(false)

        function menuOpen() {
            open.value = !open.value
        }

        return { open, menuOpen }
    }

}
</script>

<style lang="scss">
.nav {

    a {
        font-weight: bold;
        color: antiquewhite;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>