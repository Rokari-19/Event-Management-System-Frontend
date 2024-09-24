<template>
    <div class="login">

    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'Login',
    data() {
        return {
            username: '',
            password: '',
            errors: [],
        }
    },
    mounted () {
        document.title = 'Login | AfroFEST.com'
        this.Login()
    },
    methods: {
        Login() {
            const data = {
                username: this.username,
                password: this.password,
            }

            axios
                .post('/api/v1/login', data)
                .then(response => {
                    const token = response.data.token
                    
                })
        }
    }
}
</script>