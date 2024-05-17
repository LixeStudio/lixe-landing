<script setup>
import '../assets/scss/components/contact-modal.scss';
import ContactList from './ContactList.vue';
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

defineProps({
  isOpen: Boolean
});

const emit = defineEmits(['closeModal']);

const target = ref(null);
onClickOutside(target, () => emit('closeModal'));
</script>

<template>
  <div v-if="isOpen" class="contact-modal">
    <div class="contact-modal__container" ref="target">
      <div class="contact-modal__content">
        <div class="contact-modal__top-part">
          <h2 class="contact-modal__title">Contact us</h2>
          <ContactList class="contact-modal__contacts" theme="light" />
        </div>
        <slot />
      </div>
      <CloseButton @close="emit('closeModal')" />
    </div>
  </div>
</template>
