<template>
  <div class="checkout">
    <div class="checkout-address">
      <img :src="icon.Indicato" class="indicato"/>
      <div class="checkoutcell" v-if="address">
        <p class="addressName">{{address.name}}</p>
        <p class="addressCode">{{address.code}}</p>
        <p class="addressDetail">{{address.addressDetail}}</p>
      </div>
      <div class="checkoutcell" style="align-items: center;flex-direction: row;justify-content: flex-start"
           v-if="!address">
        <img :src="icon.address" style="height: 20px;width: 20px"/>
        <p style="font-size: 14px;color: #999999;margin-left: 12px">请输入收货地址</p>
      </div>
    </div>

    <div class="checkout-product">
      <div class="celltitle">商品信息</div>
      <cproduct :list="productInfo"></cproduct>
      <div class="info">
        <div class="lineType"><p>商品总价</p><p>$298.00</p></div>
        <div class="lineType"><p>运费</p><p style="color:#333333">免邮</p></div>
        <div class="lineType"><p style="font-size: 14px">订单总价</p><p style="font-size: 18px;font-family:HelveticaNeue-Bold;color: #333333">$298.00</p></div>
      </div>
    </div>

    <div class="checkout-type">
      <p style="font-size: 14px;color: #333333;font-family: PingFangSC-Semibold;margin-top: 15px">支付方式</p>
      <span @click="tapWxPay">
        <img class="selectedIcon" :src="icon.selected" v-if="payType==0"/>
        <img class="selectedIcon" :src="icon.unselected" v-if="payType!=0"/>
        <img class="payIcon" :src="icon.paypal"/>
      </span>
      <span @click="tapPayPalPay">
        <img class="selectedIcon" :src="icon.selected" v-if="payType==1"/>
        <img class="selectedIcon" :src="icon.unselected" v-if="payType!=1"/>
        <img class="payIcon" :src="icon.paypal"/>
      </span>
    </div>

    <div class="checkout-pay">支付</div>
  </div>
</template>

<script>
  import cproduct from "@/components/c-productorder/c-productorder";

  export default {
    name: "checkout",
    components: {cproduct},
    data() {
      return {
        icon: {
          Indicato: './../../static/assets/Indicato.png',
          address: './../../static/assets/address.png',
          paypal:'./../../static/assets/Paypal.png',
          selected:'./../../static/assets/selected.png',
          unselected:'./../../static/assets/unselected.png'
        },
        address: {
          name: 'Jason Chan',
          code: '8617076617086',
          addressDetail: '356 Kautzer Common Suite 608, Sierra, AZ 85635 United States',
        },
        productInfo: [
          {
            "productUrl": "https://us.vip.com/n-color-n-size_pV0001967401",
            "skaAttrs": [{
              "key": "颜色",
              "featureId": "53892",
              "name": "绿色"
            }],
            "productName": "蕾丝花边大摆荷叶边雪纺连衣裙",
            "spuId": "V00019674",
            "groupPrice": 110,
            "categoryName": "时尚",
            "skuId": "V0001967401001",
            "marketPrice": 999,
            "brandName": "阿奇米朵",
            "imgUrl": "https://a2.vimage1.com/upload/merchandise/pdcvis/2017/07/07/8/a1f291b9-a355-493b-a58e-430ffc0e2d8f_218x274_70.jpg",
            "skuAttrs": [{
              "featureId": "55591",
              "key": "Size",
              "name": "M"
            }],
            "skaId": "V0001967401",
            "groupPriceCent": 110,
            "sellPriceCent": 600,
            "quantity": 2,
            "sellPrice": 220
          },
          {
            "productUrl": "https://us.vip.com/n-color-n-size_pV0001967401",
            "skaAttrs": [{
              "key": "颜色",
              "featureId": "53892",
              "name": "绿色"
            }],
            "productName": "蕾丝花边大摆荷叶边雪纺连衣裙",
            "spuId": "V00019674",
            "groupPrice": 110,
            "categoryName": "时尚",
            "skuId": "V0001967401001",
            "marketPrice": 999,
            "brandName": "阿奇米朵",
            "imgUrl": "https://a2.vimage1.com/upload/merchandise/pdcvis/2017/07/07/8/a1f291b9-a355-493b-a58e-430ffc0e2d8f_218x274_70.jpg",
            "skuAttrs": [{
              "featureId": "55591",
              "key": "Size",
              "name": "M"
            }],
            "skaId": "V0001967401",
            "groupPriceCent": 110,
            "sellPriceCent": 600,
            "quantity": 2,
            "sellPrice": 220
          }],
        payType:'0',
      }
    },
    methods:{
      tapWxPay(){
        this.payType = 0;
      },
      tapPayPalPay(){
        this.payType = 1;
      }
    }
  }

</script>

<style>
  page {
    background-color: #f2f2f2;
  }

  .checkout-address {
    height: 113px;
    width: 100%;
    background-color: #ffffff;
    margin-top: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .checkout-address .indicato {
    height: 20px;
    width: 15px;
    position: absolute;
    right: 20px;
  }

  .checkout-address .checkoutcell {
    margin-left: 16px;
    width: 310px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .checkout-address .checkoutcell .addressName {
    font-size: 14px;
    color: #333333;
    font-family: HelveticaNeue-Bold;

  }

  .checkout-address .checkoutcell .addressCode {
    font-size: 14px;
    color: #666666;
    font-family: HelveticaNeue;
  }

  .checkout-address .checkoutcell .addressDetail {
    font-size: 14px;
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 16px;
    font-family: HelveticaNeue;
  }

  .checkout-product {
    background-color: #fff;
  }

  .checkout-product .celltitle {
    width: 359px;
    height: 48px;
    background-color: white;
    margin-top: 10px;
    padding-left: 16px;
    position: relative;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #333333;
    font-family: PingFangSC-Semibold;
  }

  .checkout-product .info {
    width: 359px;
    padding-top: 15px;
    padding-bottom: 15px;
    height: 74px;
    background-color: white;
    padding-left: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 14px;
    color: #333333;
    font-family: PingFangSC-Semibold;
  }

  .checkout-product .info .lineType {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 343px;
    height: 20px;
    font-size: 12px;
    color: #666666;
  }

  .checkout-type{
    height: 146px;
    padding-left: 16px;
    width: 359px;
    background-color: white;
    margin-top: 10px;
    margin-bottom: 49px;
    display: flex;
    flex-direction: column;

  }

  .checkout-pay{
    width: 100%;
    height: 49px;
    background-color: #CD0E00;
    position: fixed;
    bottom: 0px;
    font-size: 14px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .checkout-type .payIcon{
    width: 120px;
    height: 28px;
    margin-top: 18px;
    margin-left: 15px;
  }

  .checkout-type .selectedIcon{
    width: 20px;
    height: 20px;
    margin-top: 20px;
  }

  .checkout-type span{
    display: flex;
    flex-direction: row;
  }

</style>
