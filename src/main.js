import Vue from 'vue'
import App from './App'
import weui from './weui.css'
import http from './utils/http.js'

Vue.prototype.$http = http;
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/logs/main',
      'pages/index/main',
      'pages/home/main',
      'pages/store_choosegoods/main', // 选货
      'pages/store_account/main', //掌柜个人中心
      'pages/paysuccess/main', //支付成功
      'pages/payfail/main', //支付失败
      'pages/profitlist/main', //收益列表
      'pages/saleorders/main', //销售订单明细
      'pages/saleorderdetail/main', //销售订单详情
      'pages/orders/main', //我的订单
      'pages/orderdetail/main', //我的订单详情
      'pages/storeAccount/main', //店铺信息
      'pages/address_book/main',  //地址本
      '^pages/daily_new/main',     //每日上新
      'pages/product_detail/main',
      'pages/daily_new/main',     //每日上新
      'pages/product_detail/main',  //商品详情
      'pages/shopping_cart/main', //购物车
      'pages/checkout/main', //确认订单
      ],

    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999',
      selectedColor: '#d22222',
      backgroundColor: '#fff',
      borderStyle: 'black',
      list: [{
        pagePath: 'pages/store_choosegoods/main',
        text: '选货',
        iconPath: 'static/assets/choose.png',
        selectedIconPath: 'static/assets/choose-selected.png'
      }, {
        pagePath: 'pages/checkout/main',
        text: '店铺管理',
        iconPath: 'static/assets/store.png',
        selectedIconPath: 'static/assets/store-selected.png'
      },
      {
        pagePath: 'pages/daily_new/main',
        text: '销售明细',
        iconPath: 'static/assets/sales.png',
        selectedIconPath: 'static/assets/sales-selected.png'
      },
      {
        pagePath: 'pages/shopping_cart/main',
        text: '购物车',
        iconPath: 'static/assets/cart.png',
        selectedIconPath: 'static/assets/cart-selected.png'
      },
      {
        pagePath: 'pages/store_account/main',
        text: '个人中心',
        iconPath: 'static/assets/account.png',
        selectedIconPath: 'static/assets/account-selected.png'
      }
    ]
    }
  }
}
