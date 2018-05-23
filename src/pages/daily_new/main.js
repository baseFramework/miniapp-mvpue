import Vue from 'vue'
import App from './daily_new'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '每日上新'
  }
}
