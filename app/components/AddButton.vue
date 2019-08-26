<template>
  <div class="add-button" @click.prevent="createGuide">
    Add!
  </div>
</template>

<script>
export default {
 methods: {
   createGuide() {
      const name = prompt('Please enter a name for your guide:', '');
      if (name == null || name == '') return

      // Create Guide
      const guide = { name }
      this.$store.dispatch('createGuide', guide);
    }
 },
}
</script>

<style lang="scss" scoped>
.add-button {
  cursor: pointer;
}
</style>
