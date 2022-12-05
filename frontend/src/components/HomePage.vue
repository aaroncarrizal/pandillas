<template>
    <b-container>
        <h1>Pandillas registradas</h1>
        <b-table :items="gangs" :fields="fields" :filter="filter" stacked="md" show-empty striped>
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
    </b-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { getGangs } from '@/services/GangService'
import { Gang } from '@/interfaces/Gang'
import { Member } from '@/interfaces/Member'

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
            filter: undefined,
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
        getFullName(member: Member){
            return member.name.firstName + ' ' + member.name.middleName + ' ' + member.name.lastName
        },
    },
})
</script>