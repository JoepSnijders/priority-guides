<template>
  <div class="canvas">
    <div data-netlify-identity-menu></div>
    <GuideGrid />
    <AddButton />
    <div id="netlify-modal"></div>
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
  mounted () {
    const netlifyIdentity = require('netlify-identity-widget');
    netlifyIdentity.init({
      container: '#netlify-modal' // defaults to document.body,
    });
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
