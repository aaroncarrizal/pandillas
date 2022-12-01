<template>
    <div class="container">
        <p class="h1 text-center">Registro de lugares</p>
        <form @submit.prevent="savePlace()">
            <div class="row">
                <div class="col-md-6">
                    <p class="h5 text-center my-4">Datos principales</p>
                    <div class="my-3">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="municipality" v-model="place.municipality" placeholder="Nombre" required>
                            <label for="municipality">Municipalidad</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="delegacy" v-model="place.delegacy" placeholder="Nombre" required>
                            <label for="delegacy">Delegación</label>
                        </div>
                        <label for="leader" class="form-label">Localidad</label>
                        <select id="leader" class="form-select" aria-label="Default select example" v-model="place.locality">
                            <option value="Norte">Norte</option>
                            <option value="Sur">Sur</option>
                            <option value="Centro">Centro</option>
                            <option value="Este">Este</option>
                            <option value="Oeste">Oeste</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <p class="h5 text-center my-4">Ubicación</p>
                    <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="suburb" v-model="place.suburb" placeholder="Nombre" required>
                            <label for="suburb">Colonia</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="street" v-model="place.street" placeholder="Nombre" required>
                            <label for="street">Calle</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="number" class="form-control" id="number" v-model="place.number" placeholder="Nombre" required>
                            <label for="number">Número</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="number" class="form-control" id="postalCode" v-model="place.postalCode" placeholder="Nombre" required>
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
import { Place } from '@/interfaces/Place'
import { createPlace } from '@/services/PlaceService'

export default defineComponent({
    data() {
        return {
            place: {} as Place,
        }
    },
    methods: {
        async savePlace(){
            try {
                const res = await createPlace(this.place)
                console.log(res)
                window.location.href = `/places`
            } catch (err) {
                console.log(err)
            }
        },
    }
})
</script>