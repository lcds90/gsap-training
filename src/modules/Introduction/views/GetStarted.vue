<script setup lang="ts">
import { useI18n } from "vue-i18n";
import messages from "../locales/getStarted";

const { t } = useI18n({ messages });
</script>

<template>
  <main>
    <h1>{{ t("intro") }}</h1>
    <section>
      <h2>Instalação</h2>
      <article>
        A instalação possui dois métodos
        <ul>
          <li>
            {{ `
            <script />
            ` }}
          </li>
          <li>NPM</li>
        </ul>
        Visite esse
        <a
          href="https://greensock.com/docs/v3/Installation?checked=core#codepen:~:text=GSAP%203%20Install%20Helper"
          target="_blank"
          rel="noopener noreferrer"
        >
          link
        </a>
        para um guia de ajuda, útil caso já queira acompanhar a instalação com
        os plugins e como registrar-los a depender do ambiente.
      </article>
    </section>
    <section>
      <h2>Básico da API</h2>
    </section>
  </main>
</template>

<style scoped>
main {
  overflow: auto;
}
</style>
