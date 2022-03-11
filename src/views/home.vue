<template>
  <v-row 
     
     justify="center" 
     align-content="center" 
     class="bg">
     <v-card
       class="d-flex align-center flex-column" 
       flat 
       tile 
       height="200" 
       color="transparent">
      <v-col>      
       <v-card
        outlined 
        :max-width="$vuetify.breakpoint.xs ? 250 : 500"
        color="transparent" 
        width="500px" 
        class="homecomment" > 
         <p> 
           ペンシルベニア大学のマーティン・セリグマン教授が創立されたポジティブ心理学によると
           ポジティブな感情を書き記すことは、幸福度が増しうつ状態にもなりにくくなる効果があるそうです、     
           あなたに起きた幸福な出来事を、少しだけ書いてみませんか？
         </p>
       </v-card>
      </v-col>  
       <v-card color="transparent">
          <v-btn to="/commenthome" color="primary">書いてみる</v-btn>
       </v-card>
     </v-card> 
   </v-row> 
</template>

<style scoped>
    p, .bg{
      color: white;
    }
    .bg{
      background-image: url("~@/assets/hoto-1533460004989-cef01064af7e.jpeg");
      background-size: cover;
    }
</style>