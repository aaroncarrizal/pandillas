<template>
    <Navbar v-if="!isOnLoginScreen()" :role="role"/>
    <router-view @loggedIn="changeToken" :role="role" :token="token"></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from "@/components/Navbar.vue"


export default defineComponent({
    name: 'App',
    components: {
        Navbar
    },
    data(){
        return {
        token: '',
        role: 0
        }
    },
    methods:{
        isOnLoginScreen(){
            return this.$route.path === '/'
        },
        changeToken(newToken: string, newRole: number){
            this.token = newToken
            this.role = newRole
        },
    }
});
</script>

<style>

</style>
