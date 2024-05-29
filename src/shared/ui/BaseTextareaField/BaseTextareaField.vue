<script setup>
import './base-textarea-field.scss';

defineProps({
  id: String,
  placeholder: String
});

const emit = defineEmits(['setValue']);

const handleInput = (e) => {
  emit('setValue', e.target.value);
};
</script>

<template>
  <div class="textarea-field">
    <label class="textarea-field__label" :for="id"><slot /></label>
    <textarea
      class="textarea-field__input"
      name="details"
      :id="id"
      :placeholder="placeholder"
      @input="handleInput"
    />
  </div>
</template>
