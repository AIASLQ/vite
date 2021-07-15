<template>
  <div>
      <img alt="Vue logo" src="@/assets/logo.png" />
      <img alt="Vue logo" :class="classes.logo" :src="logo" />
      <HelloWorld msg="Hello Vue 3 + Vite" />
      <a>sddf</a>
  </div>
</template>

<script setup>
import HelloWorld from 'comps/HelloWorld.vue'
import logo from '@/assets/logo.png'
import classes from './App.module.css'
</script>
<style lang="scss" scope>
$link-color: red;
a {
  color:$link-color
}
  
</style>
