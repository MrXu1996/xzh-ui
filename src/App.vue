<template>
  <div id="app">
    <!-- <div>
      <x-button >按钮1</x-button>
      <x-button type="primary">按钮2</x-button>
      <x-button type="danger">按钮3</x-button>
      <x-button type="info">按钮3</x-button>
      <x-button type="warning">按钮3</x-button>
      <x-button disabled type="success">按钮3</x-button>
    </div>
    <div>
      <x-button plain>按钮1</x-button>
      <x-button plain type="primary">按钮2</x-button>
      <x-button plain type="danger">按钮3</x-button>
      <x-button plain type="info">按钮3</x-button>
      <x-button plain type="warning">按钮3</x-button>
      <x-button disabled plain type="success">按钮3</x-button>
    </div>
    <div>
      <x-button round>按钮1</x-button>
      <x-button round type="primary">按钮2</x-button>
      <x-button round type="danger">按钮3</x-button>
      <x-button round type="info">按钮3</x-button>
      <x-button round type="warning">按钮3</x-button>
      <x-button disabled round type="success">按钮3</x-button>
    </div>
    <div>
      <x-button circle>按</x-button>
      <x-button circle type="primary">啊</x-button>
      <x-button circle type="danger">啊</x-button>
      <x-button circle type="info">啊</x-button>
      <x-button circle type="warning">啊</x-button>
      <x-button disabled circle type="success">啊</x-button>
    </div>
    <div>
      <x-button icon="x-icon-delete" circle></x-button>
      <x-button icon="x-icon-delete" circle type="primary"></x-button>
      <x-button icon="x-icon-delete" circle type="danger"></x-button>
      <x-button icon="x-icon-delete" circle type="info"></x-button>
      <x-button icon="x-icon-delete" circle type="warning"></x-button>
      <x-button disabled icon="x-icon-delete" circle type="success"></x-button>
    </div>
    <div>
      <x-button disabled>111</x-button>
    </div> -->
    <!-- <x-button @click="visible=!visible">按钮</x-button>
    <x-dialog title="温馨提示" width='80%' top='50px' :visible.sync='visible'>
      <template slot=title><H3>标题</H3></template>
      <span slot="footer" class="dialog-footer">
        <x-button >取 消</x-button>
        <x-button type="primary" >确 定</x-button>
      </span>
    </x-dialog> -->
    <!-- <div style="width:180px">
      <x-input placeholder="请输入用户名"  v-model="username"></x-input>
      <x-input placeholder="请输入用户名" clearable showPassword  v-model="username"></x-input>
      <x-input placeholder="请输入用户名" type='password' clearable showPassword  v-model="username"></x-input>
    </div> -->
    <!-- <x-switch v-model="active" active-color='red' inactive-color="yellow"></x-switch> -->
    <!-- <x-radio v-model="gender" label="0">男</x-radio>
    <x-radio v-model="gender" label="1">女</x-radio>
    <x-radio-group v-model="gender">
      <x-radio label="0">男</x-radio>
      <x-radio label="1">女</x-radio>
    </x-radio-group> -->
    <!-- <x-checkbox v-model="checked">是否选择</x-checkbox>
    <x-checkbox-group v-model="hobby">
      <x-checkbox label='吃饭'></x-checkbox>
      <x-checkbox label='睡觉'></x-checkbox>
      <x-checkbox label='打游戏'></x-checkbox>
    </x-checkbox-group> -->
    <!-- <x-form :model="form" label-width='100px'>
      <x-form-item label='用户名'>
        <x-input placeholder='请输入用户名' v-model="form.username"></x-input>
      </x-form-item>
      <x-form-item label='状态'>
        <x-switch v-model="form.switch"></x-switch>
      </x-form-item>
    </x-form> -->
    <!-- <x-rate @change="getRate"></x-rate> -->
    <x-image :src='url' style="width: 100px"></x-image>
    <div v-for="item in srcList" :key="item">
      <x-image :src= 'item' style="width: 100px"></x-image>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      visible: false,
      username: 'xzh',
      active: false,
      gender: '1',
      checked: true,
      // hobby: ['吃饭', '睡觉', '打游戏'],
      hobby: [],
      form: {
        username: '',
        switch: false
      },
      url: 'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ]
    }
  },
  methods: {
    getRate (num) {
      console.log(num)
    }
  }
}
</script>

<style lang="scss">
</style>
