import Vue from 'vue'
import App from './storeEmail'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '店铺邮箱'
  }
}
