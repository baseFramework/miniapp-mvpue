<template>
  <div class="FAQpage">
    <div class="FAQpage-list">
      <div class="FAQpage-listItem" v-for="(item,index) in list" :key="index">
        <div class="FAQpage-listItem-div1">
          <img src="../../../static/assets/circle-o.png" class="FAQpage-listItem-icon"/>
          <span class="FAQpage-listItem-title">{{item.title}}</span>
        </div>
        <div class="FAQpage-listItem-div2"><span class="FAQpage-listItem-content">{{item.content}}</span></div>
        <div class="space-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "f-a-qpage",
    data(){
      return{
        list: [
          {
            title: '如何成为章鱼掌柜店主？',
            content: '注册加入或微信授权登录章鱼掌柜，完成相关信息验证后即可成为章鱼掌柜店主。'
          },
          {
            title: '如何进行分享？',
            content: '在章鱼精选页面获取专属活动或商品，通过分享到微信的方式将商品或活动分享给买家们。'
          },
          {
            title: '如何进行分享？',
            content: '在章鱼精选页面获取专属活动或商品，通过分享到微信的方式将商品或活动分享给买家们。'
          },
          {
            title: '如何进行分享？',
            content: '在章鱼精选页面获取专属活动或商品，通过分享到微信的方式将商品或活动分享给买家们。'
          }],
      };
    },

  }
</script>

<style scoped>
  .FAQpage {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #ffffff;
  }
  .FAQpage-list {

  }
  .FAQpage-listItem {
    width: 100%;
    height: 122px;
    background-color: #ffffff;
  }
  .FAQpage-listItem-div1{
    height: 56px;
    display: flex;
    flex-direction: row;
  }
  .FAQpage-listItem-div2{
    height: 64px;
    margin-left: 38px;
    margin-right: 16px;
    line-height: 20px;
  }
  .FAQpage-listItem-content{
    color: #333333;
    font-size: 14px;
  }
  .space-line{
    height: 2px;
    margin-left: 16px;
    margin-right: 16px;
    background-color: #e5e5e5;
  }
  .FAQpage-listItem-icon{
    height: 10px;
    width: 10px;
    margin-top: 30px;
    margin-left: 16px;
  }
  .FAQpage-listItem-title{
    font-size: 16px;
    font-family: 'PingFangSC-Semibold';
    color: #333333;
    margin-left: 12px;
    margin-top: 25px;
  }
</style>
