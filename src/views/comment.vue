<template>
 <div>
 <v-row  class="mt-9 mx-8">
  <v-card  width ="400px" class="mx-auto mt-16" >
    <v-card-text class="my-n3">
      <v-form>
        <v-text-field  label="title" v-model="name"/>
        <v-text-field  label="comment" v-model="comment"/>
         <v-card-actions class="d-flex justify-center mt-n2">
          <v-btn v-if="updatachange" small @click="updatacommentaction" class="info mr-6">書き換える</v-btn> 
          <v-btn v-if="updatachange" small @click="updatastatuscange()" class="info">キャンセル</v-btn> 
          <v-btn v-else class="info" small @click="addcommentaction">書き込む</v-btn>         
       </v-card-actions>
      </v-form>
    </v-card-text>
    </v-card>
  </v-row> 
  <v-row v-if="this.$store.state.user"></v-row>
  <v-row v-else class="mt-9 mx-4">
    <v-card 
     width="800px"
     height="220px" 
     class="mx-auto my-7"
     :min-width="$vuetify.breakpoint.xl ? 1000 : 0"
    > 
     <v-form>
      <v-card-title>
        <h6 style="opacity: 0.5;">このwebサイトについて</h6>
      </v-card-title>
      <v-card-text class="d-flex justify-center mt-5">
        <p>
          ご観覧のほどありがとうございます、よければ一言だけでも書いてくだされば幸いです。<br>
          ご利用には<span style="color: red;">※お手数ですがログインが必要になっております</span>ので、よろしくお願いいたします。
       </p>
      </v-card-text>
     </v-form>
    </v-card> 
  </v-row>
  <v-row  class="d-flex flex-column mt-9 mx-4">
    <v-card  width="800px" class="mx-auto my-7" v-for="(comment, key) in comments" :key="key" > 
     <v-form >
      <v-card-title>
        <h6 class="mr-9" style="opacity: 0.5;">{{comment.name}}</h6>
        <h6 style="opacity: 0.5;">{{time(comment.time)}}</h6>    
      </v-card-title>
      <v-card-text class="d-flex justify-center my-n5">
        <p class="mt-3">{{comment.comment}}</p>
      </v-card-text>
      <v-card-actions class="d-flex justify-end">
          <v-btn class="info" small @click="removeTodoaction(key)">消去</v-btn>
          <v-btn class="info" small @click="updatacommentkeyaction(key, comment); updatachange = true;">更新</v-btn>
      </v-card-actions>
     </v-form>
    </v-card> 
  </v-row>
  </div>  
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data(){
     return{
      name: '',
      comment: '',
      updatachange: false,
     };
  },

   computed: {
     comments(){
       return this.$store.state.comments
     }
  },
 
  
   methods: {
      addcommentaction(){
        this.timeregisteraction()
        if(this.name === ''){
          return
          } 
        else if(this.$store.state.user === null){
          return
        } else{
          this.addComment({name: this.name, comment: this.comment});
          this.name = '';
          this.comment = '';
        }
      },
      removeTodoaction(key){
        this.deletecomment({key})
      },
      updatacommentkeyaction(key, comment){
        this.updatacommentkeyChanged({key})
        window.scroll({top: 0, behavior: 'smooth'});
        this.comment = comment.comment;
        this.name = comment.name;
      },    
      updatacommentaction(){
        this.updatacomment({name: this.name, comment: this.comment});
        this.name = '';
        this.comment = '';
        this.updatachange = false;
      },
      updatastatuscange(){
        this.updatachange = false;
        this.name="";
        this.comment="";
      },
      time(commenttime){
        var time = commenttime 
        var timeout = time.toDate();

        var year_str = timeout.getFullYear();
        var month_str = 1 + timeout.getMonth();
        var day_str = timeout.getDate();
        var hour_str = timeout.getHours();
        var minute_str = timeout.getMinutes();

       var format_str = 'YYYY年MM月DD日  hh:mm';
       format_str = format_str.replace(/YYYY/g, year_str);
       format_str = format_str.replace(/MM/g, month_str);
       format_str = format_str.replace(/DD/g, day_str);
       format_str = format_str.replace(/hh/g, hour_str);
       format_str = format_str.replace(/mm/g, minute_str);

       return format_str;
      },
      ...mapActions(['addComment','deletecomment','updatacommentkeyChanged','updatacomment','timeregisteraction'])
   },
};
</script>

