<template>this is theme:{{ theme }}</template>

<script setup>
import { onMounted, ref } from "vue";
import { theme } from "./store";
import { useStore } from "@nanostores/vue";

// read the store value with the `useStore` hook
const $theme = useStore(theme);

const props = defineProps(["storage"]);
onMounted(() => {
    theme.set({ ...localStorage }); // 寫入用 set
    console.log($theme.value); // 讀取使用 $theme
});
defineExpose({ theme });
</script>

<style>
</style>