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
  background-color: #b5b5b5;
  border-right: 1.5px solid black;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px 10px;
}

a {
  border: 1px solid black;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.05);
  background: rgb(234, 234, 234, 0.5);
  width: 100%;
  height: 100%;
  text-align: center;
  display: grid;
  place-items: center;
  text-decoration: none;
  transition: all 0.25s ease;
}

a:visited {
  color: darkgreen;
}

a.router-link-active {
  border: 1px solid rgb(176, 237, 143);
  color: rgb(77, 117, 9);
  background: rgb(234, 234, 234);
  /* border: 1px solid green !important; */
}
</style>
