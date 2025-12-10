<script setup lang="ts">
  import { ref } from 'vue';
  
  const inputValue = ref('');
  const inputEl = ref<HTMLInputElement | null>(null);
  
  // Hàm public: Focus vào ô input
  const focusInput = () => {
    inputEl.value?.focus();
  };
  
  // Hàm public: Xóa dữ liệu
  const clearInput = () => {
    inputValue.value = '';
  };
  
  // MỞ CỬA: Chỉ expose 2 hàm này, biến inputValue vẫn là private
  defineExpose({
    focusInput,
    clearInput
  });
  </script>
  
  <template>
    <div class="custom-input">
      <label>Nhập lệnh:</label>
      <input 
        ref="inputEl" 
        v-model="inputValue" 
        placeholder="Gõ gì đó..." 
      />
      <p>Value (Internal State): {{ inputValue }}</p>
    </div>
  </template>
  
  <style scoped>
  .custom-input { padding: 10px; background: #f0f0f0; border-radius: 4px; }
  input { padding: 5px; margin-left: 5px; }
  </style>