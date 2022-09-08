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
  transition: all 0.25s ease-out;
  cursor: pointer;
  background: #ffffff;
  border: 0.5px grey solid;
}

.with-success {
  background-color: rgb(143, 237, 143);
  color: black;
  box-shadow: 0 0 25px rgba(76, 255, 52, 0.75);
}
</style>
