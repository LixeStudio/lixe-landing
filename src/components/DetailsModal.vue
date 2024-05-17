<script setup>
import '../assets/scss/components/details-modal.scss';
import CloseButton from './CloseButton.vue';
import ProjectGallery from '../components/ProjectGallery.vue';
import ProjectColors from './ProjectColors.vue';
import ClientFeedback from '../components/ClientFeedback.vue';
import ContactSection from './ContactSection.vue';
import ContactForm from './ContactForm.vue';
import ProjectInfo from './ProjectInfo.vue';
import ProjectHero from './ProjectHero.vue';
import NextProject from './NextProject.vue';

defineProps(['project']);
const emit = defineEmits(['closeModal']);
</script>

<template>
  <div class="details-modal">
    <div class="details-modal__container">
      <CloseButton @close="emit('closeModal')" />
      <ProjectHero
        :project="{
          title: project.title,
          logo: project.logo,
          modalImage: project.modalImage,
          link: project.link
        }"
      />
      <ProjectInfo
        :project="{
          title: project.title,
          description: project.description,
          link: project.link,
          client: project.client,
          scopeOfWork: project.scopeOfWork,
          date: project.date
        }"
      />
      <ProjectGallery :images="Array(3).fill(project.modalImage)" />
      <ProjectColors :colors="project.colors" />
      <ProjectGallery :images="Array(3).fill(project.modalImage)" />
      <ClientFeedback :clientFeedback="project.clientFeedback" />
      <NextProject :project="{ image: project.image }" />
      <div class="details-modal__box">
        <ContactSection class="details-modal__contact">
          <ContactForm />
        </ContactSection>
      </div>
    </div>
  </div>
</template>
