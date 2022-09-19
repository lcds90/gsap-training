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
  border-bottom: 1px solid  var(--color-text);
  gap: 25px;
  background: linear-gradient(315deg,  var(--color-background-soft), var(--color-background-mute));
  box-shadow: 0 5px 4px var(--color-border);
}

.secondary {
  background: linear-gradient(315deg, var(--color-background-mute), var(--color-background-soft));
}

.normal {
  grid-template-columns: repeat(2, 1fr);
}

.small {
  grid-template-columns: repeat(6, 1fr);
}

.navbar-item {
  border: 1px solid  var(--color-text);
  box-shadow: 0 2px 1px  var(--color-border);
  background: linear-gradient(315deg, var(--color-background) 95%, rgb(143, 237, 143));
  color: var(--color-heading);
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
  border: 1px solid transparent;
}

a.router-link-active {
  color: green;
  background-color: rgb(143, 237, 143);
}

a.router-link-active.secondaryLink {
  background-color: rgba(16, 253, 16, 0.637);
  border: 1px solid green !important;
}
</style>
