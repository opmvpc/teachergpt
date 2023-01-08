<script setup lang="ts">
import AppLayout from "@/components/AppLayout.vue";
import Block from "@/components/Block.vue";
import LabelInput from "@/components/inputs/LabelInput.vue";
import PasswordInput from "@/components/inputs/PasswordInput.vue";
import { ref, watch } from "vue";
import { LocalStorage } from "@/services/LocalStorage";

const gptApiKey = ref(LocalStorage.get("apiKey") || "");

watch(gptApiKey, (value) => {
  LocalStorage.set("apiKey", value);
});
</script>

<template>
  <AppLayout>
    <Block>
      <h1>Préférences</h1>
      <div class="flex flex-col space-y-2">
        <LabelInput for="gpt-api-key">Clé API GPT-3</LabelInput>
        <PasswordInput id="gpt-api-key" v-model="gptApiKey" />
      </div>
    </Block>
  </AppLayout>
</template>
