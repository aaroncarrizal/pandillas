<template>
    <div class="container">
        {{member}}
        <div class="row">
            <div class="col-4-sm-12 my-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-8">
                                    <h1 class="card-title">{{ getFullName(member) }}</h1>
                                </div>
                                <div class="col-sm-2">
                                    <div class="d-grid gap-2">
                                        <a :href="`/members/edit/${memberId}`" class="btn btn-primary" role="button">Editar</a>
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                    <div class="d-grid gap-2">
                                        <a @click="removeMember(memberId)" class="btn btn-danger" role="button">Borrar</a>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <h3>Alias: {{ member.alias }}</h3>
                                </div>
                                <div class="col-sm-6">
                                    <h3>Usuario de redes sociales: {{ member.username }}</h3>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <h4>Crimenes</h4>
                                    <ul class="list-group list-group-flush">
                                        <template v-for="(crime,i) in member.crimes" :key="i">
                                            <li class="list-group-item">
                                                {{ crime }}
                                            </li>
                                        </template>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { getMember } from '@/services/MemberService'
import { Member } from '@/interfaces/Member'
import { deleteMember } from '@/services/MemberService'
import { Place } from '@/interfaces/Place'
import { Crime } from '@/interfaces/Crime'

export default defineComponent({
    data() {
        return {
            member: {} as Member,
            memberId: ''
        }
    },
    created(){
        this.memberId = this.$route.params.id.toString()
        this.loadMember(this.memberId)
    },
    methods: {
        async loadMember(id: string){
            try {
                const res = await getMember(id)
                this.member = res.data
            } catch (err) {
                console.log(err)
            }
        },
        async removeMember(id: string){
            try {
                await deleteMember(id)
                window.location.href = '/members'
            } catch (error) {
                console.log(error)
            }
        },
        getFullName(member: Member){
            return member.name.firstName + ' ' + member.name.middleName + ' ' + member.name.lastName
        }
    }
})
</script>