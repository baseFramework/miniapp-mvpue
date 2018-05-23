<template>
  <div>
    <div class="daily_bargain_card_bg">
      <img :src="listItem.imgUrl" class="daily_bargain_card_img"/>
      <div class="daily_bargain_card_rightDiv">
        <p>{{listItem.title}}</p>
        <span class="daily_bargain_card_price">${{listItem.price}}</span>
        <div>尝鲜价</div>
        <span class="daily_bargain_card_salePrice">赚 ${{listItem.salePrice}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "daily-bargain-card",
    props: ['listItem',],
    data() {
      return {};
    },
    mounted() {

    }
  }
</script>

<style>
  .daily_bargain_card_bg {
    height: 183px;
    width: 342px;
    background-color: #ffffff;
    margin-bottom: 16px;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0px 6px 10px 0px #bbbbbb;
  }

  .daily_bargain_card_img {
    height: 151px;
    width: 120px;
    margin-left: 16px;
    background-color: red;
    border-radius: 6px;
  }

  .daily_bargain_card_rightDiv {
    height: 151px;
    width: 170px;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    /*justify-content: space-between;*/
  }

  .daily_bargain_card_rightDiv p {
    color: #666666;
    font-size: 14px;
    line-height: 20px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .daily_bargain_card_price{
    margin-top: 12px;
    font-size: 18px;
    color: #1d1d1d;
    height: 21px;
  }

  .daily_bargain_card_rightDiv div{
    height: 21px;
    width: 54px;
    border-style: solid;
    color: #CD0E00 ;
    border-width: 1px;
    font-size: 12px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .daily_bargain_card_salePrice{
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #CD0E00;
    margin-top: 10px;
  }
</style>
