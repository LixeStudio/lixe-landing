<script setup>
import { computed, ref } from 'vue';
import '../assets/scss/components/portfolio.scss';
import { projects } from '../app/projects';
import AppTab from '../components/AppTab.vue';
import PortfolioProject from '../components/PortfolioProject.vue';
import AppDropdown from './AppDropdown.vue';
import ButtonPrimary from '../components/ButtonPrimary.vue';

const allShown = ref(false);
const currentTab = ref('');

const tabs = [
  'e-commerce',
  'lorem ipsum',
  'e-lorem',
  'lorem ipsum dolor',
  'orci sagittis magna',
  'euismod',
  'purus arcu tellus',
  'purus arcu'
];

const filterProjects = () => {
  return projects.filter((project) => project.type.includes(currentTab.value));
};

const sliceProjects = computed(() => {
  const filteredProjects = filterProjects();
  return allShown.value ? filteredProjects : filteredProjects.slice(0, 6);
});

const currentSort = ref('');
const sortOptions = ref(['Newest to Oldest', 'Oldest to Newest']);

const setCurrentSort = (current) => {
  currentSort.value = current;
};

const handleButtonClick = () => {
  allShown.value = !allShown.value;
};
</script>

<template>
  <section class="portfolio">
    <div class="portfolio__container">
      <h2 class="portfolio__title">See Our Projects</h2>
      <div class="portfolio__top-panel">
        <div class="portfolio__tabs">
          <AppTab
            v-for="tab in tabs"
            :key="tab"
            :selected="currentTab === tab"
            @click="currentTab = tab"
          >
            {{ tab }}
          </AppTab>
        </div>
        <AppDropdown
          withWidthTransition="true"
          heading="Sort by"
          :options="sortOptions"
          @setCurrent="setCurrentSort"
        />
      </div>
      <div class="portfolio__projects">
        <PortfolioProject v-for="project in sliceProjects" :key="project.id" :project="project" />
      </div>
      <ButtonPrimary
        v-if="filterProjects().length > 6"
        class="portfolio__button"
        @click="handleButtonClick"
        >{{ allShown ? 'See less' : 'See more' }}</ButtonPrimary
      >
    </div>
  </section>
</template>
