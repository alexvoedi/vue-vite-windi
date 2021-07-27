<template>
  <div>{{ text }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref("Hello World")
</script>
