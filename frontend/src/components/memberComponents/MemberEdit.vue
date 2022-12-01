<template>
    <div class="container">
        <p class="h1 text-center">Editar a {{ getFullName(member) }}</p>
        <form @submit.prevent="editMember()">
            <div class="row">
                <div class="col-md-8">
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
                            <input type="date" class="form-control" id="birthdate" required v-model="member.birthdate" >
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
                <div class="col-md-4">
                    <p class="h5 text-center my-4">Domicilio</p>
                    <select class="form-select" aria-label="multiple select example" v-model="member.residence">
                        <template v-for="(place, index) in places" :key="index">
                            <option :value="place._id">{{ place.description }}</option>
                        </template>
                    </select>
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
            <div class="row justify-content-center my-3">
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
import { Member } from '@/interfaces/Member'
import { getMember } from '@/services/MemberService'
import { updateMember } from '@/services/MemberService'
import { Gang } from '@/interfaces/Gang'
import { getGangs } from '@/services/GangService'
import { Place } from '@/interfaces/Place'
import { getPlaces } from '@/services/PlaceService'
import { Crime } from '@/interfaces/Crime'
import { getCrimes } from '@/services/CrimeService'

export default defineComponent({
    data() {
        return {
            memberId: '',
            member: {} as Member,
            gangs: [] as Gang[],
            places: [] as Place[],
            crimes: [] as Crime[]
        }
    },
    beforeMount(){
        this.memberId = this.$route.params.id.toString()
        this.loadMember(this.memberId)
        this.loadPlaces()
        this.loadCrimes()
    },
    mounted(){
        this.loadGangs()
    },
    methods: {
        async editMember(){
            try {
                const res = await updateMember(this.memberId,this.member)
                console.log(res)
                window.location.href = `/members/${this.memberId}`
            } catch (err) {
                console.log(err)
            }
        },
        async loadMember(id: string){
            try {
                const res = await getMember(id)
                this.member = res.data
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