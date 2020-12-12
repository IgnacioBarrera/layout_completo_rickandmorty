<template>
  <div>
    <b-form class="container mt-4" @submit.prevent="agregar">
      <b-form-group id="input-group-1" label="Ingrese nombre del personaje" label-for="input-1">
        <b-form-input id="input-1" v-model="personaje.nombre" type="text" required placeholder="Nombre"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Ingrese imagen del personaje" label-for="input-2">
        <b-form-input id="input-2" v-model="personaje.imagen" type="text" required placeholder="Imagen"></b-form-input>
      </b-form-group>
      
      <b-form-group id="input-group-3" label="Ingrese id del personaje" label-for="input-3">
        <b-form-input id="input-3" v-model="personaje.id" type="text" required placeholder="Id"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" class="mr-2">Actualizar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
    name: 'Addusuario',
    data() {
        return {
            personaje: {
                nombre: '',
                imagen: '',
                id: '',
            }
        }
    },
    methods: {
        agregar(){
        if (this.personaje) {
          this.$store.dispatch('addUsuario', this.personaje );
          this.$router.push('/');
        } else {
          console.log('ajams')
        }
        }
    }
}
</script>

<style>
    
</style>