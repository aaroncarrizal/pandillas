<template>
    <div class="container">
        <p class="h1 text-center">Registro de integrante</p>
        <form>
            <div class="row">
                <div class="col-sm-8">
                    <p class="h5 text-center my-2">Datos principales</p>
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="row my-3">
                                <div class="col">
                                    <input class="form-control my-1" placeholder="Nombre">
                                    <input class="form-control my-1" placeholder="Apellido Paterno" >
                                    <input class="form-control my-1" placeholder="URL Red Social">
                                </div>
                                <div class="col">
                                    <input class="form-control my-1" placeholder="Alias">
                                    <input class="form-control my-1" placeholder="Apellido Materno">
                                    <input class="form-control my-1" placeholder="Fecha de nacimiento">
                                </div>
                            </div>
                            <div class="row">
                                <textarea class="form-control" placeholder="Información adicional"></textarea>
                            </div>
                        </div>
                        <div class="col my-3">
                            <input class="form-control my-1" placeholder="Pandilla">
                            <input class="form-control my-1" placeholder="Fotografía">
                            <div class="my-1">aqui va la imagen</div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <p class="h5 text-center my-2">Ubicación</p>
                    <div class="row my-4">
                        <div class="col">
                            <input class="form-control my-1" placeholder="Calle">
                            <input class="form-control my-1" placeholder="Número">
                            <input class="form-control my-1" placeholder="Colonia">
                            <input class="form-control my-1" placeholder="Codigo Postal">
                            <input class="form-control my-1" placeholder="Entre calle y calle">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row my-5">
                <div class="col">
                    <p class="h5 text-center mt-2 mb-4">Delitos asociados</p>
                    <div class="my-2"><input class="form-check-input" type="checkbox"> Robo a vehiculo</div>   
                    <div class="my-2"><input class="form-check-input" type="checkbox"> Robo a persona</div>
                    <div class="my-2"><input class="form-check-input" type="checkbox"> Robo a casa habitación</div>
                    <div class="my-2"><input class="form-check-input" type="checkbox"> Robo a comercio</div>
                    <div class="my-2"><input class="form-check-input" type="checkbox"> Robo a repartidos</div>
                    <div class="my-2"><input class="form-check-input" type="checkbox"> Narcomenudeo</div>
                    <div class="my-2"><input class="form-check-input" type="checkbox"> Homicidio</div>
                    <div class="my-2"><input class="form-check-input" type="checkbox"> Extorsiones</div>
                    <div class="my-2"><input class="form-check-input" type="checkbox"> Daños</div>
                </div>
                <div class="col">
                    <p class="h5 text-center mt-2 mb-4">Faltas cometidas</p>
                    <div class="my-2"><input class="form-check-input" type="checkbox"> Tomar en vía publica</div>   
                    <div class="my-2"><input class="form-check-input" type="checkbox"> Riñas</div>
                    <div class="my-2"><input class="form-check-input" type="checkbox"> Violencia familiar</div>
                    <div class="my-2"><input class="form-check-input" type="checkbox"> Consumo de drogas</div>
                    <div class="my-2"><input class="form-check-input" type="checkbox"> Daños</div>
                    <div class="my-2"><input class="form-check-input" type="checkbox"> Escandalizar</div>
                </div>
                <div class="col">
                    <p class="h5 text-center mt-2 mb-4">Peligrosidad</p>
                    <div class="my-2"><input class="form-check-input" type="radio" name="peligrosidad"> Alto</div>   
                    <div class="my-2"><input class="form-check-input" type="radio" name="peligrosidad"> Medio</div>
                    <div class="my-2"><input class="form-check-input" type="radio" name="peligrosidad"> Bajo</div>
                </div>
            </div>
            <div class="row justify-content-center my-3">
                <div class="col-2">
                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-primary">Registrar</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script></script>
<style></style>