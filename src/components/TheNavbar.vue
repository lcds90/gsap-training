<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import gsap from "gsap";

const navbar = ref();

type Size = "small" | "medium" | "large";
interface IProps {
  elements: {
    text: string;
    path: string;
  }[];
  size: Size;
  delay?: number;
  secondary?: boolean;
}
const props = defineProps<IProps>();

const classObject = reactive({
  navbar: true,
  small: props.size === "small",
  normal: ["medium", "large"].includes(props.size),
  secondary: props.secondary,
});

onMounted(() => {
  gsap.from(navbar.value, {
    delay: props.delay,
    y: -200,
    ease: "power3",
    duration: 1.25,
  });
});
</script>

<template>
  <nav ref="navbar" :class="classObject">
    <div class="navbar-item" v-for="item in elements" :key="item.path">
      <router-link :class="{ secondaryLink: secondary }" :to="item.path">
        {{ item.text }}
      </router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: grid;
  width: 100%;
  justify-items: center;
  padding: 10px;
  border-bottom: 1px solid grey;
  gap: 25px;
  background: linear-gradient(190deg, #d8d8d8, white);
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.05);
}

.secondary {
  background: linear-gradient(50deg, #ededed, #d8d8d8);
}

.normal {
  grid-template-columns: repeat(2, 1fr);
}

.small {
  grid-template-columns: repeat(6, 1fr);
}

.navbar-item {
  border: 1px solid black;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.15);
  background: rgb(234, 234, 234);
  color: rgb(69, 69, 69);
  width: 100%;
  height: 100%;
  text-align: center;
}

a {
  text-decoration: none;
  width: 100%;
  height: 100%;
  padding: 5px;
  display: inline-block;
  transition: all 0.35s ease;
  font-size: 1rem;
  border: 1px solid transparent;
}

a:visited {
  color: darkblue;
  background: blue;
}

a.router-link-active {
  color: green;
  background-color: rgb(143, 237, 143);
}

a.router-link-active.secondaryLink {
  background-color: rgba(143, 237, 143, 0.15);
  border: 1px solid green !important;
}
</style>
