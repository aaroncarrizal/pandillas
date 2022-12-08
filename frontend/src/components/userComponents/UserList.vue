<template>
    <div class="container">
        <b-row>
            <b-col>
                <p class="h1 text-center my-3">Usuarios</p>
                <b-table :items="users" :fields="fields" stacked="md" show-empty striped>
                    <template #cell(role)="row">
                        <template v-if="(row.item.role == 1)">Consultor</template>
                        <template v-if="(row.item.role == 2)">Administrador</template>
                    </template>
                    <template #cell(edit)="row">
                        <router-link :to="`users/edit/${row.item._id}`">
                            <i class="bi bi-pencil-square"></i>
                        </router-link>
                    </template>
                </b-table>
            </b-col>
        </b-row>
        
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { User } from '@/interfaces/User'
import { getUsers } from '@/services/userService'
import router from '@/router'

export default defineComponent({
    props:{
        role: Number,
        token: String
    },
    data(){
        return {
            users: [] as User[],
            fields: [
                { key: 'email', label: 'Correo electrónico', sortable: true },
                { key: 'role', label: 'Rol', sortable: true },
                { key: 'edit',label: 'Editar' },
            ],
        }
    },
    beforeMount(){
        if(this.role != 2){
            router.push('/home')
        }
        this.loadUsers()
    },
    methods:{
        async loadUsers(){
            try {
                const res = await getUsers(this.token)
                this.users = res.data
            } catch (error) {
                console.log(error)
            }
        }
    },
})
</script>
<style></style>