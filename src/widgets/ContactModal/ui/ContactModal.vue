<script setup>
import './contact-modal.scss';
import { BaseCloseButton } from '@/shared/ui';
import { ContactSection } from '@/features/SendForm';
import { animateText } from '../lib/helpers/animate-text';
import { onMounted } from 'vue';

onMounted(() => {
  animateText();
});

const emit = defineEmits(['closeModal']);
</script>

<template>
  <div class="contact-modal">
    <div class="contact-modal__overlay" @click="emit('closeModal')"></div>
    <div class="contact-modal__container">
      <BaseCloseButton @close="emit('closeModal')" />
      <ContactSection @closeModal="emit('closeModal')" isModal="true" />
    </div>
  </div>
</template>
