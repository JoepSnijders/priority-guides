<template>
  <div class="guide-grid">
    <Guide v-for="(guide, index) in guides" :key="index" :data="guide" />
  </div>
</template>

<script>
import Guide from '@/components/Guide.vue';
export default {
  data() {
    return {
      guides: this.$store.state.guides
    }
  },
  components: {
    Guide
  },
}
</script>

<style lang="scss" scoped>
.guide-grid {
  display: flex;
  justify-content: center;

  margin-top: 4rem;
}
</style>
