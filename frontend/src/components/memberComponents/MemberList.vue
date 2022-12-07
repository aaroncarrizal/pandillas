<template>
    <div class="container">
        <div class="row">
            <h1>Miembros registrados</h1>
        </div>
        <div class="row">
            <template v-for="(member, index) in members" :key="index">
                <div class="col-4-sm-12 my-4">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">{{ member.name.firstName + ' ' + member.name.lastName}} </h3>
                            <h4>{{ member.alias }}</h4>
                            <router-link :to="'/members/' + member._id" class="btn btn-primary">Ver detalles</router-link>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getMembers } from '@/services/MemberService'
import { Member } from '@/interfaces/Member'

export default defineComponent({
    data(){
        return {
            members: [] as Member[]
        }
    },
    mounted(){
        this.loadMembers()
    },
    methods:{
        async loadMembers(){
            try {
                const res = await getMembers()
                this.members = res.data
            } catch (err) {
                console.log(err)
            }
        },
    },
})
</script>