import Vue from 'vue'
import App from './App.vue'

import XUI from './packages'
// import { Button } from './packages'

Vue.config.productionTip = false

Vue.use(XUI)

// Vue.component(XButton.name, XButton)
// Vue.component(XDialog.name, XDialog)
// Vue.component(XInput.name, XInput)
// Vue.component(XSwitch.name, XSwitch)
// Vue.component(XRadio.name, XRadio)
// Vue.component(XRadioGroup.name, XRadioGroup)
// Vue.component(XCheckbox.name, XCheckbox)
// Vue.component(XCheckboxGroup.name, XCheckboxGroup)
// Vue.component(XForm.name, XForm)
// Vue.component(XFormItem.name, XFormItem)

new Vue({
  render: h => h(App)
}).$mount('#app')
