<template>
    <div class="container">
        <div class="row">
            <div class="col-4-sm-12 my-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-12">
                                    <h1 class="card-title">{{ gang.name }}</h1>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-8">
                                    <h3>{{ gang.description }}</h3>
                                    
                                    <h4 v-if="gang.leader">{{ getFullName(gang.leader) }}</h4>
                                    <h4 v-else>Sin líder registrado</h4>
                                </div>
                                <template v-if="(this.role == 2)">
                                    <div class="col-sm-2">
                                        <div class="d-grid gap-2">
                                            <router-link :to="`/gangs/edit/${gangId}`" class="btn btn-primary" role="button">Editar</router-link>
                                        </div>
                                    </div>
                                    <div class="col-sm-2">
                                        <div class="d-grid gap-2">
                                                <a @click="removeGang(gangId)" class="btn btn-danger" role="button">Borrar</a>
                                            </div>
                                    </div>
                                </template>
                            </div>
                            <div class="row">
                                <div class="col-sm-2">
                                    <h5>Numero de miembros: {{ gang.numMembers }}</h5>
                                </div>
                                <div class="col-sm-2">
                                    <h5>Promedio de edad: {{ gang.ageAverage }}</h5>
                                </div>
                                <div class="col-sm-2">
                                    <h5>Peligrosidad: {{ gang.dangerousness }}</h5>
                                </div>
                                <div class="col-sm-6" v-if="gang.reunionPlace">
                                    <h5>{{ getFullAddress(gang.reunionPlace) }}</h5>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-4">
                                    <h4>Miembros</h4>
                                    <ul class="list-group list-group-flush">
                                        <template v-for="(member,i) in gang.members" :key="i">
                                            <li class="list-group-item">
                                                {{ getFullName(member) }}
                                            </li>
                                        </template>
                                    </ul>
                                </div>
                                <div class="col-sm-4">
                                    <h4>Rivalidades</h4>
                                    <ul class="list-group list-group-flush">
                                        <template v-for="(rivalrie,i) in gang.rivalries" :key="i">
                                            <li class="list-group-item">
                                                {{ rivalrie['name'] }}
                                            </li>
                                        </template>
                                    </ul>
                                </div>
                                <div class="col-sm-4">
                                    <h4>Alianzas</h4>
                                    <ul class="list-group list-group-flush">
                                        <template v-for="(alliance,i) in gang.alliances" :key="i">
                                            <li class="list-group-item">
                                                {{ alliance['name'] }}
                                            </li>
                                        </template>
                                    </ul>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <h4>Crimenes</h4>
                                    <ul class="list-group list-group-flush">
                                        <template v-for="(crime,i) in gang.crimes" :key="i">
                                            <li class="list-group-item">
                                                {{ crime['name'] }}
                                            </li>
                                        </template>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Gang } from '@/interfaces/Gang'
import { getGang } from '@/services/GangService'
import { deleteGang } from '@/services/GangService'
import { getMembers} from '@/services/MemberService'
import { Member } from '@/interfaces/Member'
import { Place } from '@/interfaces/Place'
import { Crime } from '@/interfaces/Crime'
import router from '@/router'

export default defineComponent({
    props:{
        role: Number
    },
    data() {
        return {
            gang: {} as Gang,
            members: [] as Member[],
            gangId: ''
        }
    },
    beforeMount(){
        this.gangId = this.$route.params.id.toString()
        this.loadMembers()
        this.loadGang(this.gangId)
    },
    methods: {
        async loadMembers(){
            try {
                const res = await getMembers()
                this.members = res.data
            } catch (error) {
                console.log(error)
            }
        },
        async loadGang(id: string){
            try {
                const res = await getGang(id)
                this.gang = res.data
            } catch (err) {
                console.log(err)
            }
        },
        async removeGang(id: string){
            try {
                await deleteGang(id)
                router.push('/gangs')
            } catch (error) {
                console.log(error)
            }
        },
        getFullName(member: Member){
            return member.name.firstName + ' ' + member.name.middleName + ' ' + member.name.lastName
        },
        getFullAddress(place: Place){
            return place.delegacy + ', ' + place.municipality + ', ' + place.suburb + ', ' + place.street + ' #' + place.number 
        }
    }
})
</script>