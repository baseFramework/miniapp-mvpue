<template>
  <!-- 组件功能：用户地址的选择国家，地区的选项框 -->
  <div>
    <div :class="subClass" @click="tapSelect"><span class="step-select-font-class">{{displayText}}</span></div>
    <div class="select-box-bg" v-if="isSelected" @click="cancelTap">
      <!--<picker @change="handleChange" v-bind:range="items" :value="index" mode="selector" :range-key="itemsKey">-->
      <!--<view class="select-box-display">-->
      <!--<span class="select-box-displayText">{{displayText}}</span>-->
      <!--</view>-->
      <!--</picker>-->
    </div>
    <div class="select-box-tab" v-if="isSelected">
      <div class="select-box-tabContent">
        <span class="select-box-cancel" @click="cancelTap">取消</span>
        <span class="select-box-sure" @click="sureTap">确定</span>
      </div>
      <div class="space-line"></div>
    </div>
    <div class="select-box-body" v-if="isSelected">
      <picker-view indicator-style="height: 50px;" style="width: 100%; height: 220px; background-color: #ffffff"
                   :value="numValue" @change="handleChange">
        <picker-view-column>
          <div v-for="item in items"
               style="line-height: 40px;align-items: center;justify-content: center;display:flex;font-size: 14px">
            {{item.value}}
          </div>
        </picker-view-column>
      </picker-view>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'step-select',
    //回调函数,range,range-key
    props: ['selectChange', 'items', 'itemsKey', 'subClass','initialIndex'],
    data() {
      return {
        displayText: '',
        numValue: [0],
        isSelected: false,
      };
    },
    methods: {
      handleChange(e) {
         this.selectedIndex = e.target.value[0];
      },
      //点击弹出选择
      tapSelect() {
        this.isSelected = !this.isSelected;
      },
      //取消选择
      cancelTap() {
        this.isSelected = false
      },
      //确定选择
      sureTap(){
        this.displayText = this.itemsKey ?this.items[this.selectedIndex][this.itemsKey]:this.items[this.selectedIndex];
        this.isSelected = false;
        this.numValue[0] = this.selectedIndex;
        this.$emit('selectChange', this.items[this.selectedIndex]);
      }
    },
    mounted() {
      this.displayText = this.itemsKey ? this.items[this.initialIndex][this.itemsKey] : this.items[this.initialIndex];
      this.isSelected = false;
      this.numValue[0] = this.initialIndex;
      this.selectedIndex = this.initialIndex;
    }
  }
</script>
<style scoped>
  .select-box-bg {
    position: absolute;
    top: 0;
    bottom: 260px;
    left: 0;
    right: 0;
    background-color: #333333;
    opacity: 0.5;
    z-index: 99;
  }

  .select-box-body {
    z-index: 99;
    position: absolute;
    left: 0;
    right: 0;
    height: 220px;
    background-color: #ffffff;
    bottom: 0;
    opacity: 1;
  }
  .select-box-tab {
    z-index: 99;
    position: absolute;
    left: 0;
    right: 0;
    height: 40px;
    background-color: #ffffff;
    bottom: 220px;
    opacity: 1;
  }
  .select-box-tabContent{
    height: 39px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
  }
  .select-box-cancel{
    font-size: 16px;
    color: #333333;
  }
  .select-box-sure{
    font-size: 16px;
    color: red;
  }
</style>
