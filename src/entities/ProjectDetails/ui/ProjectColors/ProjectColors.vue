<script setup>
import './project-colors.scss';
import { isDarkColor } from '../../lib/helpers/isDarkColor';

defineProps({
  colors: Array
});
</script>

<template>
  <section class="colors">
    <div class="colors__container">
      <div class="colors__grid">
        <div
          class="colors__color-box"
          v-for="color in colors"
          :key="color"
          :style="{
            'background-color': color
          }"
        >
          <h3
            class="colors__color-title"
            :style="{
              color: isDarkColor(color) ? '#ffffff' : '#1f2a37'
            }"
          >
            {{ color }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>
