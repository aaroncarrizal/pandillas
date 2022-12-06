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
                        <div class="form-floating mb-3">
                            <input type="number" class="form-control" id="name" v-model="gang.ageAverage" placeholder="promedio">
                            <label for="name">Promedio de edades</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <p class="h5 text-center my-4">Lugar de reunión</p>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="municipality" v-model="place.municipality" placeholder="Nombre" required>
                                <label for="municipality">Municipalidad</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="delegacy" v-model="place.delegacy" placeholder="Nombre" required>
                                <label for="delegacy">Delegación</label>
                            </div>
                            <label for="leader" class="form-label">Localidad</label>
                            <select id="leader" class="form-select" aria-label="Default select example" v-model="place.locality" required>
                                <option value="Norte">Norte</option>
                                <option value="Sur">Sur</option>
                                <option value="Centro">Centro</option>
                                <option value="Este">Este</option>
                                <option value="Oeste">Oeste</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="suburb" v-model="place.suburb" placeholder="Nombre">
                                    <label for="suburb">Colonia</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="street" v-model="place.street" placeholder="Nombre">
                                    <label for="street">Calle</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="number" class="form-control" id="number" v-model="place.number" placeholder="Nombre">
                                    <label for="number">Número</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="number" class="form-control" id="postalCode" v-model="place.postalCode" placeholder="Nombre">
                                    <label for="postalCode">Código Postal</label>
                                </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="description" v-model="place.description" placeholder="Nombre">
                                    <label for="description">Descripción</label>
                                </div>
                        </div>
                    </div>
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
import { createPlace } from '@/services/PlaceService'
import { Crime } from '@/interfaces/Crime'
import { getCrimes } from '@/services/CrimeService'
import router from '@/router'

export default defineComponent({
    data() {
        return {
            gang: {} as Gang,
            place: {} as Place,
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
                let placeId = await this.savePlace()
                this.gang.reunionPlace = placeId
                const res = await createGang(this.gang)
                router.push(`/gangs`)
            } catch (err) {
                console.log(err)
            }
        },
        async savePlace(){
            try {
                const res = await createPlace(this.place)
                return res.data._id
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