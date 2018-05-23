import Vue from 'vue'
import App from './storeName'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '店铺名称'
  }
}
