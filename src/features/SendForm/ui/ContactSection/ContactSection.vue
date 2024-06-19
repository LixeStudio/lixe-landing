<script setup>
import './contact-section.scss';
import { ContactList } from '@/entities/Contact';
import { BaseFormTextField, BaseTextareaField, BaseButton } from '@/shared/ui';
import { format } from 'date-fns';
import { ref, inject } from 'vue';
import { sendForm } from '../../api/api';

const props = defineProps(['isModal']);
const emit = defineEmits(['closeModal']);

const name = ref('');
const email = ref('');
const details = ref('');

const setMessage = inject('setMessage');

const handleSubmit = async (e) => {
  const data = {
    name: name.value,
    email: email.value,
    details: details.value,
    date: format(new Date(), 'yyyy-MM-dd')
  };

  const status = await sendForm(data);
  setMessage({ status, text: 'Your message has been successfully sent' });
  setTimeout(() => setMessage(null), 3000);

  if (props.isModal) {
    emit('closeModal');
    return;
  }

  e.target.reset();
};
</script>

<template>
  <section class="contact">
    <div class="contact__top-part">
      <h2
        class="contact__title"
        modal-text-split
        modal-letters-fade-in
        details-text-split
        details-letters-fade-in
      >
        {{ $t('translation.contactModal.title') }}
      </h2>
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
