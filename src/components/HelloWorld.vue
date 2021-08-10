<template>
  <div>{{ t("hello") }}</div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

console.log(t("hello"));
</script>
