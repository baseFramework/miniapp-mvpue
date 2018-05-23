<template>
  <div>
    <div class="new_product_card_bg" :class="setClass">
      <img :src="listItem.imgUrl"/>
      <p class="new_product_card_price">${{listItem.price}}</p>
      <p class="new_product_card_salePrice">赚 ${{listItem.salePrice}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "new-production-card",
    props: ['setClass', 'listItem'],
    data() {
      return {};
    },
    methods: {}
  }
</script>

<style>
  .new_product_card_bg {
    height: 242px;
    width: 140px;
  }

  .new_product_card_bg img {
    width: 140px;
    height: 176px;
    border-radius: 6px;
    background-color: #ffffff;
  }

  .new_product_card_price{
    font-size: 14px;
    color: #1d1d1d;
    font-family: HelveticaNeue;
    margin-top: 0px;
    line-height: 16px;
  }

  .new_product_card_salePrice{
    font-size: 14px;
    font-family: PingFangSC-Semibold;
    color: #CD0E00;
    line-height: 20px;
  }

</style>
