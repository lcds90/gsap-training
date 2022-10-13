<script setup lang="ts">
import { useI18n } from "vue-i18n";
import messages from "../locales/expressGsap";
import gsap from "gsap";
import { TheCodeEditor } from "@/components";
const { t } = useI18n({ messages });

const greenBoxTo = () => {
  gsap.to("#example-1", { x: 200, duration: 2, repeat: 2 });
};

const purpleBoxFrom = () => {
  gsap.from("#example-2", { x: 200, duration: 1, repeat: 2, yoyo: true });
};

const blueBoxFromTo = () => {
  gsap.fromTo(
    "#example-3",
    { x: -40, background: "blue" },
    { x: 40, background: "green" }
  );
};
</script>

<template>
  <main>
    <section>
      <h1>Curso GSAP Express</h1>
      <a
        href="https://www.creativecodingclub.com/enrollments"
        target="_blank"
        rel="noopener noreferrer"
        >Link do curso</a
      >
    </section>
  </main>
</template>
<!-- Examples -->
<style>
#example-1,
#example-2,
#example-3 {
  display: block;
  width: 50px;
  height: 50px;
  position: relative;
}

#example-1 {
  background: green;
}

#example-2 {
  background: purple;
}

#example-3 {
  /* background: blue; */
}
</style>

<style scoped>
ul {
  list-style: circle;
  list-style-position: inside;
}

li {
  font-weight: 600;
  font-style: oblique;
  color: #2c2c2c;
}

main {
  font-size: 1.25rem;
}

section {
  background: #dbdbdb;
  padding: 25px;
  margin-bottom: 25px;
  border-bottom: 2px solid black;
}

article {
  margin-block: 15px;
  padding: 25px;
  background-color: #e4e4e4;
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
}

.hint {
  background-color: rgb(143, 237, 143);
  color: darkgreen;
  font-style: normal;
  margin-left: 15px;
  padding: 5px;
  border-radius: 5px;
  letter-spacing: 0.25px;
  font-size: 1rem;
  text-align: center;
}

p {
  margin-block: 0.5em;
}
</style>
