<script setup lang="ts">
defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="text-red-500 text-sm">
    {{ message }}
  </div>
</template>
