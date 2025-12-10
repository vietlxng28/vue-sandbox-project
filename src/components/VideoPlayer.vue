<script setup lang="ts">
  import { ref } from 'vue';
  
  // 1. Khai báo biến ref (Tên trùng với template ref)
  const videoRef = ref<HTMLVideoElement | null>(null);
  const isPlaying = ref(false);
  
  // Hàm toggle play/pause
  const toggleVideo = () => {
    // Check null an toàn (giống check ref.current trong React)
    if (!videoRef.value) return;
  
    if (videoRef.value.paused) {
      videoRef.value.play();
      isPlaying.value = true;
    } else {
      videoRef.value.pause();
      isPlaying.value = false;
    }
  };
  
  // Hàm Reset (Sẽ được gọi từ Component Cha)
  const resetVideo = () => {
    if (videoRef.value) {
      videoRef.value.pause();
      videoRef.value.currentTime = 0;
      isPlaying.value = false;
    }
  };
  
  // MỞ CỬA: Cho phép component cha gọi hàm resetVideo này
  defineExpose({
    resetVideo
  });
  </script>
  
  <template>
    <div class="video-box">
      <video 
        ref="videoRef"
        src="https://www.w3schools.com/html/mov_bbb.mp4" 
        width="100%"
        style="border-radius: 8px;"
      ></video>
      
      <div class="controls">
        <button @click="toggleVideo">
          {{ isPlaying ? '⏸ Pause' : '▶️ Play' }}
        </button>
        <span>(Click nút này gọi hàm nội bộ)</span>
      </div>
    </div>
  </template>
  
  <style scoped>
  .video-box { border: 1px solid #ccc; padding: 10px; margin-bottom: 20px; border-radius: 8px; }
  .controls { margin-top: 10px; display: flex; align-items: center; gap: 10px; }
  </style>