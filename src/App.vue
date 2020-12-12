<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item v-if="this.uid"><router-link to="/" class="color-text">Home</router-link></b-nav-item>
        <b-nav-item v-else><router-link :to="{name: 'Login'}" class="color-text">Login</router-link></b-nav-item>
        <b-nav-item v-if="this.uid"><router-link to="/about" class="color-text">About</router-link></b-nav-item>
        <b-button v-if="this.uid" variant="danger" @click="salir">Salir</b-button>
      </b-navbar-nav>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>

import firebase from "firebase";

export default {
  name: 'App',
  data() {
    return {
      uid: '',
    }
  },
  methods: {
    salir(){
      firebase.auth().signOut().then(() => {
        console.log('signOut ocurrio correctamente');
        this.$router.push("/login");
        }).catch((error) => {
        console.log(error);
      });
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.uid = user.uid;
        console.log('Hay usuario activo.');
        this.$router.push('/')
      } else {
        console.log('No hay usuarios registrados')
      }
    });
  },
}
</script>

<style scoped>
  .color-text{
    color: white;
  }
</style>
