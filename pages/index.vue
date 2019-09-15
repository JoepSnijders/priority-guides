<template>
  <div class="app">
    <header>
      <div data-netlify-identity-menu></div>
    </header>
    <div class="canvas">
      <GuideGrid />
      <AddButton />
      <div id="netlify-modal"></div>
    </div>
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
header {
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  margin: 0 auto;
  border-bottom: 1px solid #ddd;
}
.canvas {
  display: flex;
  justify-content: center;
  align-items: center;
}

div[data-netlify-identity-menu] {
  margin-left: auto;
}
.netlify-identity-item {
  display: inline-block;
  &:not(:last-child) {
    margin-right: 1rem;
  }
}
</style>
