import { onMounted, onBeforeUnmount } from 'vue';

export function useScrollHandler(handleScroll) {
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });
}
