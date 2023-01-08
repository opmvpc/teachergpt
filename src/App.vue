<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="layout min-h-screen pt-10 px-3">
    <header
      class="container mx-auto backdrop-blur-lg bg-black/50 p-5 rounded-2xl shadow-xl mb-10"
    >
      <nav
        class="flex space-x-8 items-center uppercase font-bold text-sky-200 tracking-widest"
      >
        <RouterLink to="/">Cours</RouterLink>
        <RouterLink to="/presentation">Présentation</RouterLink>
        <RouterLink to="/exercices">Exercices</RouterLink>
        <RouterLink to="/preferences">Préférences</RouterLink>
      </nav>
    </header>

    <RouterView v-slot="{ Component }">
      <KeepAlive>
        <Component :is="Component" />
      </KeepAlive>
    </RouterView>
  </div>
</template>
