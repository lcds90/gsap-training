<script lang="ts" setup>
// import Prism Editor
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles

// import highlighting library (you can use any library you want just return html string)
import { ref } from "vue";
import { highlight, languages } from "prismjs";
import TheClipboard from "./TheClipboard.vue";

interface IProps {
  title: string;
  code: string;
}

const props = defineProps<IProps>();

const highlighter = (code: string) => {
  return highlight(code, languages.js, "javascript"); // languages.<insert language> to return html with markup
};

const text = ref(`const ${props.title.replaceAll(".", "_")} = ${props.code}`);
</script>

<template>
  <div class="relative">
    <h6>{{ title }}</h6>
    <prism-editor
      class="my-editor"
      :highlight="highlighter"
      line-numbers
      readonly
      v-model="text"
    ></prism-editor>
    <the-clipboard class="absolute" :text-to-copy="text" />
  </div>
</template>

<style scoped>
.relative {
  position: relative;
}

.absolute {
  position: absolute;
  bottom: -30px;
  left: 0;
  width: 25%;
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
}
</style>
