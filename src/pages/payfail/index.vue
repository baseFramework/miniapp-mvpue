<template>
  <div class="paysuccess-page">
    <image :src="success" class="payfail-logo" />
    <div class="paysuccess-title">对不起，支付失败，请重新支付</div>
    <div class="pay-btn-group">
        <button class="weui-btn red" type="warn">重新支付</button>
        <button class="weui-btn normal" type="primary">查看订单</button>
    </div>
  </div>
</template>

<script>
// Use Vuex

export default {
  data() {
    return {
      success: "./../../static/assets/payfail.png"
    };
  },
  components: {},
  methods: {}
};
</script>
<style>
.payfail-logo {
  width: 120px;
  height: 100px;
  position: absolute;
  top: 138px;
  left: 50%;
  margin-left: -60px;
}
.paysuccess-title {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #666666;
  letter-spacing: 0;
  text-align: center;
  line-height: 20px;
  margin-top: 264px;
}
.pay-btn-group {
  margin: 140px 0 0px 0;
  padding: 0 39px;
}
.pay-btn-group .weui-btn {
  height: 49px;
  border-radius: 100px;
  text-align: center;
  line-height: 49px;
}
.pay-btn-group .red {
  background: #cd0e00;
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: -0.34px;
}

.pay-btn-group .normal {
  background: #fff;
  border: 1px solid #cccccc;
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #666666;
  letter-spacing: -0.34px;
}
</style>
