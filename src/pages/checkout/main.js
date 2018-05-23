import Vue from 'vue'
import App from './checkout'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '确认订单'
  }
}
