<template>
  <div class="canvas">
    <GuideGrid />
  </div>
</template>

<script>
import GuideGrid from '@/components/GuideGrid.vue';
export default {
  components: {
    GuideGrid
  },
}
</script>

<style>
.canvas {
  background: #f7f7f7;
  position: absolute;

  width: 100%;
  height: 100%;
}
</style>
