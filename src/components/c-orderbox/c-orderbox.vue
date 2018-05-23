<template>
    <navigator  url="../../pages/orderdetail/main" class="order-box">
        <div class="order-box-top">
            <span class="title">{{boxData.createTime}}</span>
            <span class="state">{{boxData.busDesc}}</span>
        </div>
        <div class="order-box-content">
            <cproduct :list="boxData.productInfo" :unit="boxData.unit"></cproduct>
        </div>
        <div class="order-box-bottom">
            <div class="title">共{{boxData.productCount}}件商品  合计 <span class="totalmount">{{boxData.unit}}{{boxData.price}}</span></div>
            <div v-if="boxData.buscode == 1" class="btn-line">
                <div class="pay-btn">付款</div>
            </div>
        </div>
      </navigator>
</template>

<script>
import cproduct from "@/components/c-productorder/c-productorder";
export default {
  props: ["boxData"],
  created() {
    console.log(this.boxData);
  },
  components: {
    cproduct
  }
};
</script>

<style>
.order-box {
  background: #fff;
}
.order-box-top {
  height: 54px;
  position: relative;
  padding-left: 16px;
}

.order-box-top .img {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 16px;
  top: 12px;
  border-radius: 50%;
}

.order-box-top .title {
  font-family: HelveticaNeue;
  font-size: 14px;
  color: #333333;
  letter-spacing: 0;
  height: 54px;
  line-height: 54px;
}
.order-box-top .state {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #cd0e00;
  letter-spacing: 0;
  position: absolute;
  right: 16px;
  top: 16px;
}

.order-product-list .item {
  background-color: #f8f8f8;
  height: 108px;
  position: relative;
  padding-left: 95px;
  margin-bottom: 1px;
}

.order-product-list .item .product-img {
  position: absolute;
  left: 16px;
  top: 12px;
  width: 66px;
  height: 83px;
}

.order-product-list .item .title {
  padding-top: 16px;
  width: 200px;
  font-family: HelveticaNeue;
  font-size: 12px;
  color: #333333;
  letter-spacing: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.order-product-list .item .size {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
  letter-spacing: 0;
  padding-top: 12px;
}
.order-product-list .item .price {
  font-family: HelveticaNeue;
  font-size: 12px;
  color: #333333;
  letter-spacing: 0;
  bottom: 9px;
  position: absolute;
  left: 95px;
}
.order-product-list .item .number {
  font-family: HelveticaNeue;
  font-size: 12px;
  color: #333333;
  letter-spacing: 0;
  position: absolute;
  top: 47px;
  right: 15px;
}

.order-box-bottom {
  background-color: #fff;
  padding: 12px 16px 10px 0px;
}

.order-box-bottom .title {
  width: 100%;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #666666;
  letter-spacing: 0;
  text-align: right;
}
.order-box-bottom .total {
  width: 100%;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #666666;
  letter-spacing: 0;
  text-align: right;
  padding-top: 8px;
}

.order-box-bottom .total .money {
  font-family: HelveticaNeue-Bold;
  font-size: 18px;
  color: #cd0e00;
  letter-spacing: 0;
  text-align: right;
}
.order-box-bottom .totalmount {
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #333333;
  letter-spacing: 0;
  text-align: right;
}
.order-box-bottom .btn-line {
  height: 30px;
  padding: 12px 0 16px;
  position: relative;
}

.order-box-bottom .btn-line .pay-btn {
  border: 1px solid #cd0e00;
  border-radius: 100px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #cd0e00;
  letter-spacing: 0;
  position: absolute;
  right: 0;
  top: 16px;
  width: 86px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
</style>
