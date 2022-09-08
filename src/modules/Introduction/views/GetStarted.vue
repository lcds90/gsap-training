<script setup lang="ts">
import { useI18n } from "vue-i18n";
import messages from "../locales/getStarted";
import gsap from "gsap";
import { TheCodeEditor } from "@/components";
const { t } = useI18n({ messages });

const example = () => {
  alert("this is a example!");
};
</script>

<template>
  <main>
    <section>
      <h1>{{ t("intro") }}</h1>
      <article>
        <h2>Instalação</h2>
        {{ t("install.p1") }}
        <ul>
          <li>
            {{ `
            <script />
            ` }}
          </li>
          <li>NPM</li>
        </ul>
        {{ t("install.visit") }}
        <a
          href="https://greensock.com/docs/v3/Installation?checked=core#codepen:~:text=GSAP%203%20Install%20Helper"
          target="_blank"
          rel="noopener noreferrer"
        >
          link
        </a>
        {{ t("install.visit_about") }}
      </article>
      <hr />
    </section>
    <section>
      <h2>{{ t("api_basics.title") }}</h2>
      {{ t("api_basics.description") }}
      <article>
        <h3>{{ t("api_basics.functions.title") }}</h3>
        <p>{{ t("api_basics.can_animate") }}</p>
        <br />
        <p>SVG</p>
        <p>Canvas</p>
        <p>WebGL</p>
        <p>JS Object (Dom Elements)</p>
        <br />
        <p>{{ t("api_basics.about_api") }}</p>
        <p>{{ t("api_basics.objective") }}</p>
        <hr />
        <p v-html="t('api_basics.syntax')"></p>
        <hr />
        <p>{{ t("examples") }}</p>
        <TheCodeEditor title="gsap.to" :code="example.toString()" />
      </article>
    </section>
  </main>
</template>

<style scoped>
main {
  font-size: 1.25rem;
}
</style>
