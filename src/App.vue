<template>
 <v-app style="background-color: rgb(241, 241, 241);">
    <v-app-bar dark app>
      <v-toolbar-title class="vtoolbartitle">
        <router-link 
          style="text-decoration: none; color:white;"
          to="/" 
          ctive-class="link-active" 
          exact>diary
       </router-link>        
      </v-toolbar-title>
       <v-spacer ></v-spacer>
       <v-toolbar-items class="toolbaritems">
        <v-btn  
         v-if="this.$store.state.user" 
         @click="Logoutaction"
         >
           ログアウト
          </v-btn>
        <v-btn 
         v-else 
         to="/login" 
         text
         >
          ログイン
         </v-btn>
        <div v-if="this.$store.state.user"></div>
        <v-btn 
         v-else 
         to="/register" 
         text>
          新規登録
        </v-btn>
      </v-toolbar-items>    
    </v-app-bar>
 <router-view></router-view>
 </v-app>  
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import {mapActions} from 'vuex'

export default{
 name: 'App',
 data(){
   return{
     
   }
 },
created(){
     firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.onUserStatusChanged(user)
        this.createcomment()
      } else {
        this.deleteLoginUser()
      }
    })
  },
 methods:{
      Logoutaction() {
       this.logout()
    },
      ...mapActions(['onUserStatusChanged','createcomment','deleteLoginUser','windowboolen','logout'])
  }, 
} 
</script>

<style>


@media screen and (max-width:480px) { 
  .v-card__text{
    margin: 0px;
  }
  p{
   font-size: 14px;
  }
}
@media screen and (min-width: 480px){
  p{
   font-size: 16px;
 }
 .toolbaritems{
  margin-right: 20px;
}
 .vtoolbartitle{
  margin-left: 20px;
}
}
@media screen and (min-width: 1500px){
  p{
   font-size: 23px;
 }
 .toolbaritems{
  margin-right: 20%;
}
.vtoolbartitle{
  margin-left: 20%;
}
}
</style>