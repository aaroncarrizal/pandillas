<template>
    <div class="container">
        <p class="h1 text-center">Editar {{gang.name}}</p>
        <form @submit.prevent="editGang()">
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
                        <label for="leader" class="form-label">Líder</label>
                        <select id="leader" class="form-select" aria-label="Default select example" v-model="gang.leader">
                            <template v-for="(member, index) in gang.members" :key="index">
                                <option :value="member['_id']">{{ getFullName(member) }}</option>
                            </template>
                        </select>
                        <div class="form-floating my-3">
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
                        <button class="btn btn-primary" type="submit">Editar</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Gang } from '@/interfaces/Gang'
import { getGang } from '@/services/GangService'
import { updateGang } from '@/services/GangService'
import { getGangs } from '@/services/GangService'
import { Member } from '@/interfaces/Member'
import { getMembers} from '@/services/MemberService'
import { Place } from '@/interfaces/Place'
import { updatePlace } from '@/services/PlaceService'
import { getPlace } from '@/services/PlaceService'
import { Crime } from '@/interfaces/Crime'
import { getCrimes } from '@/services/CrimeService'
import router from '@/router'

export default defineComponent({
    data() {
        return {
            gang: {} as Gang,
            gangs: [] as Gang[],
            members: [] as Member[],
            gangId: '',
            place: {} as Place,
            crimes: [] as Crime[]
        }
    },
    async beforeMount(){
        this.gangId = this.$route.params.id.toString()
        await this.loadMembers()
        await this.loadGang(this.gangId)
        await this.loadPlace(this.gang.reunionPlace._id)
        await this.loadCrimes()
    },
    mounted(){
        this.loadMembers()
        this.loadGangs()
    },
    methods: {
        async editGang(){
            try {
                await this.editPlace()
                const res = await updateGang(this.gangId,this.gang)
                console.log(res)
                router.push(`/gangs/${this.gangId}`)
            } catch (err) {
                console.log(err)
            }
        },
        async editPlace(){
            try {
                const res = await updatePlace(this.gang.reunionPlace._id,this.place)
                console.log(res)
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
        async loadGang(id: string){
            try {
                const res = await getGang(id)
                this.gang = res.data
            } catch (err) {
                console.log(err)
            }
        },
        async loadPlace(id: string){
            try {
                const res = await getPlace(id)
                this.place = res.data
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