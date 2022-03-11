<template>
 <v-row 
  class="mx-4" 
  justify="center" 
  align-content="center">
   <v-card 
     width ="400px" 
     class="mx-auto mt-16" >
    <v-card-title>新規登録</v-card-title>
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
         @click="registeraction" 
         small 
         class="info">
          登録
        </v-btn>
       </v-card-actions>
       <p 
        v-if="$store.state.registererrorcomment" 
        class="mt-3 ml-4" 
        style = "color: red;">
        ※メールアドレスの間違い、もしくはパスワードが6文字以下です。
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
    registeraction(){
       this.register({email: this.email, password: this.password,});
       this.email = '';
       this.password = '';
       },      
       ...mapActions(['register'])
    }
   
    
  };
</script>
