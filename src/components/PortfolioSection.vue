<script setup>
import { computed, ref } from 'vue';
import '../assets/scss/components/portfolio.scss';
import { projects } from '../app/projects';
import AppTab from '../components/AppTab.vue';
import PortfolioProject from '../components/PortfolioProject.vue';
import AppDropdown from './AppDropdown.vue';

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

const evenFilteredProjects = computed(() => {
  return filterProjects().filter((project, index) => index % 2 === 0);
});

const oddFilteredProjects = computed(() => {
  return filterProjects().filter((project, index) => index % 2 === 1);
});

const currentSort = ref('');
const sortOptions = ref(['Newest to Oldest', 'Oldest to Newest']);

const setCurrentSort = (current) => {
  currentSort.value = current;
};
</script>

<template>
  <div class="portfolio">
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
        <div class="portfolio__projects-column">
          <PortfolioProject
            v-for="{ id, image, title, shortDescription, tags } in evenFilteredProjects"
            :key="id"
            :project="{ image, title, shortDescription, tags }"
          />
        </div>
        <div class="portfolio__projects-column portfolio__projects-column_right">
          <PortfolioProject
            v-for="{ id, image, title, shortDescription, tags } in oddFilteredProjects"
            :key="id"
            :project="{ image, title, shortDescription, tags }"
          />
        </div>
      </div>
    </div>
  </div>
</template>
