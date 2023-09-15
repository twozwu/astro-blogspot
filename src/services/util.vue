<template>{{ storage }}asdfasdfsad
{{  props.storage }}
</template>

<script setup>
import { onMounted, ref } from "vue";
import { storage } from "@/services/global.ts";

const props = defineProps(['storage']);
let theme = ref({});
const translation  = ref();
onMounted(() => {
    theme.value = { ...localStorage };
    // storage = { ...localStorage };
    // theme.value = window.localeStorage.getItem("theme");
    // take the correct translation from all translations
    // translation.value = JSON.parse(
    //     translations[
    //         Object.keys(translations).find((key) => key.includes(userLocale))
    //     ]
    // );
});
defineExpose({ theme });
</script>

<style>
</style>