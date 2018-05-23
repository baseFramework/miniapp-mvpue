import Vue from 'vue'
import App from './storeNotice'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    navigationBarTitleText: '店铺公告'
  }
}
