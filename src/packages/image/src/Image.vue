<template>
  <div class="x-image">
   <img :src="src" class="x-image__inner" @click="isShow = true">
   <div class="x-previewImage" v-show="isShow" @click.self="isShow = false">
     <img :src="src">
   </div>
 </div>
</template>

<script>
export default {
  name: 'XImage',
  computed: {
  },
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
  }
}
</script>

<style scoped lang='scss'>
.x-image {
  .x-image__inner{
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .x-previewImage {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba($color: #000000, $alpha: .3);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 60vh;
    }
  }
}
</style>
