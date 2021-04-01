<template>
  <div class="x-switch" @click="handleClick" :class="{'is-checked': value}">
    <span class="x-switch_core" ref="core">
      <span class="x-switch_button"></span>
    </span>
    <input type="checkbox" class="x-switch_input" :name="name" ref="input">
  </div>
</template>

<script>
export default {
  name: 'XSwitch',
  data () {
    return {
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String
    },
    inactiveColor: {
      type: String
    },
    name: {
      type: String,
      defualt: ''
    }
  },
  components: {},
  methods: {
    async handleClick () {
      this.$emit('input', !this.value)
      await this.$nextTick()
      this.setColor()
      // 控制checkbox的值,input值同步value值
      this.$refs.input.checked = this.value
    },
    setColor () {
      // 修改开关颜色
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted () {
    this.setColor()
  }
}
</script>

<style lang="scss" scoped>
.x-switch{
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .x-switch_core{
  margin: 0;
  display: inline-block;
  position: relative;
  width: 40px;
  height: 20px;
  border: 1px solid #dcdfe6;
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
  background: #dcdfe6;
  cursor: pointer;
  transition: border-color .3s,background-color .3s;
  vertical-align: middle;
  .x-switch_button{
    position:absolute;
    top: 1px;
    left: 1px;
    border-radius: 100%;
    transition: all .3s;
    width: 16px;
    height: 16px;
    background-color: #fff;
    }
  }
}
// 选中样式
.is-checked {
  .x-switch_core{
    border-color: #409eff;
    background-color: #409eff;
    .x-switch_button {
      transform: translateX(20px);
    }
  }
}
// 隐藏input标签
.x-switch_input{
  position:absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>
