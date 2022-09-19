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
    <div class="introduction-container">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
#introduction-module {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 0.15fr 1fr;
  overflow: hidden;
}

.introduction-container {
  border: 0.25px solid #acacac;
  padding: 25px;
  margin: 10px;
  box-shadow: 0 2px 2px var(--color-border);
  overflow-y: scroll;
  background-color: var(--color-background-soft);
}
</style>
