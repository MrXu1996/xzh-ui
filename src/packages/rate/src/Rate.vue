<template>
  <div class="x-rate">
    <span
    v-for="number in 5"
    :key="number"
    :class="['x-icon-star-off', number <= rateNum ? 'x-icon-star-on': '']"
    :style="{fontSize: size + 'px', color: number <= rateNum ? color : ''}"
    @click="setRate(number)"
    >

    </span>
  </div>
</template>

<script>
export default {
  name: 'XRate',
  props: {
    num: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 20
    },
    color: {
      type: String,
      default: '#F7BA2A'
    }
  },
  data () {
    return {
      rateNum: this.num
    }
  },
  methods: {
    setRate (number) {
      this.rateNum = number
      this.$emit('change', this.rateNum)
    }
  }
}
</script>

<style scoped lang='scss'>
</style>
