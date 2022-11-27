<template>
    <div class="container">
        <div class="row">
            <h1>Pandillas registradas</h1>
        </div>
        <div class="row">
            <template v-for="(gang, index) in gangs" :key="index">
                <div class="col-4-sm-12 my-4">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">{{ gang.name }}</h3>
                            <h4>{{ gang.description }}</h4>
                            <div class="row">
                                <div class="col-6">
                                    <h5>Alianzas</h5>
                                    <ul>
                                        <li v-for="(alliance,i) in gang.alliances" :key="i">
                                            {{ alliance }}
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-6">
                                    <h5>Rivalidades</h5>
                                    <ul>
                                        <li v-for="(rivalrie,i) in gang.rivalries" :key="i">
                                            {{ rivalrie }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row my-3">
                                <div class="progress" style="height: 20px;">
                                    <div class="progress-bar" role="progressbar" :style="`width: ${gang.dangerousness}%;`"></div>
                                </div>
                            </div>
                            <a :href="'/gangs/' + gang._id" class="btn btn-primary">Ver detalles</a>
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