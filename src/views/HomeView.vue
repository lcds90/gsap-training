<script setup lang="ts">
import { TheNavbar } from "@/components/";

const elements = [{ path: "/introduction", text: `🎨 Introdução` }];
</script>

<template>
  <div class="home-view">
    <the-navbar
      :secondary="true"
      size="small"
      :elements="elements"
      :delay="0.5"
    ></the-navbar>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.home-view {
  overflow: auto;
  display: grid;
  grid: 0.005fr 1fr / 1fr;
}
</style>
