<template>
<div class="container" >
    <b-form class="container" @submit.prevent="registrar">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Ingrese contraseña:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.clave"
          type="password"
          required
          placeholder="Contraseña"
        ></b-form-input>
      </b-form-group>
    <b-button type="submit" variant="primary" class="mr-2">Registrarse</b-button>
    </b-form>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Registro',
    data() {
        return {
            form: {
                email: '',
                clave: ''
            },
        }
    },
    methods: {
        registrar(){
            if (this.form.email) {
                firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.clave)
                .then(resp => { 
                    (console.log(resp)).then(() => {
                        this.$router.push('/login');
                    })
                })
                .catch(error => {
                    if (error.code == "auth/email-already-in-use") {
                    this.errores(error);
                    } else if(error.code == "auth/invalid-email") {
                    this.errores(error);
                    } else if(error.code == "auth/weak-password"){
                    this.errores(error);
                    } else {
                    this.errores(error);
                    }
                })
            } else {
                console.error("no se puede registrar");
            }
        }    
    }
}
</script>

<style>

</style>