<template>
  <div class="store-account-wrap">
          <div url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
            <div class="weui-flex">
                <div class="store-placeholder placeholder">
                  <image class="store-avator" :src="userInfo.avatarUrl" />
                  </div>
                <div class="weui-flex__item">
                  <div class="store-placeholder placeholder">爱吃奇异果</div>
                </div>
            </div>
          </div>
          <div class="personal-sell-section">
            <div class="personal-sale-wrap">
              <div class="weui-flex">
                <div class="weui-flex__item">
                   <div class="placeholder">
                      <span v-if="selected == 'day'" class="tab-item selected" @click="selectSales('day')">今天</span>
                      <span v-if="selected != 'day'" class="tab-item" @click="selectSales('day')">今天</span>
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
                      <span v-if="selected == 'month'" class="tab-item selected"  @click="selectSales('month')">本月</span>
                      <span v-if="selected != 'month'" class="tab-item"  @click="selectSales('month')">本月</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="personal-sm-title">今日收益 ( {{accountInfo.saledata.total.unit}} )</div>

            <div class="personal-get-mounts">
              {{saleAmount}}
            </div>
            <ul class="personal-sell-ul">
                <li>
                    <div class="personal-mount-sm">总订单数</div>
                    <div class="personal-mount-num">0</div>
                </li>
                <li>
                    <div class="personal-mount-sm">总销售额</div>
                    <div class="personal-mount-num">0</div>
                </li>
            </ul>
        </div>
        <div class="person-list">
          <navigator url="../../pages/profitlist/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
            <div class="weui-cell__bd person-title">收益明细</div>
            <div class="weui-cell__ft weui-cell__ft_in-access"></div>
          </navigator>
        </div>
        <div class="line-split"></div>
        <div class="person-list my-orders">
            <navigator url="../../pages/orders/main" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
              <div class="weui-cell__bd person-title">我的订单</div>
              <div class="weui-cell__ft person-desc">全部订单</div>
              <div class="weui-cell__ft weui-cell__ft_in-access"></div>
            </navigator>
            <div class="weui-flex">
              <div class="weui-flex__item">
                <navigator url="" >
                    <div class="placeholder">
                      <image class="order-item" :src="icons.paying" />
                      <div class="placeholder order-item-desc">待付款</div>
                    </div>
                </navigator>
              </div>
              <div class="weui-flex__item">
              <navigator url="" >
                    <image class="order-item" :src="icons.pending" />
                    <div class="placeholder order-item-desc">待发货</div>
                </navigator>
              </div>
              <div class="weui-flex__item">
              <navigator url="" >
                    <image class="order-item" :src="icons.shipping" />
                    <div class="placeholder order-item-desc">待收货</div>
                </navigator>
              </div>
              <div class="weui-flex__item">
                <navigator url="" >
                    <image class="order-item" :src="icons.refunding" />
                    <div class="placeholder order-item-desc">退货退款</div>
                </navigator>
              </div>
            </div>
        </div>
        <div class="line-split"></div>
        <div class="person-list my-service">
           <div class="weui-cell weui-cell_access" hover-class="weui-cell_active">
              <div class="weui-cell__bd person-title">我的服务</div>
            </div>
            <div class="weui-flex">
              <div class="weui-flex__item">
                <navigator url="" >
                    <div class="placeholder">
                      <image class="order-item" :src="icons.task" />
                      <div class="placeholder order-item-desc">每日任务</div>
                    </div>
                </navigator>
              </div>
              <div class="weui-flex__item">
              <navigator url="../address_book/main" >
                    <image class="order-item" :src="icons.location" />
                    <div class="placeholder order-item-desc" >地址管理</div>
                </navigator>
              </div>
              <div class="weui-flex__item">
              <navigator url="../FAQpage/main" >
                    <image class="order-item" :src="icons.question" />
                    <div class="placeholder order-item-desc">常见问题</div>
                </navigator>
              </div>
              <div class="weui-flex__item">
                <navigator url="../contactUs/main" >
                    <image class="order-item" :src="icons.helpdesk" />
                    <div class="placeholder order-item-desc">客服中心</div>
                </navigator>
              </div>
            </div>
        </div>
        <div class="line-split"></div>
        <div class="person-list about-us">
           <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
              <div class="weui-cell__bd person-title">关于章鱼掌柜</div>
              <div class="weui-cell__ft weui-cell__ft_in-access"></div>
            </navigator>
        </div>
        <div class="line-split"></div>
