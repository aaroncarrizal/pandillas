<template>
    <div class="container">
        <p class="h1 text-center">Registro de pandillas</p>
        <form @submit.prevent="saveGang()">
            <div class="row">
                <div class="col-md-4">
                    <p class="h5 text-center my-4">Datos principales</p>
                    <div class="my-3">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="name" v-model="gang.name" placeholder="Nombre" required>
                            <label for="name">Nombre</label>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea class="form-control" placeholder="Descripcion" id="floatingTextarea" v-model="gang.description" required></textarea>
                            <label for="floatingTextarea">Descripción</label>
                        </div>
                        <!-- <label for="leader" class="form-label">Líder</label>
                        <select id="leader" class="form-select" aria-label="Default select example" v-model="gang.leader">
                            <template v-for="(member, index) in members" :key="index">
                                <option :value="member._id">{{ getFullName(member) }}</option>
                            </template>
                        </select> -->
                    </div>
                </div>
                <div class="col-md-4">
                    <p class="h5 text-center my-4">Lugar de reunión</p>
                    <select class="form-select" aria-label="multiple select example" v-model="gang.reunionPlace">
                        <template v-for="(place, index) in places" :key="index">
                            <option :value="place._id">{{ place.description }}</option>
                        </template>
                    </select>
                </div>
                <div class="col-md-4">
                    <p class="h5 text-center my-4">Crimenes asociados</p>
                    <select class="form-select" multiple aria-label="select" v-model="gang.crimes">
                        <template v-for="(crime, index) in crimes" :key="index">
                            <option :value="crime._id">{{ crime.name }}</option>
                        </template>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <p class="h5 text-center my-4">Alianzas</p>
                    <select class="form-select" multiple aria-label="multiple select example" v-model="gang.alliances">
                        <template v-for="(gang, index) in gangs" :key="index">
                            <option :value="gang._id">{{ gang.name }}</option>
                        </template>
                    </select>
                </div>
                <div class="col-md-6">
                    <p class="h5 text-center my-4">Rivalidades</p>
                    <select class="form-select" multiple aria-label="multiple select example" v-model="gang.rivalries">
                        <template v-for="(gang, index) in gangs" :key="index">
                            <option :value="gang._id">{{ gang.name }}</option>
                        </template>
                    </select>
                </div>
            </div>
            <div class="row mb-4">
                <p class="h5 text-center my-4">Peligrosidad</p>
                <label for="peligrosidad" class="form-label">Baja, Media o Alta</label>
                <input type="range" class="form-range" min="1" max="3" id="peligrosidad" v-model="gang.dangerousness">
            </div>
            <div class="row justify-content-center">
                <div class="col-8">
                    <div class="d-grid gap-2">
                        <button class="btn btn-success" type="submit">Registrar</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Gang } from '@/interfaces/Gang'
import { createGang } from '@/services/GangService'
import { getGangs } from '@/services/GangService'
import { getMembers} from '@/services/MemberService'
import { Member } from '@/interfaces/Member'
import { Place } from '@/interfaces/Place'
import { getPlaces } from '@/services/PlaceService'
import { Crime } from '@/interfaces/Crime'
import { getCrimes } from '@/services/CrimeService'

export default defineComponent({
    data() {
        return {
            gang: {} as Gang,
            gangs: [] as Gang[],
            members: [] as Member[],
            places: [] as Place[],
            crimes: [] as Crime[]
        }
    },
    beforeMount(){
        this.loadMembers()
        this.loadGangs()
        this.loadPlaces()
        this.loadCrimes()
    },
    methods: {
        async saveGang(){
            try {
                const res = await createGang(this.gang)
                console.log(res)
                window.location.href = `/gangs`
            } catch (err) {
                console.log(err)
            }
        },
        async loadMembers(){
            try {
                const res = await getMembers()
                this.members = res.data
            } catch (error) {
                console.log(error)
            }
        },
        async loadGangs(){
            try {
                const res = await getGangs()
                this.gangs = res.data
            } catch (err) {
                console.log(err)
            }
        },
        async loadPlaces(){
            try {
                const res = await getPlaces()
                this.places = res.data
            } catch (err) {
                console.log(err)
            }
        },
        async loadCrimes(){
            try {
                const res = await getCrimes()
                this.crimes = res.data
            } catch (err) {
                console.log(err)
            }
        },
        getFullName(member: Member){
            return member.name.firstName + ' ' + member.name.middleName + ' ' + member.name.lastName
        }
    }
})
</script>

<style>
</style>