<template>
  <div>
    <b-form class="container mt-4" @submit.prevent="actualizando">
      <b-form-group id="input-group-1" label="Ingrese su nombre" label-for="input-1">
        <b-form-input id="input-1" v-model="personaje.nombre" type="text" required placeholder="Nombre"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Ingrese su imagen" label-for="input-2">
        <b-form-input id="input-2" v-model="personaje.imagen" type="text" required placeholder="Imagen"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" class="mr-2">Actualizar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
    name: 'Editar',
    data() {
      return {
        personaje: {
          nombre: '',
          imagen: '',
          id: ''
        },
      }
    },
    created() {
        let info = {};
        info = this.$store.getters.mostrandoUsuarios.find(resp => resp.id === this.$route.params.id)
        if (info) {
          this.personaje.nombre = info.nombre;
          this.personaje.imagen = info.imagen;
          this.personaje.id = info.id;
        } else {
          console.log('No se cargo personaje')
        }
    },
    methods: {
      actualizando(){
        this.$store.dispatch('actualizandoPersonaje', this.personaje)
      }
    }
}
</script>

<style>

</style>