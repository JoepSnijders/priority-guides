<template>
  <div class="canvas">
    <GuideGrid />
    <AddButton />
  </div>
</template>

<script>
import GuideGrid from '@/components/GuideGrid.vue';
import AddButton from '@/components/AddButton.vue';

export default {
  components: {
    GuideGrid,
    AddButton
  },
}
</script>

<style lang="scss">
.canvas {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
