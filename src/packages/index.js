import Button from './button'
import Checkbox from './checkbox'
import CheckboxGroup from './checkboxgroup'
import Dialog from './dialog'
import Form from './form'
import FormItem from './formitem'
import Input from './input'
import Image from './image'
import Radio from './radio'
import RadioGroup from './radiogroup'
import Rate from './rate'
import Switch from './switch'
import './fonts/font.scss'
// 存储组件列表
const components = [
  Button,
  Checkbox,
  CheckboxGroup,
  Dialog,
  Form,
  FormItem,
  Input,
  Image,
  Radio,
  RadioGroup,
  Rate,
  Switch
]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  Button,
  Checkbox,
  CheckboxGroup,
  Dialog,
  Form,
  FormItem,
  Input,
  Image,
  Radio,
  RadioGroup,
  Rate,
  Switch
}
export default { install }
