<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (e: Event) => {
  const target = e.target as HTMLTextAreaElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <input
    class="rounded-lg bg-black/30 border-slate-600 border-2 hover:border-slate-500 hover:bg-black/20 focus:bg-black/20 focus:border-sky-200 focus:outline-none text-sky-200 py-2 px-4 transition-colors"
    type="password"
    :value="modelValue"
    @input="updateValue"
  />
</template>
