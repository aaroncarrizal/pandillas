<template>
    <div class="container">
        <div class="row">
            <h1>Lugares registrados</h1>
        </div>
        <div class="row">
            <template v-for="(place, index) in places" :key="index">
                <div class="col-4-sm-12 my-4">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">{{ place.description }}</h3>
                            <div class="row">
                                <div class="col-6">
                                    <h5>Datos generales</h5>
                                    <ul class="list-group list-group-flush">
                                            <li class="list-group-item">
                                                <h6>Municipalidad:
                                                    <small class="text-muted">{{ place.municipality }}</small>
                                                </h6>
                                            </li>
                                            <li class="list-group-item">
                                                <h6>Delegación:
                                                    <small class="text-muted">{{ place.delegacy }}</small>
                                                </h6>
                                            </li>
                                            <li class="list-group-item">
                                                <h6>Localidad:
                                                    <small class="text-muted">{{ place.locality }}</small>
                                                </h6>
                                            </li>
                                    </ul>
                                </div>
                                <div class="col-6">
                                    <h5>Ubicación</h5>
                                    <ul class="list-group list-group-flush">
                                            <li class="list-group-item">
                                                <h6>Colonia:
                                                    <small class="text-muted">{{ place.suburb }}</small>
                                                </h6>
                                            </li>
                                            <li class="list-group-item">
                                                <h6>Calle:
                                                    <small class="text-muted">{{ place.street + ' #' + place.number }}</small>
                                                </h6>
                                            </li>
                                            <li class="list-group-item">
                                                <h6>Código postal:
                                                    <small class="text-muted">{{ place.postalCode }}</small>
                                                </h6>
                                            </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6">
                                    <div class="d-grid gap-2">
                                        <a :href="'/places/edit/' + place._id" class="btn btn-primary">Editar</a>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="d-grid gap-2">
                                        <a @click="removePlace(place._id)" class="btn btn-danger" role="button">Borrar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Place } from '@/interfaces/Place'
import { getPlaces } from '@/services/PlaceService'
import { deletePlace } from '@/services/PlaceService'

export default defineComponent({
    data(){
        return {
            places: [] as Place[]
        }
    },
    mounted(){
        this.loadPlaces()
    },
    methods:{
        async loadPlaces(){
            try {
                const res = await getPlaces()
                this.places = res.data
            } catch (err) {
                console.log(err)
            }
        },
        async removePlace(id: string){
            try {
                await deletePlace(id)
                window.location.href = '/places'
            } catch (error) {
                console.log(error)
            }
        },
    },
})
</script>