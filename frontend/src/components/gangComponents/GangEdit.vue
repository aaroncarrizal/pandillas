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
                            <template v-for="(member, index) in members" :key="index">
                                <option :value="member._id">{{ getFullName(member) }}</option>
                            </template>
                        </select>
                    </div>
                </div>
                <div class="col-md-4">
                    <p class="h5 text-center my-4">Ubicación</p>
                    <!-- <div class="my-3">
                        <input class="form-control my-1" placeholder="Calle" v-model="gang.name"> 
                        <input class="form-control my-1" placeholder="Número" v-model="gang.name"> 
                        <input class="form-control my-1" placeholder="Colonia" v-model="gang.name"> 
                        <input class="form-control my-1" placeholder="Código Postal" v-model="gang.name"> 
                        <input class="form-control my-1" placeholder="Entre calle y calle" v-model="gang.name"> 
                    </div> -->
                    seleccionar de las que ya estan
                </div>
                <div class="col-md-4">
                    <p class="h5 text-center my-4">Delitos asociados</p>
                    <!-- <div class="my-3">
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Robo a persona</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Robo a vehículo</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Robo a casa habitación</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Robo a comercio</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Robo a repartidores</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Narcomenudeo</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Extorsiones</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Daños</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Otros Delitos</div>
                    </div> -->
                    Lista de los que ya existen
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
import { Crime } from '@/interfaces/Crime'

export default defineComponent({
    data() {
        return {
            gang: {} as Gang,
            gangs: [] as Gang[],
            members: [] as Member[],
            gangId: ''
        }
    },
    beforeMount(){
        this.gangId = this.$route.params.id.toString()
        this.loadMembers()
        this.loadGang(this.gangId)
    },
    mounted(){
        this.loadMembers()
        this.loadGangs()
    },
    methods: {
        async editGang(){
            try {
                const res = await updateGang(this.gangId,this.gang)
                console.log(res)
                window.location.href = `/gangs/${this.gangId}`
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
        getFullName(member: Member){
            return member.name.firstName + ' ' + member.name.middleName + ' ' + member.name.lastName
        }
    }
})
</script>