<template>
  <div class="x-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XForm',
  props: {
    form: {
      type: Object
    },
    labelWidth: {
      type: String,
      default: '100px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>

<style scoped>
</style>
