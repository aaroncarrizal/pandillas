<template>
    <div class="container">
        <p class="h1 text-center">Registro de pandillas</p>
        <form>
            <div class="row">
                <div class="col-sm-3">
                    <p class="h5 text-center my-4">DATOS PRINCIPALLES</p>
                    <div class="my-3">
                        <input class="form-control my-1" placeholder="Nombre de pandilla" v-model="gang.name">
                        <input class="form-control my-1" placeholder="Líder de la pandilla" v-model="gang.leader"> <!--Ojo-->
                        <input class="form-control my-1" placeholder="Número de integrantes" v-model="gang.name"> <!--Ojo-->
                        <input class="form-control my-1" placeholder="Edad Promedio" v-model="gang.name"> <!--Ojo-->
                        <input class="form-control my-1" placeholder="Horario de Reunión" v-model="gang.name"> <!--Ojo-->
                        <input class="form-control my-1" placeholder="URL de Red Social" v-model="gang.name"> <!--Ojo-->
                        <textarea class="form-control" placeholder="Descripción general"  v-model="gang.description" ></textarea>
                        <!--<input class="form-control" id="songTitle" v-model="gang.name">-->
                    </div>
                </div>
                <div class="col-sm-3">
                    <p class="h5 text-center my-4">UBICACIÓN</p>
                    <div class="my-3">
                        <input class="form-control my-1" placeholder="Calle" v-model="gang.name"> <!--Ojo-->
                        <input class="form-control my-1" placeholder="Número" v-model="gang.name"> <!--Ojo-->
                        <input class="form-control my-1" placeholder="Colonia" v-model="gang.name"> <!--Ojo-->
                        <input class="form-control my-1" placeholder="Código Postal" v-model="gang.name"> <!--Ojo-->
                        <input class="form-control my-1" placeholder="Entre calle y calle" v-model="gang.name"> <!--Ojo-->
                    </div>
                </div>
                <div class="col-sm-3">
                    <p class="h5 text-center my-4">DELITOS ASOCIADOS</p>
                    <div class="my-3">
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Robo a persona</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Robo a vehículo</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Robo a casa habitación</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Robo a comercio</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Robo a repartidores</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Narcomenudeo</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Extorsiones</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Daños</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Otros Delitos</div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <p class="h5 text-center my-4">FALTAS COMETIDAS</p>
                    <div class="my-3">
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Tomar en vía pública</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Riñas</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Violencia Familiar</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Consumo de drogas</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Daños</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Escandalizar</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Otras Faltas</div>
                        <p class="h5 text-center my-4">PELIGROSIDAD</p>
                        <div class="my-2"><input class="form-check-input" type="radio" name="peligro"> Alto</div>
                        <div class="my-2"><input class="form-check-input" type="radio" name="peligro"> Medio</div>
                        <div class="my-2"><input class="form-check-input" type="radio" name="peligro"> Bajo</div>
                    </div>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button" @click="saveGang()">REGISTRAR</button>
                    <button class="btn btn-secondary" type="button" @click="saveGang()">LIMPIAR</button> <!--Ojo-->
                </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { Gang } from '@/interfaces/Gang'
import { defineComponent } from 'vue'
import { createGang } from '@/services/GangService'

export default defineComponent({
    data() {
        return {
            gang: {} as Gang
        }
    },
    methods: {
        async saveGang() {
            try {
                const res = await createGang(this.gang)
                console.log(res)
            } catch (err) {
                console.log(err)
            }
        }
    }
})
</script>

<style>
</style>