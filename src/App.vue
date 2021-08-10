<template>
  <div>
    <HelloWorld />

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head";

useHead({
  title: "Title",

  meta: [
    {
      name: "description",
      content: "description",
    },
  ],
});
</script>
