<template>
  <div class="store-choosegoods-page">
    <!-- Tab Nav -->
    <view class="nav-tabs">
      <scroll-view
        scroll-x
        scroll-with-animation
        style="white-space: nowrap;"
        :scroll-left="nav_tabs_scroll_left">
        <view 
          v-for="(item, index) in goodsItems"
          class="tab-list"
          :class="{'on': index == currIdx}"  
          :key="index"
          :id="'category' + item.id"
          @click="handleTapTabbar(index)">
          {{ item.category }}
        </view>
      </scroll-view>
    </view>
    <!-- Tab Content -->
    <swiper
      :style="{height: swiperH}"
      class="tab-content-swiper"
      :indicator-dots="indicatorDots" 
      :autoplay="autoplay" 
      :interval="interval" 
      :duration="duration"
      :circular="circular"
      :current="currIdx"
      @change="swiperChange"
      @animationfinish="animationfinish">
      <!-- 列表 -->
      <swiper-item v-for="(items, index) in goodsItems" :key="index" class="tab-item">
        <block>
          <!-- 滚动层 -->
          <scroll-view
            scroll-y
            :style="{height: swiperH}"
            enable-back-to-top="true"
            @scrolltolower="getRecommendProduct">
            <!-- 列表项 -->
            <store-items
              v-for="(item, idx) in goodsItems[index].items" :key="idx"
              wrapClass="store-items-box"
              :btnType="btnType"
              :item="item"
              @handleAdded="handleAdded(idx)">
            </store-items>
          </scroll-view>
        </block>
      </swiper-item>
    </swiper>
    <!-- global-loading -->
    <loading :hidden="gloading">正在加载</loading>
  </div>
</template>

<script>
// Use Vuex
import storeItems from '@/components/store-item-choosegoods/store-item-choosegoods';

// mock
import data from './data'

export default {
  data() {
    return {
        indicatorDots: false,
        autoplay: false,
        interval: 5000,
        circular: false,
        duration: 300,
        goodsItems: [],
        currIdx: 0,
        swiperH: 0,
        windowWidth: 0,
        nav_tabs_scroll_left: 0,
        preChildrenPos: 0,
        btnType: {
          add: true // add, del, share
        }, // 配置列表button类型
        currIndex: '', // 指向当前列表数据下标
        isloading: false, // 截流
        gloading: true // 全局loading
    };
  },
  components: {
    storeItems
  },
  computed: {

  },
  methods: {
    // 滑动切换
    swiperChange(e) {
      console.log('swiperChange');
      if(this.currIdx == e.mp.detail.current) return;
      this.isloading = true;
      // this.gloading = false;
      this.currIdx = e.mp.detail.current;
      this.setNavPos();
      // this.toView = 'category' + this.goodsItems[this.currIdx].id;
    },
    // 滑动切换结束
    animationfinish(e) {
      if(this.goodsItems[this.currIdx].items && !this.goodsItems[this.currIdx].items.length) {
        this.getRecommendProduct();
      } else {
        console.log('animationfinish');
        this.gloading = true;
        this.isloading = false;
      }
      // console.log('第' + e.mp.detail.current + '张轮播图滑动结束');
    },
    // 点击tabbar
    handleTapTabbar(idx) {
      if(this.isloading || !this.gloading) return;
      this.currIdx = idx;
      // this.toView = 'category' + this.goodsItems[idx].id;
      this.setNavPos();
      if(this.goodsItems[idx].items && !this.goodsItems[idx].items.length) {
        this.getRecommendProduct();
      }
    },
    handleAdded(idx) {
      let _this = this;
      if(_this.goodsItems[_this.currIdx].items[idx].hasAdded) return;
      _this.isloading = true;
      _this.gloading = false;
      // console.log(idx)
      _this.$http.get('/mock/10/api/test').then(res => {
        _this.goodsItems[_this.currIdx].items[idx].hasAdded = true;
        _this.goodsItems = [..._this.goodsItems];
        _this.gloading = true;
      })
    },
    // 获取列表数据
    getRecommendProduct() {
      let _this = this;
      console.log(_this.currIdx)
      _this.isloading = true;
      _this.gloading = false;
      _this.$http.get('/mock/10/api/test').then(res => {
        // console.log('arr')
        res = data.tabItems;
        let arr = _this.goodsItems[_this.currIdx].items.concat(res.items || []);
        _this.goodsItems[_this.currIdx].items = arr;
        _this.goodsItems = [..._this.goodsItems];
        _this.isloading = false;
        _this.gloading = true;
      })
    },
    getCategories() {
      let _this = this;
      _this.isloading = true;
      _this.$http.get('/mock/10/api/test').then(res => {
        res = data.tabBar;
        for(let i = 0, len = res.length; i < len; i++) {
            _this.goodsItems[i] = {};
            _this.goodsItems[i].unit = '$';
            _this.goodsItems[i].id = res[i].id;
            _this.goodsItems[i].category = res[i].category;
            _this.goodsItems[i].categoryLen = res[i].category ? res[i].category.length : 0;
            _this.goodsItems[i].items = [];
            _this.goodsItems[i].pageNum = 1;
            _this.goodsItems[i].pageSize = 10;
            _this.goodsItems[i].hasAdded = false;
            _this.goodsItems[i].isEndPage = false;
        }
        _this.isloading = false;
        _this.gloading = false;
        _this.getRecommendProduct();
      })
    },
    setNavPos() {
      let pos = 0; // 坐标值
      // 判断当前tab位置是否超过第二个
      if(this.currIdx <= 1) {
        pos = 0;
      } else {
        // 当前tab的前一个的位置
        for(let i = 0, len = this.currIdx - 1; i < len; i++) {
          pos += this.goodsItems[i].categoryLen * 16 + 20;
        }
      }
      this.nav_tabs_scroll_left = pos;
    }
  },
  mounted () {
    
  },
  created () {
    let _this = this;
    this.isloading = true;
    // 获取系统信息
    wx.getSystemInfo({  
      success: function(res) {
        // console.log(res.windowWidth)  
        // console.log(res.windowHeight)
        _this.windowWidth = res.windowWidth;
        _this.swiperH = res.windowHeight - 40 + 'px';
        _this.getCategories();
      }  
    }) 
  }
};
</script>
<style scoped>
.store-choosegoods-page {
  background-color: white;
}
.nav-tabs{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 40px;
  background-color: white;
  padding-right: 10px;
}
.tab-list {
  display: inline-block;
  line-height: 40px;
  height: 40px;
  text-align:center;
  flex:1;
  color:#666;
  box-sizing: border-box;
  margin-left: 20px;
  font-size: 14px;
}
view.tab-list:last-child {
  margin-right: 20px; 
}
.tab-list.on{
    color:#fc5558;
    flex:1;
    font-weight:bold;
    border-bottom: 1px solid red;
}
.tab-content-swiper {
  height: 100%;
  padding-top: 40px;
}
.tab-item {
  height: 100%;
}
</style>
