// src/composables/useCounter.ts
import { ref } from 'vue';

export function useCounter(initialValue: number = 0) {
  const count = ref(initialValue);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  return { count, increment, decrement };
}