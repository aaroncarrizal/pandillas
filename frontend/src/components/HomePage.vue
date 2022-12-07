<template>
    <b-container>
        <div class="row">
            <h1>Pandillas registradas</h1>
        </div>
        <div class="row">
            <form @submit.prevent="search()">
            <div class="row mb-3">
                <div class="col-md-6">
                    <label for="dangerousness" class="form-label">Peligrosidad</label>
                    <select id="dangerousness" class="form-select" aria-label="Default select example" multiple required v-model="dangerousness">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div class="col-md-6">
                    <label for="locality" class="form-label">Localidad</label>
                    <select id="locality" class="form-select" aria-label="Default select example" multiple required v-model="localities">
                        <option value="Norte">Norte</option>
                        <option value="Sur">Sur</option>
                        <option value="Centro">Centro</option>
                        <option value="Este">Este</option>
                        <option value="Oeste">Oeste</option>
                    </select>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-12">
                    <div class="d-grid gap-2">
                        <button class="btn btn-success" type="submit">Filtrar</button>
                    </div>
                </div>
            </div>
        </form>
        </div>
        <div class="row">
            <b-table :items="gangs" :fields="fields" stacked="md" show-empty striped>
                <template #cell(leader)="row">
                    <template v-if="row.item.leader">
                        {{getFullName(row.item.leader)}}
                    </template>
                    <template v-else>
                        Sin líder registrado
                    </template>
                </template>
                <template #cell(numMembers)="row">
                    <template v-if="row.item.numMembers">
                        {{row.item.numMembers}}
                    </template>
                    <template v-else>
                        0
                    </template>
                </template>
                <template #cell(reunionPlace)="row">
                    <template v-if="row.item.reunionPlace">
                        {{row.item.reunionPlace.locality}}
                    </template>
                    <template v-else>
                        Sin zona registrada
                    </template>
                </template>
            </b-table>
        </div>
        <div class="row">
            <div class="col-12">
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" @click="generateReport()">Generar reporte</button>
                    </div>
            </div>
        </div>
    </b-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { getGangs } from '@/services/GangService'
import { Gang } from '@/interfaces/Gang'
import { Member } from '@/interfaces/Member'
import { generatePDF } from '@/services/MailService'

export default defineComponent({
    data(){
        return {
            gangs: [] as Gang[],
            fields: [
                { key: 'name', label: 'Nombre', sortable: true, },
                { key: 'dangerousness', label: 'Peligrosidad', sortable: true},
                { key: 'leader', label: 'Líder', sortable: true},
                { key: 'numMembers', label: 'Número de miembros', sortable: true},
                { key: 'reunionPlace', label: 'Zona de reunión', sortable: true},
            ],
            dangerousness: [] as number[],
            localities: [] as string[],
            newGangsIds: [] as string[]
        }
    },
    beforeMount(){
        this.loadGangs()
    },
    methods:{
        async loadGangs(){
            try {
                const res = await getGangs()
                this.gangs = res.data
            } catch (err) {
                console.log(err)
            }
        },
        search(){
            for (const gang of this.gangs) {
                // Filter by dangerousness
                for(let i = 0; i < this.dangerousness.length; i++){
                    if(gang.dangerousness == this.dangerousness[i]){
                        this.newGangsIds.push(gang._id)
                    }
                }
                // Filter by locality
                for(let i = 0; i < this.localities.length; i++){
                    if(gang.reunionPlace.locality == this.localities[i]){
                        this.newGangsIds.push(gang._id)
                    }
                }
            }
            this.newGangsIds = [...new Set(this.newGangsIds)];
            console.log(this.newGangsIds)
        },
        getFullName(member: Member){
            return member.name.firstName + ' ' + member.name.middleName + ' ' + member.name.lastName
        },
        async generateReport(){
            try {
                const res = await generatePDF(this.newGangsIds)
            } catch (error) {
                console.log(error)
            }
        }
    },
})
</script>