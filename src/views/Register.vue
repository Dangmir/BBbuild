<script setup xmlns="http://www.w3.org/1999/html">

import MyButton from "@/components/MyButton.vue";
</script>

<template>
<div class="container mx-auto p-5 border shadow rounded-lg mt-2">
  <div class="mx-auto">
    <p class="mx-auto text-center text-xl font-semibold mb-2">Регистрация</p>
    <form class="flex items-center flex-col">
      <label for="">Логин</label>
      <input type="text" v-model="login" class="border p-1 pl-2 shadow rounded-lg">
      <label for="" class="mt-2">E-Mail</label>
      <input v-model="email" type="email" class="border p-1 pl-2 shadow rounded-lg">
      <label for="" class="mt-2">Пароль</label>
      <input type="password" v-model="password" class="border p-1 pl-2 shadow rounded-lg">
      <div class="mt-3 flex">
        <input type="checkbox"  name="" id="">
        <label for=""class="ml-2">Запомнить меня</label>
      </div>
      <MyButton class="w-[240px] mt-3" @click.prevent="register">Зарегистрироваться</MyButton>
      <MyButton class="w-[240px] mt-3" @click.prevent="singInWithGoogle">Войти с помощью Google</MyButton>
    </form>
  </div>
</div>
  {{auth.currentUser}}
</template>
<script>
import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth"

export default {

  data(){
    return{
      login:'',
      email:'',
      password:'',
      rememberMe:false,
      auth:getAuth()
    }
  },
  methods:{
    register(){
      createUserWithEmailAndPassword(getAuth(),this.email,this.password)
          .then((data)=>{
            console.log("Succesfull")
          })
          .catch((err)=>{
            console.log(err.code)
          })
    },
    singInWithGoogle(){
      const provider = new GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      signInWithPopup(getAuth(),provider).then((res)=>{

      }).catch((e)=>{
        console.log(e.code)
      })
    }
  }
}
</script>
<style scoped>

</style>