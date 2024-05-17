<script setup>
import { ref } from 'vue';
import '../assets/scss/components/portfolio-project.scss';
import DetailsModal from '../components/DetailsModal.vue';

defineProps(['project']);

const circle = ref(null);
const container = ref(null);

const handleMouseMove = (e) => {
  const x = Math.round(
    e.clientX - container.value.getBoundingClientRect().left - circle.value.offsetWidth / 2
  );
  const y = Math.round(
    e.clientY - container.value.getBoundingClientRect().top - circle.value.offsetWidth / 2
  );
  circle.value.style.transform = `translateX(${x}px) translateY(${y}px)`;
};

const isModalOpened = ref(false);

const openModal = () => {
  isModalOpened.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpened.value = false;
  document.body.style.overflow = 'auto';
};
</script>

<template>
  <div
    class="portfolio__project"
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :visible-once="{ opacity: 1, y: 0, scale: 1 }"
    :delay="200"
    :duration="1200"
    ref="container"
    @mousemove="handleMouseMove"
    @click="openModal"
  >
    <div class="portfolio__circle" ref="circle">
      <div class="portfolio__circle-inner">View</div>
    </div>
    <img class="portfolio__project-image" :src="project.image" alt="Project Image" />
    <div class="portfolio__project-box">
      <h3 class="portfolio__project-title">{{ project.title }}</h3>
      <p class="portfolio__project-description">{{ project.shortDescription }}</p>
    </div>
    <div class="portfolio__project-tags">
      <div class="portfolio__project-tag" v-for="(tag, index) in project.tags" :key="index">
        <span>{{ tag }}</span>
        <span v-if="index !== project.tags.length - 1" class="portfolio__project-tag-circle"></span>
      </div>
    </div>
  </div>
  <Transition>
    <DetailsModal v-if="isModalOpened" @closeModal="closeModal" :project="project" />
  </Transition>
</template>
