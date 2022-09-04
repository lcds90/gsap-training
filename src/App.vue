<script setup lang="ts">
import { TheNavbar } from "./components/";
</script>
<template>
  <div class="container">
    <TheNavbar></TheNavbar>
    <router-view></router-view>
  </div>
</template>

<style>
* {
  font-family: "Times New Roman", Times, serif;
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

.container {
  display: grid;
  grid: max-content 1fr / 1fr;
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
}
</style>
