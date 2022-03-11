import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import router from './router'

Vue.use(Vuex);
 
export default new Vuex.Store({
    state:{
       user: null,
       isLoggedIn: false,
       comments: {},
       key: null,
       time: null,
       loginerrorcomment: false,
       registererrorcomment: false,
    },
    mutations: {
      onAuthStateChanged(state, isLoggedIn) {
         state.isLoggedIn = isLoggedIn; 
        },
      onUserStatusChanged(state, user) {
          state.user = user;
        },
      deleteonUserStatusChanged(state) {
          state.user = null;
          state.comments = {}
        },  
      addcreatecomment (state, obj) {
          state.comments = obj
        },
      updatacommentkey(state, key){
          state.key =  key
        },
      timeregiter(state, time){
          state.time = time
      },  
      loginerrorcommentmutations(state, status){
        if(status === 1){
          state.loginerrorcomment = true
        } else{
          state.loginerrorcomment = false
        }
      },
      registererrorcommentmutations(state, status){
        if(status === 1){
          state.registererrorcomment = true
        } else{
          state.registererrorcomment = false
        }
    }

    },
    actions: {
      login({commit},{email,password}){
      firebase.auth().signInWithEmailAndPassword(email,password) 
       .then(() => {
        router.push('commenthome') 
        commit("loginerrorcommentmutations", 0)
      })
      .catch(() => {
        commit("loginerrorcommentmutations", 1)
      })
     },    
      logout(){
        firebase.auth().signOut()
      },
      register({commit},{email,password}){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          router.push('commenthome')
          commit("registererrorcommentmutations", 0)
        })
        .catch(() => {
          commit("registererrorcommentmutations", 1)
        })
      },
      deleteLoginUser ({ commit }) {
        commit('deleteonUserStatusChanged')
      }, 

      onUserStatusChanged({commit},user){
        commit('onUserStatusChanged',user)
      },
      updatacommentkeyChanged({commit},key){
        commit('updatacommentkey',key)
      },
      addComment({getters},{name,comment}) {
        if (getters.uid) {
          firebase.firestore().collection(`comments/${getters.uid}/comment`)
          .add({
            name: name, 
            comment: comment, 
            time: getters.time,         
            })
         }      
       }, 
       createcomment({getters,commit}){
        firebase.firestore().collection(`comments/${getters.uid}/comment`).orderBy('time', 'asc').onSnapshot(querySnapshot => {
          const obj = {} 
          querySnapshot.forEach(doc => {
            obj[doc.id] = doc.data()
          })
          commit('addcreatecomment', obj)
         })
       
       },

       deletecomment({getters},{key}){
        if(getters.uid){
          firebase.firestore().collection(`comments/${getters.uid}/comment`).doc(key).delete()
         }
       },

       updatacomment({getters},{name, comment}){
        if(getters.uid){
          firebase.firestore().collection(`comments/${getters.uid}/comment`).doc(`${getters.key.key}`).update({name: name, comment: comment})
         }
       },


       timeregisteraction({commit}){
        const myTimestamp = firebase.firestore.Timestamp.now()
        const myToDated = myTimestamp.toDate()
        commit('timeregiter', myToDated)
      }, 
    },   

    getters: {
     uid: state => state.user ? state.user.uid: null,
     key: state => state.key,
     time: state => state.time,

    } 
})
