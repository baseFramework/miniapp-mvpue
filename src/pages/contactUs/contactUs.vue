<template>
  <div class="contactUs-bg">
    <div class="contactUs-div" v-on:click="tapPhone">
      <img src="../../../static/assets/Phone.png" class="contactUs-pic"/>
      <div class="contactUs-content-div">
        <span class="contactUs-content-title">客服电话</span>
        <span class="contactUs-content-detail">1-209-813-2863</span>
        <span class="contactUs-content-tip">周一至周五，下午6点到晚上12点</span>
      </div>
      <img src="../../../static/assets/Indicato.png" class="contactUs-arrow"/>
    </div>
    <div class="space-line"></div>
    <div class="contactUs-div1" v-on:click="tapEmail">
      <img src="../../../static/assets/Email.png" class="contactUs-pic"/>
      <div class="contactUs-content-div">
        <span class="contactUs-content-title">客服邮箱</span>
        <span class="contactUs-content-detail">care@xxxx.com</span>
      </div>
      <img src="../../../static/assets/Indicato.png" class="contactUs-arrow"/>
    </div>
    <div class="contactUs-div" v-on:click="tapWechat">
      <img src="../../../static/assets/Wechat.png" class="contactUs-pic"/>
      <div class="contactUs-content-div">
        <span class="contactUs-content-title">微信公众号</span>
        <span class="contactUs-content-detail">@海外专属</span>
      </div>
      <img src="../../../static/assets/Indicato.png" class="contactUs-arrow"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "contact-us",
    data() {
      return {};
    },
    methods: {
      tapPhone(){
        console.log('phone');
      },
      tapEmail(){
        console.log('email')
      },
      tapWechat(){
        console.log('Wechat')
      }
    }
  }
</script>

<style scoped>
  .contactUs-bg {
    width: 100%;
    position: absolute;
    height: 100%;
    background-color: #f2f2f2;
  }

  .contactUs-div {
    margin-top: 10px;
    height: 99px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .contactUs-div1 {
    height: 99px;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .contactUs-pic {
    height: 32px;
    width: 32px;
    margin-left: 20px;
  }

  .space-line {
    height: 1px;
    background-color: #e5e5e5;
  }

  .contactUs-content-div {
    height: 99px;
    margin-left: 25px;
    width: 272px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .contactUs-content-title {
    /*margin-top: 26px;*/
    font-size: 18px;
    color: #333333;
  }

  .contactUs-content-detail {
    font-size: 14px;
    color: #333333;
  }

  .contactUs-content-tip {
    font-size: 12px;
    color: #999999;
  }

  .contactUs-arrow {
    height: 14px;
    width: 14px;
  }
</style>
