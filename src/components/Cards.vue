<template>
  <div class="container">
      <h1 class="text-center m-3">Rick & Morty</h1>
    <div class="row">
      <div class="col-md-4 col-sm-12 carta-center" v-for="(item, index) in datoUsuarios" :key="index">
        <b-card :title="datoUsuarios[index].nombre" :img-src="datoUsuarios[index].imagen" img-alt="Image" img-top tag="article" style="max-width: 20rem;">
        </b-card>
        <b-button @click="editarUsuario(datoUsuarios[index].id)" type="reset" variant="success" class="m-2">Editar</b-button>
        <b-button @click="eliminarUsuario(datoUsuarios[index].id)" type="reset" variant="danger" class="m-2">Eliminar</b-button>
       <b-button @click="agregarUsuario(datoUsuarios[index].id)" type="reset" variant="primary" class="m-2">Agregar</b-button>

      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'Cards',
  data() {
    return {

    }
  },
  mounted() {
    this.$store.dispatch("traigoPersonajes");
  },
  computed: {
    datoUsuarios() {
      return this.$store.getters.mostrandoUsuarios;
    },
  },
  methods: {
    editarUsuario(id){
      this.$router.push({name: 'Editar', params: {id: id}});
    },
    agregarUsuario(){
      this.$router.push('/Agregandousuario');
    },
    eliminarUsuario(id){
      this.$confirm('¿Estás seguro que deseas eliminar al usuario seleccionado?', 'Cuidado', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: 'Usuario Eliminado.'
          });
          this.$store.dispatch('eliminarUsuario',id);
        }).catch(() => {
          console.log('Se produjo un error al eliminar al usuario.')
        });
    }
  },
}
</script>

<style scoped>
  .carta-center{
    text-align: -webkit-center;
  }
</style>
