<template>
<div class="order-product-list">
    <div v-for="item in list" :key="item.spuId" class="item">
        <image :src="item.imgUrl" class="product-img" />
        <div class="title">{{item.productName}}</div>
        <div class="size">{{item.skaAttrs[0].name}} / {{item.skuAttrs[0].name}}</div>
        <div class="price">{{unit}}{{item.sellPrice}}</div>
        <div class="number">x {{item.quantity}}</div>
    </div>
</div>
</template>

<script>
export default {
    props:["list","unit"],
    created(){
      console.log(this.list)
    },
}
</script>

<style>

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

</style>
