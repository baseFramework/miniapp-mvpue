<template>
  <div class="profitlist-page">
      <!-- 切换tab -->
      <div class="weui-flex profitwrap">
        <div class="weui-flex__item">
          <div class="placeholder">
              <span  v-if="selected == 'day'" class="tab-item selected" @click="selectSales('day')">今日</span>
              <span  v-if="selected != 'day'" class="tab-item" @click="selectSales('day')">今日</span>
          </div>
        </div>
        <div class="weui-flex__item">
          <div class="placeholder">
              <span v-if="selected == 'week'" class="tab-item selected" @click="selectSales('week')">本周</span>
              <span v-if="selected != 'week'" class="tab-item" @click="selectSales('week')">本周</span>
          </div>
        </div>
        <div class="weui-flex__item">
          <div class="placeholder">
              <span v-if="selected == 'month'" class="tab-item selected" @click="selectSales('month')">本月</span>
              <span v-if="selected != 'month'" class="tab-item" @click="selectSales('month')">本月</span>
          </div>
        </div>
        <div class="weui-flex__item">
          <div class="placeholder">
               <span v-if="selected == 'all'" class="tab-item selected" @click="selectSales('all')">总</span>
               <span v-if="selected != 'all'" class="tab-item" @click="selectSales('all')">总</span>
          </div>
        </div>
      </div>

      <!-- 收益展示部分 -->
      <div class="profit-sale">
          <div class="stitle">今日收益 $</div>
          <div class="mount">756.38</div>
      </div>
      <div class="profit-divide"></div>

      <!-- 销售列表 -->
      <div class="profit-list">
          <div class="profit-item-wrap">
              <div class="item-line1">
                  <div class="item-left">收益</div>
                  <div class="item-right">+17.52</div>
              </div>
              <div class="item-line2">
                  <div class="item-left">2018-4-11 15:32</div>
                  <div class="item-right">59.99</div>
              </div>
              <div class="individe"></div>
          </div>
          <div class="profit-item-wrap">
              <div class="item-line1">
                  <div class="item-left">收益</div>
                  <div class="item-right">+17.52</div>
              </div>
              <div class="item-line2">
                  <div class="item-left">2018-4-11 15:32</div>
                  <div class="item-right">59.99</div>
              </div>
              <div class="individe"></div>
          </div>
          <div class="profit-item-wrap">
              <div class="item-line1">
                  <div class="item-left">收益</div>
                  <div class="item-right">+17.52</div>
              </div>
              <div class="item-line2">
                  <div class="item-left">2018-4-11 15:32</div>
                  <div class="item-right">59.99</div>
              </div>
              <div class="individe"></div>
          </div>
          <div class="profit-item-wrap">
              <div class="item-line1">
                  <div class="item-left">收益</div>
                  <div class="item-right">+17.52</div>
              </div>
              <div class="item-line2">
                  <div class="item-left">2018-4-11 15:32</div>
                  <div class="item-right">59.99</div>
              </div>
              <div class="individe"></div>
          </div>
          <div class="profit-item-wrap">
              <div class="item-line1">
                  <div class="item-left">收益</div>
                  <div class="item-right">+17.52</div>
              </div>
              <div class="item-line2">
                  <div class="item-left">2018-4-11 15:32</div>
                  <div class="item-right">59.99</div>
              </div>
              <div class="individe"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "day"
    };
  },
  components: {},
  methods: {
    selectSales(type) {
      this.selected = type;
    }
  }
};
</script>
<style>
.profitwrap {
  padding: 24px;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
}
.profitwrap .tab-item {
  width: 74px;
  height: 30px;
  border-radius: 16px;
  display: block;
  line-height: 30px;
}
.profitwrap .selected {
  background: #d53124;
  color: #fff;
}
.profit-sale .stitle {
  margin-top: 28px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
  text-align: center;
  width: 100%;
}
.profit-sale .mount {
  font-family: HelveticaNeue-Medium;
  font-size: 36px;
  color: #cd0e00;
  text-align: center;
  margin-top: 3px;
}
.profit-divide {
  width: 100%;
  height: 2px;
  background-color: #e5e5e5;
  margin-top: 26px;
}
.profit-item-wrap {
  padding: 0 16px;
  height: 69px;
}
.item-line1 {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #333333;
  text-align: center;
  margin-top: 16px;
  position: relative;
}
.item-left {
  position: absolute;
  left: 16px;
}
.item-right {
  position: absolute;
  right: 16px;
}

.item-line2 {
  font-family: HelveticaNeue;
  font-size: 12px;
  color: #999999;
  padding-top: 23px;
  position: relative;
}

.profit-item-wrap .individe{
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
  padding-left: 16px;
  margin-top: 30px;
}
</style>
