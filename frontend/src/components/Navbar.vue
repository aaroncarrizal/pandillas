<template>
    <nav class="navbar navbar-expand-lg bg-light mb-3">
        <div class="container-fluid">
            <a class="navbar-brand" href="/home">
                <img src="@/assets/favicon.png" width="30"/>
            </a>
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
                            <a class="nav-link dropdown-toggle" href="/gangs" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Pandillas
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/gangs">Ver todas</a></li>
                                <li><a class="dropdown-item" href="/gangs/new">Crear nueva</a></li>
                            </ul>
                        </template>
                        <template v-else>
                            <a class="nav-link" href="/gangs" role="button" aria-expanded="false">
                                Pandillas
                            </a>
                        </template>
                    </li>
                    <li class="nav-item dropdown">
                        <template v-if="(role == 2)">
                            <a class="nav-link dropdown-toggle" href="/members" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Miembros
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/members">Ver todos</a></li>
                                <li><a class="dropdown-item" href="/members/new">Crear nuevo</a></li>
                            </ul>
                        </template>
                        <template v-if="(role == 1)">
                            <a class="nav-link" href="/members" role="button" aria-expanded="false">
                                Miembros
                            </a>
                        </template>
                    </li>
                    <template v-if="(role == 2)">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/places" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Crimenes
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/crimes">Ver todos</a></li>
                                <li><a class="dropdown-item" href="/crimes/new">Crear nuevo</a></li>
                            </ul>
                        </li>
                    </template>
                    <template v-if="(role == 2)">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/users" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Usuarios
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/users">Ver todos</a></li>
                                <li><a class="dropdown-item" href="/users/new">Crear nuevo</a></li>
                            </ul>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props:{
        role: Number
    },
    name: "Nav-bar",
});
</script>
