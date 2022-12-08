<template>
    <div class="container">
        <p class="h1 text-center">Registrar delito</p>
        <form @submit.prevent="saveCrime()">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="my-3">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="name" v-model="crime.name" placeholder="Nombre" required/>
                            <label for="name">Nombre</label>
                        </div>
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
import { defineComponent } from "vue";
import { Crime } from "@/interfaces/Crime";
import { createCrime } from "@/services/CrimeService";
import router from "@/router";

export default defineComponent({
    data() {
        return {
            crime: {} as Crime,
        };
    },
    methods: {
        async saveCrime() {
            try {
                const res = await createCrime(this.crime);
                console.log(res);
                router.push(`/crimes`)
            } catch (err) {
                console.log(err);
            }
        },
    },
});
</script>
