import Vue from 'vue';
import Vuex from 'vuex';
import {db} from "../main";
import router from '../router/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: [],
  },
  getters: {
    mostrandoUsuarios(state){
      return state.usuarios;
    }
  },
  mutations: {
    mutandoUsusarios(state, arreglo){
      state.usuarios = arreglo;
    }
  },
  actions: {
    traigoPersonajes({commit}){
      db.collection('usuarios').onSnapshot(resp =>{
        let arreglo = [];
          resp.forEach(elemento => {
            arreglo.push({
              id: elemento.data().id,
              nombre: elemento.data().nombre,
              imagen: elemento.data().imagen,
            });
          });
        commit('mutandoUsusarios',arreglo);
      });
    },
    actualizandoPersonaje(context,datos){
      db.collection('usuarios').doc(datos.id).update({
        nombre: datos.nombre,
        imagen: datos.imagen
      })
      router.replace('/');
    },
    eliminarUsuario(context,id){
      console.log(id);
      db.collection('usuarios').doc(id).delete().then(resp =>{
        console.log(resp);
        console.log('Se elimino el usuario.');
        router.replace('/');
      }).catch(error => {
        console.log(error);
        console.log('Oops... error al eliminar.');
      })
    },
    addUsuario(context, data){
      db.collection('usuarios').add({
        nombre: data.nombre,
        imagen: data.imagen,
        id: data.id,
      }).then(resp =>{
        console.log(resp);
      })
    },
  }
})