</div>
</template>
<script>
// Use Vuex
export default {
  components: {},
  data() {
    return {
      icons: {
        pending: "./../../static/assets/pending.png",
        paying: "./../../static/assets/paying.png",
        shipping: "./../../static/assets/shipping.png",
        refunding: "./../../static/assets/refunding.png",
        task: "./../../static/assets/task.png",
        location: "./../../static/assets/location.png",
        question: "./../../static/assets/question.png",
        helpdesk: "./../../static/assets/helpdesk.png"
      },
      userInfo: {},
      saleAmount: 0,
      selected: "day",
      accountInfo: {
        headimgurl:
          "https://avatars2.githubusercontent.com/u/5243522?s=460&v=4",
        email: "ro87630872@126.com",
        saledata: {
          total: {
            orders: 0,
            amount: 0,
            unit: "$",
            visits: 0
          },
          week: {
            amount: 0
          },
          month: {
            amount: 0
          },
          day: {
            amount: 0
          }
        },
        nickname: "rahul.wu"
      }
    };
  },
  mounted() {},
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    selectSales(type) {
      this.selected = type;
      //this.from = this.saleAmount;
      if (type === "day") {
        let day =
          //localStorage.getItem("dayAmount") ||
          this.accountInfo.saledata.day.amount;
        this.saleAmount = day;
      }
      if (type === "week") {
        let week =
          //localStorage.getItem("weekAmount") ||
          this.accountInfo.saledata.week.amount;
        this.saleAmount = week;
      }
      if (type === "month") {
        let month =
          //localStorage.getItem("monthAmount") ||
          this.accountInfo.saledata.month.amount;
        this.saleAmount = month;
      }
      //this.accumulateEnd(this.from, this.saleAmount);
      //this.$refs.saleamount.start();
    },
    totalAmountFliter(number) {
      let res = "";
      number = parseInt(number);
      if (number > 1000) {
        res = (number / 1000).toFixed(0) + "k";
      } else {
        res = number;
      }
      return res;
    },
  }
};
</script>

<style lang="css" scoped>
.store-account-wrap {
  text-align: center;
  height: 100%;
}
.store-avator {
  margin-right: 14px;
  vertical-align: middle;
  width: 54px;
  height: 54px;
  border-radius: 50%;
}
.store-placeholder {
  height: 54px;
  line-height: 54px;
  text-align: left;
  font-size: 16px;
  color: #1d1d1d;
  letter-spacing: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.personal-sell-section {
  width: 100%;
  height: 215px;
  position: relative;
  background-image: linear-gradient(-154deg, #f94740 0%, #e23644 100%);
  border-radius: 16px 16px 0 0;
  margin-top: 14px;
  color: #fff;
}

.personal-tab-ul {
  position: relative;
  display: -webkit-box;
  margin: 0 auto;
  text-align: center;
  padding: 0 392px;
}

.personal-tab-ul li {
  margin-top: 16px;
  -webkit-box-flex: 1;
}

.tab-item {
  font-size: 16px;
}
.personal-sell-section .weui-flex__item {
  margin-top: 16px;
}

.personal-sell-section span {
  display: inline-block;
  padding: 5px 15px;
  width: 74px;
  height: 30px;
  line-height: 30px;
}

.personal-sell-section .selected {
  background-color: #fff;
  color: #f94740;
  border-radius: 30px;
}

.personal-sm-title {
  text-align: center;
  font-size: 10px;
  margin-top: 15px;
}

.personal-get-mounts {
  text-align: center;
  font-size: 36px;
  margin-top: 4px;
}
.personal-sell-ul {
  position: relative;
  display: -webkit-box;
  margin: 0 auto;
  text-align: center;
}

.personal-sell-ul li {
  margin-top: 20px;
  -webkit-box-flex: 1;
  height: 42px;
  border-right: 1px solid #ff6868;
}

.personal-sell-ul :last-child {
  border-right: none;
}

.personal-mount-sm {
  font-size: 10px;
}
.personal-mount-num {
  font-size: 16px;
  margin-top: 6px;
}
.personal-home-wrap .mu-item.show-right {
  height: 62px;
  line-height: 62px;
  background-color: #fff;
}
.personal-white {
  background-color: #fff;
}
.person-list .person-title {
  text-align: left;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #333333;
  letter-spacing: 0;
}
.person-list .weui-cell {
  padding: 16px 15px;
}
.line-split {
  width: 100%;
  height: 10px;
  background: #f2f2f2;
}
.person-list .person-desc {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #666666;
  letter-spacing: 0;
  text-align: right;
}
.store-account-wrap .order-item {
  width: 32px;
  height: 32px;
}
.store-account-wrap .order-item-desc {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #666666;
  letter-spacing: 0;
  text-align: center;
}
.store-account-wrap .my-orders,
.store-account-wrap .my-service {
  padding-bottom: 23px;
}
.personal-sale-wrap {
  padding: 0 50px 0 36px;
}
</style>
