<template>
  <div class="x-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style scoped>
</style>
