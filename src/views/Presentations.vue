<script setup lang="ts">
import { ref, watchEffect } from "vue";
import AppLayout from "@/components/AppLayout.vue";
import Block from "@/components/Block.vue";
import TextareaInput from "@/components/inputs/TextareaInput.vue";
import LabelInput from "@/components/inputs/LabelInput.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import { Gpt } from "@/services/Gpt";
import ErrorMessage from "@/components/inputs/ErrorMessage.vue";
import {
  ClipboardIcon,
  ClipboardDocumentCheckIcon,
  PaperAirplaneIcon,
  ArrowPathIcon,
} from "@heroicons/vue/24/solid";

const prompt = ref("");
const output = ref("");
const error = ref("");
const isLoading = ref(false);

const sendPrompt = async () => {
  if (prompt.value === "") {
    error.value = "Le prompt ne peut pas être vide.";
    return;
  }
  output.value = "";
  isLoading.value = true;
  const response = await Gpt.presentations(prompt.value);
  if (response?.error) {
    error.value = response.error;
  }
  output.value = response?.result || "";
  isLoading.value = false;
};

watchEffect(() => {
  if (prompt.value) {
    error.value = "";
  }
});

const copied = ref(false);
const copy = () => {
  navigator.clipboard.writeText(output.value);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 1000);
};
</script>

<template>
  <AppLayout>
    <Block>
      <h1>Présentations</h1>
      <div class="flex flex-col space-y-4">
        <div class="flex flex-col space-y-2">
          <LabelInput for="prompt">Prompt</LabelInput>
          <TextareaInput id="prompt" v-model="prompt" />
          <div class="flex justify-between items-center">
            <div>
              <ErrorMessage v-if="error" :message="error" />
            </div>
            <PrimaryButton :disabled="isLoading" @click="sendPrompt">
              <ArrowPathIcon
                v-if="isLoading"
                class="h-5 w-5 animate-spin"
              ></ArrowPathIcon>
              <PaperAirplaneIcon v-else class="h-5 w-5"></PaperAirplaneIcon>
            </PrimaryButton>
          </div>
        </div>
        <div class="flex flex-col space-y-2">
          <LabelInput for="output">Réponse</LabelInput>
          <TextareaInput id="output" rows="15" readonly v-model="output" />
          <div class="flex justify-end items-center">
            <PrimaryButton :disabled="isLoading" @click="copy">
              <ClipboardDocumentCheckIcon
                class="h-5 w-5 text-emerald-400"
                v-if="copied"
              ></ClipboardDocumentCheckIcon>
              <ClipboardIcon class="h-5 w-5" v-else></ClipboardIcon>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Block>
  </AppLayout>
</template>
