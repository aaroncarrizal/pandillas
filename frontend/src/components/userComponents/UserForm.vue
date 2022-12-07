<template>
    <div class="container">
        <p class="h1 text-center my-3">Crear usuario</p>
        <form @submit.prevent="saveUser()">
            <div class="row">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="email" placeholder="Nombre" required v-model="user.email">
                    <label for="email">Correo electrónico</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="password" placeholder="Nombre" required v-model="user.password">
                    <label for="password">Contraseña</label>
                </div>
                <label for="role" class="form-label">Rol</label>
                    <select id="role" class="form-select" aria-label="Default select example" v-model="user.role" required>
                        <option value="1">Consultor</option>
                        <option value="2">Administrador</option>
                    </select>
                <div class="row justify-content-center my-3">
                    <div class="col-8 my-2">
                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-success">Crear</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { User } from '@/interfaces/User'
import { createUser } from '@/services/userService'
import router from '@/router'

export default defineComponent({
    props:{
        role: Number,
        token: String
    },
    data(){
        return {
            user: {} as User,
        }
    },
    beforeMount(){
        if(this.role != 2){
            router.push('/home')
        }
    },
    methods:{
        async saveUser(){
            try {
                const res = await createUser(this.token, this.user)
                console.log(res)
                router.push(`/users`)
            } catch (err) {
                console.log(err)
            }
        },
    },
})
</script>