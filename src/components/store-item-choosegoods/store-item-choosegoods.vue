<template>
  <view class="store-choose-item">
    <div class="store-choose-item-left">
      <a :href="'../../pages/product_detail/main?productId=' + item.productId"><img lazy-load="true" :src="item.productImg" /></a>
    </div>
    <div class="store-choose-item-right">
      <a :href="'../../pages/product_detail/main?productId=' + item.productId">
        <div class="store-choose-item-right-title">
          {{ item.productName }}
        </div>
      </a>
      <div class="store-choose-item-right-info">
        <div class="store-choose-item-right-info-price">
          <p class="store-choose-product-price">{{ item.unit }}{{ item.sellPrice }}</p>
          <p class="store-choose-product-getprice">赚{{ item.unit }}{{ item.commission }}</p>
        </div>
        <div class="store-choose-item-btn">
          <i v-if="btnType.add" @click="handleAdded(item)" class="store-choose-item-icon store-choose-item-add" :class="{'on': !item.hasAdded ? false : true}"></i>
          <i v-if="btnType.del" @click="handleDecrease(item)" class="store-choose-item-icon store-choose-item-dec"></i>
          <i v-if="btnType.share" @click="handleShare(item)" class="store-choose-item-icon store-choose-item-share"></i>
        </div>
      </div>
    </div>
  </view>
</template>
<script>
  export default {
    name: 'store-item-choosegoods',
    props: {
      btnType: {
        type: [Array, Object],
        default: {
          add: false,
          del: false,
          share: false
        }
      },
      item: {
        type: [Array, Object],
        default: []
      }
    },
    data() {
      return {
        
      }
    },
    methods: {
      handleAdded(item) {
			this.$emit('handleAdded', item)
      },
      handleDecrease(item) {
        this.$emit('handleDecrease', item)
      },
      handleShare(item) {
        this.$emit('handleShare', item)
      }
    },
    mounted() {
      
    }
  }
</script>
<style>
.store-choose-item {
    display: flex;
    padding: 16px 16px 0;
}
.store-choose-item-left {
    width: 70px;
    height: 88px;
}
.store-choose-item-left a, .store-choose-item-left img {
    width: 100%;
    height: 100%;
}
.store-choose-item-right {
    flex: 1;
    padding-left: 16px;
}
.store-choose-item-right-title {
    text-align: left;
    font-size: 13px;
    color: #666;
    line-height: 18px;
}
.store-choose-item-right-info {
    display: flex;
    margin-top: 10px;
    align-items: flex-end;
}
.store-choose-item-right-info-price {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
}
.store-choose-item-btn {
    display: flex;
    align-items: flex-end;
}
.store-choose-item-icon {
    display: block;
    width: 24px;
    height: 24px;
    margin-left: 16px;
    background-size: 100%;
}
.store-choose-item-dec {
    background-image: url('./../../../static/assets/delete@2x.png');
}
.store-choose-item-share {
    background-image: url('./../../../static/assets/share@2x.png');
}
.store-choose-item-add {
    background-image: url('./../../../static/assets/detail_add_shop@2x.png');
}
.store-choose-item-add.on {
    background-image: url('./../../../static/assets/detail_cut_shop@2x.png');
}
.store-choose-product-price {
    font-weight: bold;
    font-size: 18px;
    color: #333;
}
.store-choose-product-getprice {
    font-size: 13px;
    color: #CD0E00;
}
</style>
