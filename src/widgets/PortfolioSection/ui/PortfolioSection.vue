<script setup>
import './portfolio-section.scss';
import { getProjects } from '../api/api';
import { PortfolioControls } from '@/features/ShowProjects';
import { ref } from 'vue';

const projects = ref([]);

const getPortfolioProjects = async () => {
  projects.value = await getProjects();
};

getPortfolioProjects();
</script>

<template>
  <section class="portfolio">
    <div class="portfolio__container">
      <h2 class="portfolio__title" text-split letters-fade-in>
        {{ $t('translation.portfolio.title') }}
      </h2>
      <PortfolioControls :projects="projects" />
    </div>
  </section>
</template>
