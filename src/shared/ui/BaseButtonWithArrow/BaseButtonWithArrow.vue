<script setup>
import { ref } from 'vue';
import './base-button-with-arrow.scss';
import { colors } from '../../constants/colors';
import { getOffsets } from '../../lib/helpers/offsetsHelper';

defineProps({
  theme: { type: String },
  isHidden: { type: Boolean }
});

const transformOrigin = ref('');

const setTransformOrigin = (e) => {
  const { offsetX, offsetY } = getOffsets(e);
  transformOrigin.value = offsetX + ' ' + offsetY;
};
</script>

<template>
  <div class="button-with-arrow" @mouseenter="setTransformOrigin" @mouseleave="setTransformOrigin">
    <span
      class="button-with-arrow__text"
      :class="{
        'button-with-arrow__text_hidden': isHidden
      }"
      >Start the project</span
    >
    <div
      class="button-with-arrow__circle"
      :class="{
        'button-with-arrow__circle_light': theme === 'light'
      }"
    >
      <img
        class="button-with-arrow__arrow"
        :class="{
          'button-with-arrow__arrow_light': theme === 'light'
        }"
        src="../../assets/icons/arrow-right.svg"
        alt="Arrow right"
      />
      <div
        class="button-with-arrow__inner"
        :style="{
          transformOrigin,
          'background-color': theme === 'light' ? colors.white : colors.dark
        }"
      ></div>
    </div>
  </div>
</template>
