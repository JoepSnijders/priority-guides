<template>
  <div class="guide-grid">
    <Guide />
    <Guide />
  </div>
</template>

<script>
import Guide from '@/components/Guide.vue';
export default {
components: {
  Guide
},
}
</script>

<style lang="scss" scoped>
.guide-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  margin-top: 4rem;
}
</style>
