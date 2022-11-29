<template>
    <div class="container">
        <p class="h1 text-center">Registro de integrante</p>
        <form @submit.prevent="saveMember()">
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
                    <p class="h5 text-center my-2">Ubicación</p>
                    seleccionar de los que ya hay
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p class="h5 text-center">Delitos asociados</p>
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
            <div class="row justify-content-center">
                <div class="col-8">
                    <div class="d-grid gap-2">
                        <button class="btn btn-success" type="submit">Registrar</button>
                        <button class="btn btn-secondary" type="submit">Limpiar</button> <!--Ojo-->
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
import { Crime } from '@/interfaces/Crime'

export default defineComponent({
    data() {
        return {
            member: {name:{}} as Member,
            gangs: [] as Gang[],
        }
    },
    mounted(){
        this.loadGangs()
    },
    methods: {
        async saveMember(){
            try {
                const res = await createMember(this.member)
                console.log(res)
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
    }
})
</script>
