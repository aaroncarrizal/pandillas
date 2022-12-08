<template>
    <b-container>
        <b-row>
            <b-col>
                <h1>Solicitar ayuda</h1>
            </b-col>
        </b-row>
        <form @submit.prevent="sendMail()">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="my-3">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="email" placeholder="Correo electrónico" required v-model="mailData.email">
                            <label for="email">Correo electrónico</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="name" placeholder="Nombre" required v-model="mailData.name">
                            <label for="name">Nombre</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="subject" placeholder="Asunto" required v-model="mailData.subject">
                            <label for="subject">Asunto</label>
                        </div>
                        <div class="form-floating mb-3">
                            <textarea class="form-control" placeholder="Mensaje" id="message" v-model="mailData.message" required></textarea>
                            <label for="message">Mensaje</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-8">
                    <div class="d-grid gap-2">
                        <button class="btn btn-success" type="submit">Enviar</button>
                    </div>
                </div>
            </div>
        </form>
    </b-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Mail } from '@/interfaces/Mail'
import { sendEmail } from '@/services/MailService'
import router from '@/router'

export default defineComponent({
    data() {
        return {
            mailData: {} as Mail
        }
    },
    methods: {
        async sendMail(){
            console.log('send')
            await sendEmail(this.mailData)
            router.push('/home')
        }
    }
})
</script>