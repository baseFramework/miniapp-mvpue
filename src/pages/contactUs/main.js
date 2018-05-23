import Vue from 'vue'
import App from './contactUs'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '客服中心'
  }
}
