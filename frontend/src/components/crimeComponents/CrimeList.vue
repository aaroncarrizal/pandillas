<template>
    <div class="container">
        <p class="h1 text-center my-3">Crimenes registrados</p>
        <table class="table table-striped table-bordered">
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Editar</th>
            </tr>
            </thead>
            <tbody>
                <tr  v-for="(crime, index) in crimes" :key="index">
                    <td>{{crime.name}}</td>
                    <td class="text-center">
                        <a :href="`/crimes/edit/${crime._id}`" class="btn btn-primary" role="button">
                            <i class="bi bi-pencil-square "></i>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Crime } from '@/interfaces/Crime'
import { getCrimes } from '@/services/CrimeService'

export default defineComponent({
    data(){
        return {
            crimes: [] as Crime[]
        }
    },
    mounted(){
        this.loadCrimes()
    },
    methods:{
        async loadCrimes(){
            try {
                const res = await getCrimes()
                this.crimes = res.data
            } catch (err) {
                console.log(err)
            }
        },
    },
})
</script>