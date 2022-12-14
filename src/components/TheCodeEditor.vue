<script lang="ts" setup>
// import Prism Editor
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles
import gsap from "gsap";
// import highlighting library (you can use any library you want just return html string)
import { ref } from "vue";
import { highlight, languages } from "prismjs";
import TheClipboard from "./TheClipboard.vue";

interface IProps {
  title: string;
  code: string;
  func?: any;
}

const props = defineProps<IProps>();
const runCode = ref<HTMLElement>();

const highlighter = (code: string) => {
  return highlight(code, languages.js, "javascript"); // languages.<insert language> to return html with markup
};

const runCodeClass = () => {
  props.func();
  gsap.fromTo(
    runCode.value as HTMLElement,
    {
      background: "blue",
      color: "darkblue",
      duration: 1,
    },
    {
      color: "black",
      background: "#ffffff",
    }
  );
};

const formattedTitle = props.title.replace(new RegExp("\\.", "g"), "_");

const text = ref(`const ${formattedTitle} = ${props.code}`);
</script>

<template>
  <div class="relative">
    <slot />
    <h6>{{ title }}</h6>
    <prism-editor
      class="my-editor"
      :highlight="highlighter"
      line-numbers
      readonly
      v-model="text"
    ></prism-editor>
    <div class="absolute">
      <the-clipboard :text-to-copy="text" />
      <button ref="runCode" class="run-code" @click="runCodeClass">
        Rodar Código
      </button>
    </div>
  </div>
</template>

<style scoped>
:deep(textarea) {
  cursor: default;
}
.relative {
  position: relative;
}

.run-code {
  width: 100%;
  padding: 5px;
  background-color: transparent;
  transition: all 1s ease;
  cursor: pointer;
  background: #ffffff;
  border: 0.5px grey solid;
  transition: all 0.25s ease;
}

.absolute {
  position: absolute;
  top: 0;
  right: 0;
  width: 25%;
  font-weight: 600;
  font-family: "Courier New", Courier, monospace;
}
/* required class */
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #2d2d2d;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
  cursor: auto;
}
</style>
