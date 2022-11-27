<template>
    <div class="container my-4">
        <div class="row justify-content-center">
            <div class="col-6">
                <div class="text-center">
                    <h1>Sistema de Monitoreo de Grupos Pandilleriles</h1>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-6">
                <div class="text-center">
                    <img src="@/assets/logoPotosi.png" class="rounded mx-auto d-block" alt="logoSanLuis">
                </div>
            </div>
        </div>
        <form @submit.prevent="login()">
            <div class="row justify-content-center">
                <div class="col-6">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Correo electrónico" v-model="user.email" required>
                        <span class="input-group-text" id="basic-addon1">
                            <i class="bi bi-person-circle"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-6">
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Contraseña" v-model="user.password" required>
                        <span class="input-group-text" id="basic-addon2">
                            <i class="bi bi-lock-fill"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-6">
                    <div class="d-grid gap-2">
                        <button class="btn btn-success" type="submit" @click="login()">Acceder</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { User } from '@/interfaces/User'
import { loginUser } from '@/services/userService'
import router from '@/router'

export default defineComponent({
    data(){
        return {
            user: {} as User,
            token: ''
        }
    },
    methods:{
        async login(){
            try {
                const res = await loginUser(this.user);
                if(res.data.accessToken){
                    this.token = res.data.accessToken
                    this.$emit('loggedIn', this.token)
                    router.push({ path: '/gangs', params:{ token: this.token }})
                }else{
                    console.log("No sirve")
                }
            } catch (err) {
                console.log(err)
            }
        },
    },
})
</script>