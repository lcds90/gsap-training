<script setup lang="ts">
import { TheSidebar } from "@/components";

const elements = [
  {
    text: "Get Started",
    path: "/introduction/get-started",
  },
  {
    text: "GSAP 3 Express",
    path: "/introduction/express-gsap",
  },
  {
    text: "Scroll Trigger Express",
    path: "/introduction/express-scroll-trigger",
  },
  {
    text: "Quick Tutorial",
    path: "/introduction/quick-tutorial",
  },
];
</script>

<template>
  <div id="introduction-module">
    <the-sidebar :elements="elements"></the-sidebar>
    <router-view />
  </div>
</template>

<style scoped>
#introduction-module {
  width: 100%;
  height: 100%;
  display: grid;
  gap: 25px;
  grid-template-columns: 0.15fr 1fr;
}
</style>
