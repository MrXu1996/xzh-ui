<template>
  <div class="x-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  },
  data () {
    return {
    }
  },
  components: {},
  methods: {}
}
</script>

<style scoped>
</style>
