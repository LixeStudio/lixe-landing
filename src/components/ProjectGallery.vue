<script setup>
import '../assets/scss/components/project-gallery.scss';

defineProps({
  images: Array
});
</script>

<template>
  <section class="gallery">
    <div class="gallery__container">
      <div class="gallery__grid">
        <img
          v-for="image in images"
          :key="image"
          class="gallery__image"
          :src="image"
          alt="Project image"
        />
      </div>
    </div>
  </section>
</template>
