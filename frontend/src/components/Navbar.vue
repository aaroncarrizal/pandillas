<template>
    <nav class="navbar navbar-expand-lg bg-light mb-3">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/home">
                <img src="@/assets/favicon.png" width="30"/>
            </router-link>
            <button 
                class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <template v-if="(role == 2)">
                            <router-link class="nav-link dropdown-toggle" to="/gangs" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pandillas
                            </router-link>
                            <ul class="dropdown-menu">
                                <li><router-link class="dropdown-item" to="/gangs">Ver todas</router-link></li>
                                <li><router-link class="dropdown-item" to="/gangs/new">Crear nueva</router-link></li>
                            </ul>
                        </template>
                        <template v-else>
                            <router-link class="nav-link" to="/gangs" role="button" aria-expanded="false">
                                Pandillas
                            </router-link>
                        </template>
                    </li>
                    <li class="nav-item dropdown">
                        <template v-if="(role == 2)">
                            <router-link class="nav-link dropdown-toggle" to="/members" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Miembros
                            </router-link>
                            <ul class="dropdown-menu">
                                <li><router-link class="dropdown-item" to="/members">Ver todos</router-link></li>
                                <li><router-link class="dropdown-item" to="/members/new">Crear nuevo</router-link></li>
                            </ul>
                        </template>
                        <template v-if="(role == 1)">
                            <router-link class="nav-link" to="/members" role="button" aria-expanded="false">
                                Miembros
                            </router-link>
                        </template>
                    </li>
                    <template v-if="(role == 2)">
                        <li class="nav-item dropdown">
                            <router-link class="nav-link dropdown-toggle" to="/places" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Crimenes
                            </router-link>
                            <ul class="dropdown-menu">
                                <li><router-link class="dropdown-item" to="/crimes">Ver todos</router-link></li>
                                <li><router-link class="dropdown-item" to="/crimes/new">Crear nuevo</router-link></li>
                            </ul>
                        </li>
                    </template>
                    <template v-if="(role == 2)">
                        <li class="nav-item dropdown">
                            <router-link class="nav-link dropdown-toggle" to="/users" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Usuarios
                            </router-link>
                            <ul class="dropdown-menu">
                                <li><router-link class="dropdown-item" to="/users">Ver todos</router-link></li>
                                <li><router-link class="dropdown-item" to="/users/new">Crear nuevo</router-link></li>
                            </ul>
                        </li>
                    </template>
                    <template v-if="(role == 0)">
                        <li class="nav-item dropdown">
                            <router-link class="nav-link dropdown-toggle" to="/help" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ayuda
                            </router-link>
                            <ul class="dropdown-menu">
                                <li><router-link class="dropdown-item" to="/help">Solicitar ayuda</router-link></li>
                                <li><router-link class="dropdown-item" to="/faq">Preguntas frecuentes</router-link></li>
                            </ul>
                        </li>
                    </template>
                    <template v-if="(role != 0)">
                        <router-link class="nav-link" to="#" @click="logOut()" role="button" aria-expanded="false">
                            Cerrar sesión
                        </router-link>
                    </template>
                    <template v-else>
                        <router-link class="nav-link" to="/" role="button" aria-expanded="false">
                            Iniciar sesión
                        </router-link>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import router from '@/router'

export default defineComponent({
    props:{
        role: Number
    },
    name: "Nav-bar",
    methods:{
        logOut(){
            this.$emit('loggedIn', '', 0)
            router.push({ path: '/' })
        }
    }
});
</script>
