<script setup lang="ts">
interface IProps {
  elements: {
    text: string;
    path: string;
  }[];
}

defineProps<IProps>();
</script>

<template>
  <aside>
    <div v-for="item in elements" :key="item.path">
      <router-link :to="item.path">
        {{ item.text }}
      </router-link>
    </div>
  </aside>
</template>
