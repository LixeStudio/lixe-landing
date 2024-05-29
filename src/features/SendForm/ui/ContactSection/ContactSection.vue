<script setup>
import './contact-section.scss';
import { ContactList } from '@/entities/Contact';
import { BaseButton } from '@/shared/ui';
import { BaseFormTextField } from '@/shared/ui';
import { BaseTextareaField } from '@/shared/ui';
import { format } from 'date-fns';
import { ref } from 'vue';

const props = defineProps(['isModal']);
const emit = defineEmits(['closeModal']);

const name = ref('');
const email = ref('');
const details = ref('');

const handleSubmit = () => {
  console.log({
    name: name.value,
    email: email.value,
    details: details.value,
    date: format(new Date(), 'yyyy-MM-dd')
  });
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
          @setValue="(value) => (name = value)"
          :placeholder="$t('translation.contactModal.namePlaceholder')"
          >{{ $t('translation.contactModal.nameLabel') }}</BaseFormTextField
        >
        <BaseFormTextField
          id="email"
          @setValue="(value) => (email = value)"
          :placeholder="$t('translation.contactModal.emailPlaceholder')"
          >{{ $t('translation.contactModal.emailLabel') }}</BaseFormTextField
        >
        <BaseTextareaField
          id="details"
          @setValue="(value) => (details = value)"
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
