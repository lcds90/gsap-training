<script lang="ts" setup>
import { ref } from "vue";

interface IProps {
  textToCopy: string;
}

const props = defineProps<IProps>();

const div = ref<HTMLElement>();
const text = ref("Copy to clipboard");

const copyCode = () => {
  div.value?.classList.add("with-success");
  text.value = "Copied to the clipboard!";
  navigator.clipboard.writeText(props.textToCopy);
};

const onMouseOut = () => {
  div.value?.classList.remove("with-success");
  text.value = "Copy to clipboard";
};
</script>

<template>
  <button ref="div" @click="copyCode" @mouseout="onMouseOut">
    {{ text }}
  </button>
</template>

<style scoped>
button {
  width: 100%;
  padding: 5px;
  background-color: transparent;
  transition: all 1s ease;
  cursor: pointer;
}

.with-success {
  background-color: rgb(143, 237, 143);
  color: black;
}
</style>
