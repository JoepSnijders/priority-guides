<template>
  <div class="guide-grid">
    <Guide v-for="(guide, index) in this.$store.state.guides" :key="index" :data="guide" :id="index" />
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
  justify-content: left;
  flex-wrap: wrap;

  margin: 4rem 4rem;
}
</style>
