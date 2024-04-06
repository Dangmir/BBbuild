<script setup>

import MyButton from "@/components/MyButton.vue";
</script>

<template>
  <div class="sticky p-4 border-blue-400 border-b-[2.5px] rounded-xl shadow">
    <div class="pl-5 pr-5 flex flex-row container mx-auto items-center gap-4">
      <div class="text-xl underline underline-offset-8 decoration-teal-700 decoration-2"><RouterLink to="/">BuildMP</RouterLink></div>
      <div class="max-md:hidden flex font-semibold gap-4">
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/projects">Проекты</RouterLink>
      </div>
      <div class="flex ml-auto" >
      <MyButton @click="signOutFromAcc">Выйти</MyButton>
      </div>
      <div class="flex ml-auto">
        <RouterLink to="/register">Регистрация</RouterLink>
        <RouterLink to="/login">Войти</RouterLink>
      </div>
      <button @click="openNavBar" class="md:hidden ml-auto mr-4 text-2xl">
        =
      </button>

    </div>
    <div v-if="isOpenNav" class="fixed left-0 top-[33.5px] border-b-[2.5px] border-blue-400 rounded-xl bg-white md:hidden flex flex-col mt-4 p-4 mx-auto w-full items-center">
      <RouterLink activeClass="router-link-active-mobile" class="border-t-2 border-b-2 p-2 w-full text-center mt-2" to="/">Главная</RouterLink>
      <RouterLink activeClass="router-link-active-mobile" class="border-t-2 border-b-2 p-2 w-full text-center mt-2" to="/projects">Проекты</RouterLink>
    </div>
  </div>
</template>
<script>
import {getAuth,signOut} from "firebase/auth"
export default {

  data(){
    return{
      isOpenNav:false,
      auth:getAuth()
    }
  },
  methods:{
    openNavBar(){
      this.isOpenNav = !this.isOpenNav
    },
    signOutFromAcc(){
      signOut(this.auth).then((d)=>{
        console.log(d)
      }).catch((e)=>{
        console.log(e)
      })
    }
  }
}</script>
<style scoped>
.router-link-active{
  @apply underline underline-offset-8 decoration-teal-700 decoration-2
}
.router-link-active-mobile{
  @apply border rounded-xl border-blue-400 p-2 w-full text-center
}
</style>