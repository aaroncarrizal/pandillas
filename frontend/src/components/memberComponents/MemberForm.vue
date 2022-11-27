<template>
    <div class="container">
        <p class="h1 text-center">Registro de integrante</p>
        <form>
            <div class="row">
                <div class="col-md-8">
                    <p class="h5 text-center my-4">Datos principales</p>
                    <div class="my-3">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="name" placeholder="Nombre" required>
                            <label for="name">Nombre</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="name" placeholder="Nombre" required>
                            <label for="name">Apellido paterno</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="name" placeholder="Nombre" required>
                            <label for="name">Apellido materno</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="name" placeholder="Nombre">
                            <label for="name">Alias</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="name" placeholder="Nombre">
                            <label for="name">URL red social</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="date" class="form-control" id="startDate"  placeholder="Nombre"/>
                            <label for="startDate">Fecha de nacimiento</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <p class="h5 text-center my-2">Ubicación</p>
                    seleccionar de los que ya hay
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <p class="h5 text-center">Delitos asociados</p>
                    <!-- <div class="my-3">
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Robo a persona</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Robo a vehículo</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Robo a casa habitación</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Robo a comercio</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Robo a repartidores</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Narcomenudeo</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Extorsiones</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Daños</div>
                        <div class="my-2"><input class="form-check-input" type="checkbox"> Otros Delitos</div>
                    </div> -->
                    Lista de los que ya existen
                </div>
                <div class="col-md-6">
                    <p class="h5 text-center my-4">Peligrosidad</p>
                <label for="peligrosidad" class="form-label">0 a 5</label>
                <input type="range" class="form-range" min="0" max="5" id="peligrosidad">
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-8">
                    <div class="d-grid gap-2">
                        <button class="btn btn-success" type="submit">Registrar</button>
                        <button class="btn btn-secondary" type="submit">Limpiar</button> <!--Ojo-->
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script></script>
<style></style>