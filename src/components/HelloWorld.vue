<template>
    <h1 class="text-primary">{{ msg }}</h1>
</template>

<script setup lang="ts">
defineProps<{
  msg: string | undefined
}>()
</script>