<template>
  <svg class="add-button" @click.prevent="createGuide" viewBox="0 0 100 100">
    <g>
      <path d="M80.2 2.5H19.8c-9.6 0-17.3 7.8-17.3 17.3v60.4c0 9.6 7.8 17.3 17.3 17.3h60.4c9.6 0 17.3-7.8 17.3-17.3V19.8c0-9.5-7.8-17.3-17.3-17.3zm-5.3 52.6H55.1v19.8c0 2.8-2.3 5.1-5.1 5.1-1.4 0-2.7-.6-3.6-1.5-.9-.9-1.5-2.2-1.5-3.6V55.1H25.1c-1.4 0-2.7-.6-3.6-1.5-.9-.9-1.5-2.2-1.5-3.6 0-2.8 2.3-5.1 5.1-5.1h19.8V25.1c0-2.8 2.3-5.1 5.1-5.1s5.1 2.3 5.1 5.1v19.8h19.8c2.8 0 5.1 2.3 5.1 5.1s-2.3 5.1-5.1 5.1z" />
    </g>
  </svg>
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
  width: 32px;
  height: 32px;
  cursor: pointer;
  fill: darken(#F7F7FA, 30%);

  transition: fill .2s ease;

  &:hover {
    fill: darken(#F7F7FA, 60%);
  }
}
</style>
