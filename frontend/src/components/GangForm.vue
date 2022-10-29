<template>
    <div class="container">
        <form>
            <div class="my-3">
                <label for="songTitle" class="form-label">Name</label>
                <input class="form-control" id="songTitle" v-model="gang.name">
            </div>
            <div class="my-3">
                <label for="songLyrics">Description</label>
                <textarea class="form-control" placeholder="Write your lyrics" id="songLyrics" v-model="gang.description" ></textarea>
            </div>
            <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button" @click="saveGang()">Submit</button>
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