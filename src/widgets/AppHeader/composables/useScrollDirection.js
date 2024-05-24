import { ref } from 'vue';
import { useScrollHandler } from '@/shared/composables/useScrollHandler';

export function useScrollDirection() {
  const direction = ref('up');
  const startY = ref(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > startY.value) {
      direction.value = 'down';
    } else {
      direction.value = 'up';
    }
    startY.value = scrollY;
  };

  useScrollHandler(handleScroll);

  return {
    direction
  };
}
