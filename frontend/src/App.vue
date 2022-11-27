<template>
    <Navbar v-if="!isOnLoginScreen()"/>
    <router-view @loggedIn="changeToken"></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
    name: 'App',
    components: {
        Navbar
    },
    data(){
        return {
        token: ''
        }
    },
    methods:{
        isOnLoginScreen(){
            return this.$route.path === '/'
        },
        changeToken(newToken: string){
            this.token = newToken
        },
    }
});
</script>

<style>

</style>
