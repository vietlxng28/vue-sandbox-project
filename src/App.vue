<script setup lang="ts">
  import { useCounter } from '@/composables/useCounter';
  
  // Destructuring thoải mái
  const { count, increment } = useCounter(10);
  </script>
  
  <template>
    <button @click="increment">Count is: {{ count }}</button>
  </template>