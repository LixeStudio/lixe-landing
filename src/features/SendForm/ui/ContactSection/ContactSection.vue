<script setup>
import './contact-section.scss';
import { ContactList } from '@/entities/Contact';
import { BaseButton } from '@/shared/ui';
import { BaseFormTextField } from '@/shared/ui';
import { BaseTextareaField } from '@/shared/ui';

const props = defineProps(['isModal']);
const emit = defineEmits(['closeModal']);

const handleSubmit = () => {
  console.log('Submit');
  if (props.isModal) {
    emit('closeModal');
  }
};
</script>

<template>
  <section class="contact">
    <div class="contact__top-part">
      <h2 class="contact__title">{{ $t('translation.contactModal.title') }}</h2>
      <ContactList class="contact__contacts" theme="light" />
    </div>
    <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
      <div class="contact-form__fields">
        <BaseFormTextField
          id="name"
          :placeholder="$t('translation.contactModal.namePlaceholder')"
          >{{ $t('translation.contactModal.nameLabel') }}</BaseFormTextField
        >
        <BaseFormTextField
          id="email"
          :placeholder="$t('translation.contactModal.emailPlaceholder')"
          >{{ $t('translation.contactModal.emailLabel') }}</BaseFormTextField
        >
        <BaseTextareaField
          id="details"
          :placeholder="$t('translation.contactModal.detailsPlaceholder')"
          >{{ $t('translation.contactModal.detailsLabel') }}</BaseTextareaField
        >
      </div>
      <BaseButton class="contact-form__button" type="submit">{{
        $t('translation.contactModal.buttonText')
      }}</BaseButton>
    </form>
  </section>
</template>
