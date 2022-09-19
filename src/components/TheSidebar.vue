<script setup lang="ts">
import { onMounted, ref } from "vue";
import gsap from "gsap";

interface IProps {
  elements: {
    text: string;
    path: string;
  }[];
}

defineProps<IProps>();

const sidebar = ref();

onMounted(() => {
  gsap.from(sidebar.value, {
    x: -100,
    duration: 1,
    opacity: 0.15,
  });
});
</script>

<template>
  <aside ref="sidebar">
    <div v-for="item in elements" :key="item.path">
      <router-link :to="item.path">
        {{ item.text }}
      </router-link>
    </div>
  </aside>
</template>

<style scoped>
aside {
  background-color: var(--color-background-mute);
  border-right: 1.5px solid var(--color-text);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px 10px;
}

a {
  box-shadow: 0 0 1px var(--color-border);
  width: 100%;
  height: 100%;
  text-align: center;
  display: grid;
  place-items: center;
  text-decoration: none;
  transition: all 0.5s ease;
  font-weight: 700;
  border: 1px solid transparent;
  background: var(--color-border)
}

a:visited {
  color: darkgreen;
}

a.router-link-active {
  border: 1px solid rgb(176, 237, 143);
  color: rgb(77, 117, 9);
  background: var(--color-background-mute);
}

@media (prefers-color-scheme: dark) {
  a {
  background: radial-gradient(circle at center, var(--color-border-hover) 0%, var(--color-border) 75%, var(--color-border-hover) 100%);
  }
  a.router-link-active {
    background: var(--color-text);
  }
}



</style>
