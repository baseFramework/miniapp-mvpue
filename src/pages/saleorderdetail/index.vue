<template>
  <div class="saledetail-page">
      <div class="saledetail-profit">
          <div class="title">预估收益</div>
          <div class="profit">{{item.unit}}{{item.commission}}</div>
      </div>
      <div class="sale-divide"></div>
       <csalebox :boxData="item" type="detail"></csalebox>
       <div class="sale-divide"></div>
       <div class="saledetail-order">
           <div class="order-num">
               <span class="key">订单号</span>
               <div class="value">{{item.orderCode}}</div>
           </div>
            <div class="order-num">
               <span class="key">下单时间</span>
               <div class="value">{{item.createTime}}</div>
           </div>
       </div>
        <div class="sale-divide"></div>
  </div>
</template>

<script>
// Use Vuex
import csalebox from "@/components/c-salebox/c-salebox";
import itemData from "./data";

export default {
  data() {
    return {
      item: itemData
    };
  },
  components: {
    csalebox
  },
  methods: {},
  created() {
    console.log(this.item);
  }
};
</script>
<style>
.saledetail-page {
  height: 100%;
}
.saledetail-profit {
  height: 61px;
  padding: 12px 16px;
}
.saledetail-profit .title {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #666666;
  letter-spacing: 0;
}
.saledetail-profit .profit {
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
.saledetail-order {
  padding: 16px;
}
.saledetail-order .order-num {
  position: relative;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #666666;
  letter-spacing: 0;
  padding-bottom: 8px;
}

.saledetail-order .order-num .key{
    text-align: left;
}
.saledetail-order .order-num .value{
    position: absolute;
    right: 0;
    top: 0;

}
</style>
