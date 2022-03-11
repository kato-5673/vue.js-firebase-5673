<template>
 <v-row 
     class="mx-4" 
     justify="center"
     align-content="center" >
  <v-card  
    width ="400px" 
    class="mx-auto mt-16">
     <v-card-title>ログイン</v-card-title>
     <v-card-text>
      <v-form>
        <v-text-field 
          prepend-icon="mdi-account-circle" 
          label="email" 
          v-model="email"/>
        <v-text-field
          v-bind:type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword" 
          prepend-icon='mdi-eye'
          v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
          label="passord"
          v-model="password"/>
        <v-card-actions>
        <v-btn 
          small 
          class="info" 
          @click="loginaction">
          ログイン
        </v-btn>
       </v-card-actions>
        <p 
         v-if="$store.state.loginerrorcomment" 
         class="mt-3 ml-4" 
         style = "color: red;">
         ※メールアドレス、またはパスワードが間違っています。
        </p>
      </v-form>
    </v-card-text>
    </v-card>
  </v-row> 
</template>
<script>
import {mapActions} from 'vuex'

export default {
  
  data() {
    return{
       email: '',
       password: '',
       showPassword: false,
    };
  },
   methods:{ 
      loginaction(){
       this.login({email: this.email, password: this.password });
       this.email = '';
       this.password = '';
     },

     ...mapActions(['login']) 
   }   


} 
</script>
