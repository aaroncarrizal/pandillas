<template>
    <div class="container">
        <p class="h1 text-center my-3">Editar usuario: {{user.email}}</p>
        <form @submit.prevent="editUser()">
            <div class="row">
                <!-- <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="fName" placeholder="Nombre" required v-model="password">
                    <label for="fName">Contraseña</label>
                </div> -->
                <label for="leader" class="form-label">Rol</label>
                    <select id="leader" class="form-select" aria-label="Default select example" v-model="user.role" required>
                        <option value="1">Consultor</option>
                        <option value="2">Administrador</option>
                    </select>
                <div class="row justify-content-center my-3">
                    <div class="col-8 my-2">
                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-success">Editar</button>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center my-3">
                    <div class="col-8 my-2">
                        <div class="d-grid gap-2">
                            <a @click="removeUser(this.userId)" class="btn btn-danger">Borrar usuario</a>
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
import { getUser } from '@/services/userService'
import { deleteUser } from '@/services/userService'
import { updateUser } from '@/services/userService'
import router from '@/router'

export default defineComponent({
    props:{
        role: Number,
        token: String
    },
    data(){
        return {
            user: {} as User,
            userId: ''
        }
    },
    beforeMount(){
        if(this.role != 2){
            router.push('/home')
        }
        this.userId = this.$route.params.id.toString()
        this.loadUser()
    },
    methods:{
        async loadUser(){
            try {
                const res = await getUser(this.token, this.userId)
                this.user = res.data
                console.log(this.user)
            } catch (error) {
                console.log(error)
            }
        },
        async editUser(){
            try {
                const res = await updateUser(this.token, this.userId, this.user)
                router.push(`/users`)
            } catch (err) {
                console.log(err)
            }
        },
        async removeUser(id: string){
            try {
                await deleteUser(this.token, id)
                router.push('/users')
            } catch (error) {
                console.log(error)
            }
        },
    },
})
</script>