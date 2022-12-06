<template>
    <div class="container">
        <p class="h1 text-center">Registro de integrante</p>
        <form @submit.prevent="saveMember()">
            <div class="row">
                <div class="col-md-6">
                    <p class="h5 text-center my-4">Datos principales</p>
                    <div class="my-3">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="fName" placeholder="Nombre" required v-model="member.name.firstName">
                            <label for="fName">Nombre</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="mName" placeholder="Apellido paterno" required v-model="member.name.middleName">
                            <label for="mName">Apellido paterno</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="lName" placeholder="Apellido materno" v-model="member.name.lastName">
                            <label for="name">Apellido materno</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="alias" placeholder="Alias" v-model="member.alias">
                            <label for="alias">Alias</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="name" placeholder="URL red social" v-model="member.username">
                            <label for="uasername">URL red social</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="date" class="form-control" id="birthdate" v-model="member.birthdate" >
                            <label for="birthdate">Fecha de nacimiento</label>
                        </div>
                        <label for="gangId" class="form-label">Pandilla</label>
                        <select id="gangId" class="form-select" aria-label="Default select example" v-model="member.gangId">
                            <template v-for="(gang, index) in gangs" :key="index">
                                <option :value="gang._id">{{ gang.name }}</option>
                            </template>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <p class="h5 text-center my-4">Domicilio</p>
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
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p class="h5 text-center">Delitos asociados</p>
                    <select class="form-select" multiple aria-label="select" v-model="member.crimes">
                        <template v-for="(crime, index) in crimes" :key="index">
                            <option :value="crime._id">{{ crime.name }}</option>
                        </template>
                    </select>
                </div>
            </div>
            <div class="row justify-content-center mb-3">
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
import { createMember } from '@/services/MemberService'
import { Member } from '@/interfaces/Member'
import { Gang } from '@/interfaces/Gang'
import { getGangs } from '@/services/GangService'
import { Place } from '@/interfaces/Place'
import { createPlace } from '@/services/PlaceService'
import { Crime } from '@/interfaces/Crime'
import { getCrimes } from '@/services/CrimeService'
import router from '@/router'

export default defineComponent({
    data() {
        return {
            member: {name:{}} as Member,
            gangs: [] as Gang[],
            place: {} as Place,
            crimes: [] as Crime[]
        }
    },
    beforeMount(){
        this.loadGangs()
        this.loadCrimes()
    },
    methods: {
        async saveMember(){
            try {
                let placeId = await this.savePlace()
                this.member.residence = placeId
                const res = await createMember(this.member)
                console.log(res)
                router.push(`/members`)
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
        async loadGangs(){
            try {
                const res = await getGangs()
                this.gangs = res.data
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
    }
})
</script>
