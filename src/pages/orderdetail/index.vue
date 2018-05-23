<template>
  <div class="orderdetail-page">
       <div class="orderdetail-profit">
          <div class="name">订单状态</div>
          <div class="profit">{{item.busdesc}}</div>
      </div>
      <div class="sale-divide"></div>
      <div class="orderdetail-ship">
          <div class="name">收货信息</div>
           <div class="content">{{item.address.linkman}}</div>
            <div class="content">{{item.address.phone}}</div>
            <div class="content">{{item.address.address1}}</div>
      </div>
      <div class="sale-divide"></div>
      <div class="orderdetail-box">
          <div class="name">商品信息</div>
          <cproduct :list="item.productInfo" :unit="item.unit"></cproduct>
      </div>
      <div class="orderdetail-list-wrap">
          <div class="list">
              <div class="key">商品总价</div>
              <div class="value">{{item.unit}}{{item.price}}</div>
          </div>
           <div class="list">
              <div class="key">运费</div>
              <div class="value">免邮</div>
          </div>
            <div class="list">
              <div class="key">优惠</div>
              <div class="value">￥0.00</div>
          </div>
            <div class="list">
              <div class="key big">订单总价</div>
              <div class="value huge">{{item.unit}}{{item.price}}</div>
          </div>
      </div>
       <div class="sale-divide"></div>
        <div class="orderdetail-list-wrap buttom-wrap">
           <div class="list">
              <div class="key">订单号</div>
              <div class="value">{{item.orderCode}}</div>
          </div>
          <div class="list">
              <div class="key">下单时间</div>
              <div class="value">{{item.createTime}}</div>
          </div>
          <div class="list">
              <div class="key">支付方式</div>
              <div class="value">微信支付</div>
          </div>
        </div>
        <div class="sale-divide"></div>
  </div>
</template>

<script>
// Use Vuex
import item from "./data";
import cproduct from "@/components/c-productorder/c-productorder";

export default {
  data() {
    return {
      item: item
    };
  },
  components: {
    cproduct
  },
  methods: {},
  created() {}
};
</script>
<style>
.orderdetail-page {
  height: 100%;
}
.orderdetail-profit {
  height: 61px;
  padding: 16px;
}
.orderdetail-profit .name {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #666666;
  letter-spacing: 0;
}
.orderdetail-profit .profit {
  font-family: HelveticaNeue-Bold;
  font-size: 26px;
  color: #cd0e00;
  letter-spacing: 0;
  padding-top: 6px;
}
.sale-divide {
  width: 100%;
  height: 10px;
  background-color: #f2f2f2;
}
.orderdetail-order {
  padding: 16px;
}
.orderdetail-order .order-num {
  position: relative;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #666666;
  letter-spacing: 0;
  padding-bottom: 8px;
}

.orderdetail-order .order-num .key {
  text-align: left;
}
.orderdetail-order .order-num .value {
  position: absolute;
  right: 0;
  top: 0;
}
.orderdetail-ship {
  padding: 16px;
}

.orderdetail-ship .name {
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #333333;
  letter-spacing: 0;
  text-align: left;
  padding-bottom: 12px;
}

.orderdetail-ship .content {
  font-family: HelveticaNeue;
  font-size: 14px;
  color: #666;
  letter-spacing: 0;
  padding-bottom: 8px;
  width: 343px;
  letter-spacing: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.orderdetail-box {
  padding: 16px 0;
}

.orderdetail-box .name {
  padding-bottom: 12px;
  margin: 0 16px;
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #333333;
  letter-spacing: 0;
}
.orderdetail-list-wrap {
  padding: 0 16px 16px 16px;
}
.orderdetail-page .buttom-wrap{
  padding:16px;
}

.orderdetail-list-wrap .list {
  position: relative;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #666666;
  letter-spacing: 0;
  padding-bottom: 6px;
}

.orderdetail-list-wrap .list .key {
  text-align: left;
}
.orderdetail-list-wrap .list .value {
  position: absolute;
  right: 0;
  top: 0;
}
.orderdetail-list-wrap .list .big {
  font-size: 14px;
}
.orderdetail-list-wrap .list .huge {
  font-size: 18px;
  color: #333333;
}
</style>
