<script setup>
import './portfolio-controls.scss';
import { computed, ref } from 'vue';
import { BaseTab } from '@/shared/ui';
import { PortfolioProject } from '@/entities/Portfolio';
import { SortDropdown } from '@/entities/Portfolio';
import { BaseButton } from '@/shared/ui';
import { tabs } from '../../constants/tabs';

const props = defineProps({
  projects: Object
});

const allShown = ref(false);
const currentTab = ref('');

const filterProjects = () => {
  return props.projects.filter((project) => project.type.includes(currentTab.value));
};

const sliceProjects = computed(() => {
  const filteredProjects = filterProjects();
  return allShown.value ? filteredProjects : filteredProjects.slice(0, 6);
});

const currentSort = ref('');

const setCurrentSort = (current) => {
  currentSort.value = current;
};
</script>

<template>
  <div class="portfolio__top-panel">
    <div class="portfolio__tabs">
      <BaseTab
        v-for="tab in tabs"
        :key="tab"
        :selected="currentTab === tab"
        @click="currentTab = tab"
      >
        {{ tab }}
      </BaseTab>
    </div>
    <SortDropdown :currentSort="currentSort" @setCurrentSort="setCurrentSort" />
  </div>
  <div class="portfolio__projects">
    <PortfolioProject v-for="project in sliceProjects" :key="project.id" :project="project" />
  </div>
  <BaseButton
    v-if="filterProjects().length > 6"
    class="portfolio__button"
    @click="allShown = !allShown"
    >{{
      allShown
        ? $t('translation.portfolio.buttonText.seeLess')
        : $t('translation.portfolio.buttonText.seeMore')
    }}</BaseButton
  >
</template>
