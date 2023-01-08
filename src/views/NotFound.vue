<script setup lang="ts">
import AppLayout from "@/components/AppLayout.vue";
import Block from "@/components/Block.vue";
</script>

<template>
  <AppLayout>
    <Block class="text-center">
      <h1 class="font-mono text-5xl">404</h1>
      <h2>Page not found</h2>
      <RouterLink class="text-sky-200 font-bold text-sm underline" to="/"
        >Revenir à l'acceuil</RouterLink
      >
    </Block>
  </AppLayout>
</template>
