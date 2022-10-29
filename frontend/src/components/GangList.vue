<template>
    <div class="container">
        <div class="row">
            <template v-for="(gang, index) in gangs" :key="index">
                <div class="col-4-sm-12 my-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">{{ gang.name }}</h5>
                            <p class="card-text">{{ gang }}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getGangs } from '@/services/GangService'
import { Gang } from '@/interfaces/Gang'

export default defineComponent({
    data(){
        return {
            gangs: [] as Gang[]
        }
    },
    mounted(){
        this.loadGangs()
    },
    methods:{
        async loadGangs(){
            try {
                const res = await getGangs();
                this.gangs = res.data
            } catch (err) {
                console.log(err)
            }
        },
    },
})
</script>

<style>
</style>