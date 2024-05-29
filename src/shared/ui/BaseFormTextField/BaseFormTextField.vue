<script setup>
import './base-form-text-field.scss';

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
  <div class="text-field">
    <label class="text-field__label" :for="id"><slot /></label
    ><input
      class="text-field__input"
      type="text"
      :id="id"
      :placeholder="placeholder"
      @input="handleInput"
    />
  </div>
</template>
