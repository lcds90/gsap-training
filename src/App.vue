<script setup lang="ts">
import { TheNavbar } from "./components/";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const elements = [
  { path: "/", text: `🏠 ${t("navbar.home")}` },
  { path: "/contact", text: `🧑‍💻 ${t("navbar.contact")}` },
];
</script>
<template>
  <div class="container">
    <the-navbar size="medium" :elements="elements" />
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
  background-color: #d8d8d8;
}
</style>
