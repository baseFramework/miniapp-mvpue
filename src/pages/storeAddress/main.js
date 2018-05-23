import Vue from 'vue'
import App from './storeAddress'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '店铺地址'
  }
}