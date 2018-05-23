<template>
    <div>
        <div v-if="detailInfo" style="width: 100%">
            <div class="detail-swiper-box">
                <swiper class="detail-swiper-img" indicator-dots="true" circular="true" @change="swiperChange">
                    <swiper-item v-for="(item, index) in detailInfo.productInfo.detailImages" :key="index">
                        <img class="detail-swiper-img" :style="{height: swiperHeight}" :src="item"/>
                    </swiper-item>
                </swiper>
    
                <div v-if="detailInfo.soldout" class="detail-soldout-box">
                    <p class="detail-soldout-txt">已下架</p>
                </div>
    
            </div>
    
            <div class="detail-product-info-box">
                <div class="detail-product-name-box">
                    <p class="detail-product-name">{{detailInfo.productInfo.productName}}</p>
                    <!-- <img ref="" class="detail-add-shop" @click="addShop" src="./../../../static/assets/detail_add_shop@2x.png"> -->
    
                    <img v-show="!detailInfo.soldout" class="detail-add-shop" @click="addShop" :src="isAddShop ? shopAdd : shopCut">
                </div>
                <p class="detail-product-price">{{detailInfo.unit}}{{detailInfo.productInfo.marketPrice}}</p>
                <p class="detail-product-profit">{{detailInfo.unit}}{{detailInfo.productInfo.marketPrice}}</p>
            </div>
    
            <div class='detail-divider-section'></div>
    
            <div class="detail-shipping-pledge">
                <div class="detail-shipping-box">
                    <img class="detail-shipping-check-size" src="./../../../static/assets/detail_shipping_check@2x.png">
                    <p class="detail-shipping-txt">全场免邮</p>
                </div>
    
                <div class="detail-shipping-box detail-shipping-box2">
                    <img class="detail-shipping-check-size" src="./../../../static/assets/detail_shipping_check@2x.png">
                    <p class="detail-shipping-txt">100%正品</p>
                </div>
    
                <div class="detail-shipping-box detail-shipping-box2">
                    <img class="detail-shipping-check-size" src="./../../../static/assets/detail_shipping_check@2x.png">
                    <p class="detail-shipping-txt">7天包退</p>
                </div>
            </div>
    
            <div class='detail-divider-section'></div>
    
            <detail-tab tabTitleL="商品详情" tabTitleR="物流和退货" v-on:tabChange="tabChange"></detail-tab>
    
            <div v-show="selectTab1" class="detail-tab-content-box">
                <div v-if="detailInfo.modelInfo && (detailInfo.modelInfo.wearingSize !== '' || detailInfo.modelInfo.measurement !== '' || detailInfo.modelInfo.height !== '')">
                    <div class="detail-modelInfo-box">
                        <p class="detail-descContent detail-modelInfo-title">ModelInfo</p>
                        <p class="detail-descContent detail-modelInfo-content">Height: {{detailInfo.modelInfo.height}}</p>
                        <p class="detail-descContent detail-modelInfo-content">Width: {{detailInfo.modelInfo.measurement}}</p>
                        <p class="detail-descContent detail-modelInfo-content">WearingSize: {{detailInfo.modelInfo.wearingSize}}</p>
                    </div>
                </div>
        
                <div v-if="detailInfo.detailInfo.longDescription && detailInfo.detailInfo.longDescription !== ''" class="detail-modelInfo-box">
                    <p class="detail-descContent detail-modelInfo-content">{{detailInfo.detailInfo.longDescription}}</p>
                </div>
        
                <div v-if="detailInfo.detailInfo.specifications && detailInfo.detailInfo.specifications.length > 0" class="detail-specifications-box">
                    <p v-for="(item, index) in detailInfo.detailInfo.specifications" class="detail-specifications-txt" :key="index">{{item.name}}: {{item.value}}</p>
                </div>
        
                <div v-if="sizeGuideInfo">
                    <div v-if="sizeGuideInfo.hasSizeTab && sizeGuideInfo.hasStandardTab" class="detail-sizeguide-tab-box ">
                        <div class="detail-sizeguide-tab" :class="{'detail-sizeguide-tab-left-t': isSizeChart, 'detail-sizeguide-tab-left-f': !isSizeChart}" @click="sizeCharTabChange(1)">
                            <p class="detail-sizeguide-tab-txt" :style="{color: sizeCharTxtL}">Size Chart</p>
                        </div>
            
                        <div class="detail-sizeguide-tab":class="{'detail-sizeguide-tab-right-t': !isSizeChart, 'detail-sizeguide-tab-right-f': isSizeChart}" @click="sizeCharTabChange(2)">
                            <p class="detail-sizeguide-tab-txt" :style="{color: sizeCharTxtR}">Standard Sizing</p>
                        </div>
                    </div>
        
                    <div v-if="isSizeChart && sizeGuideInfo.hasSizeTab || !isSizeChart && sizeGuideInfo.hasStandardTab">
                        <p v-if="isSizeChart && sizeGuideInfo.sizeChartInfo" class="detail-sizeguide-sizechar-info-txt">{{sizeGuideInfo.sizeChartInfo}}</p>
                        <p v-if="!isSizeChart && sizeGuideInfo.standardChartInfo" class="detail-sizeguide-sizechar-info-txt">{{sizeGuideInfo.standardChartInfo}}</p>
                        
                        <div class="detail-divider-section"></div>
        
                        <div>
                            <table v-if="isSizeChart && sizeGuideInfo.sizeChart.length > 0" >
                                <tbody>
                                    <tr v-for="(item, index1) in sizeGuideInfo.sizeChart" :key="index1">
                                        <td v-for="(size, index2) in item" :class="{firstTd:index2 == 0}" :key="index2"  :style="{width: sizeGuideItemW + 'px'}">{{ size }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            
                            <table v-if="!isSizeChart && sizeGuideInfo.standardChart.length > 0">
                                <tbody>
                                    <tr v-for="(item, index1) in sizeGuideInfo.standardChart" :key="index1">
                                        <td v-for="(size, index2) in item" :class="{firstTd:index2 == 0}" :key="index2"  :style="{width: sizeGuideItemW + 'px'}">{{ size }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
        
                        <div class="detail-divider-section"></div>
                        
                        <img v-if="isSizeChart" class="detail-sizeguide-img" :src="sizeGuideInfo.sizeChartImage"/>
                        <img v-else-if="!isSizeChart" class="detail-sizeguide-img" :src="sizeGuideInfo.standardChartImage"/>
                        
                    </div>
                </div>
                
                <div v-for="imgUrl in detailInfo.productInfo.detailImages">
                    <img class="detail-productDetail-imagelist" :src="imgUrl"/>
                </div>
            </div>
    
            <div v-show="!selectTab1" class="detail-tab-content-box">
                <p>321321321</p>
            </div>
    
            <div class="detail-bottom-tab-box">
                <div class="detail-bottom-tab-shop">
                    <img class="detail-bottom-tab-shop-img" src="./../../../static/assets/detail_tab_shop@2x.png">
                    <p class="detail-bottom-tab-shop-txt">我的店铺</p>
                </div>
    
                <div class="detail-bottom-tab-divider"></div>
    
                <div class="detail-bottom-tab-shop">
                    <img class="detail-bottom-tab-shop-img" src="./../../../static/assets/detail_tab_car@2x.png">
                    <p class="detail-bottom-tab-shop-txt">购物车</p>
                </div>
        
                <div class="detail-bottom-tab-divider"></div>
    
                <div v-if="!detailInfo.soldout" class="detail-bottom-tab-buy-box">
    
                    <div class="detail-bottom-tab-shop detail-bottom-tab-buy" @click="buy">
                        <p class="detail-bottom-tab-buy-txt">买</p>
                        <p class="detail-bottom-tab-shop-txt">省 {{detailInfo.unit}}{{detailInfo.productInfo.marketPrice}}</p>
                    </div>
    
                    <div class="detail-bottom-tab-divider"></div>
    
                    <div class="detail-bottom-tab-shop detail-bottom-tab-buy" @click="sell">
                        <p class="detail-bottom-tab-buy-txt">卖</p>
                        <p class="detail-bottom-tab-shop-txt">赚 {{detailInfo.unit}}{{detailInfo.productInfo.marketPrice}}</p>
                    </div>
                </div>
    
                <div v-else class="detail-bottom-tab-soldout-box">
                    <div>
                        <p class="detail-bottom-tab-soldout">已下架</p>
                    </div>
                </div>
    
            </div>
            
            <detail-attr-popup ref="attrPopup" v-on:addToCart="addToCart"></detail-attr-popup>
            <share-popup ref="sharePopup" :dialogContent="shareDialogContent" :dialogTitle="shareDialogTitle"></share-popup>
    
        </div>
        
        <div v-if="showLoading">
            <loading>正在加载</loading>
        </div>
    </div>
    
</template>

<script>

import DetailTab from '../../components/detail-tab.vue';
import DetailAttrPopup from '../../components/detail-attr-popup.vue';
import SharePopup from '../../components/share-popup.vue';

export default {
    data() {
        return {
            showLoading: false,
            selectTab1: true,

            isBeautyImage: false,
            isSizeChart: true,

            shareDialogTitle: '',
            shareDialogContent: '',

            isAddShop: true,
            shopAdd: "./../../../static/assets/detail_add_shop@2x.png",
            shopCut: "./../../../static/assets/detail_cut_shop@2x.png",

            swiperHeight: 472,
            detailInfo: null,
            sizeGuideInfo: null,
            
            sizeCharTxtL: '#fff',
            sizeCharTxtR: '#333',
            
            sizeGuideItemW: 80,
//
        };
    },
  
    mounted() {
      
      let productId = this.$mp.query.productId
  
      this.getDetail(productId);
      
    },

    components: {
        DetailTab,
        DetailAttrPopup,
        SharePopup,
    },
    methods: {
        
        getDetail(productId) {
            this.showLoading = true
            
            let _this = this;
            _this.$http.get('/mock/16/api/store/product_detail', {productId: productId}).then(res => {
                _this.detailInfo = res.data
                
                if (_this.detailInfo.productInfo && _this.detailInfo.productInfo.hasBeautyImage && _this.detailInfo.productInfo.hasBeautyImage === 'Y')
                    _this.swiperHeight = 215;
                
                _this.getSizeChart(productId)
            }).catch(()=> {
                _this.showLoading = false
            })
          
        },
        
        getSizeChart(productId) {
            let _this = this;
            _this.$http.get('/mock/16/api/store/prodsizechart', {productId: productId}).then(res => {
                
                _this.showLoading = false
                _this.isSizeChart = !(!res.data.hasSizeTab && res.data.hasStandardTab)
                _this.sizeGuideInfo = res.data
                
            }).catch(()=> {
                _this.showLoading = false
            })
        },

        tabChange(isSelectTab1) {
            this.selectTab1 = isSelectTab1
        },
        
        sizeCharTabChange(tab) {
            if (tab === 1) {
                this.isSizeChart = true
                this.sizeCharTxtL = '#fff'
                this.sizeCharTxtR = '#333'
            } else {
                this.isSizeChart = false
                this.sizeCharTxtL = '#333'
                this.sizeCharTxtR = '#fff'
            }
        },

        addShop() {
            this.isAddShop = !this.isAddShop
        },
  
        sell() {
            this.shareDialogContent = '只要你的好友通过你的链接购买此商品，你就能赚到至少' + this.detailInfo.unit + this.detailInfo.productInfo.marketPrice + '利润哦~'
            this.shareDialogTitle = '分享赚 ' + this.detailInfo.unit + this.detailInfo.productInfo.marketPrice
    
            this.$refs.sharePopup.show()
        },
        
        buy() {
            this.$refs.attrPopup.initInfo(this.detailInfo)
            this.$refs.attrPopup.show()
        },
    
        addToCart(detailInfo, quantity, hasSka, hasSku, selectedSka, selectedSku) {
            if (this.showLoading)
                return;
    
            this.showLoading = true
    
            let skaArr = [];
            let skuArr = [];
            hasSka && skaArr.push(selectedSka);
            hasSku && skuArr.push(selectedSku);
            
            let param = {
                userId: 'id123456',
                quantity: quantity,
                skaId: hasSka ? selectedSka.productId : detailInfo.productInfo.productId,
                skuId: hasSku ? selectedSku.productId : detailInfo.productInfo.skuProductId,
                skaAttrs: JSON.stringify(skaArr),
                skuAttrs: JSON.stringify(skuArr),
            }
    
            this.$http.post('/mock/16/api/store/add_to_cart', param).then(res => {
                this.showLoading = false
                this.$refs.attrPopup.dismiss()
    
                console.log('add-to-cart Succ')
            }).catch(()=> {
                this.showLoading = false
            })
    
        },
    }
};
</script>

<style>

.detail-swiper-box {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.detail-swiper-img {
    width: 100%;
}

.detail-soldout-box {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    opacity: 0.6;
    width: 120px;
    height: 120px;
    border-radius: 60px;
    position: fixed;
}

.detail-soldout-txt {
    font-size: 16px;
    color: #fff;
}

.detail-divider-section {
    height: 10px;
    background-color: #F2F2F2;
}

.detail-product-info-box {
    margin: 8px 16px 8px 16px;
    display: flex;
    flex-direction: column;
}

.detail-product-name-box {
    display: flex;
    flex-direction: row;
}

.detail-product-name {
    color: #333;
    font-size: 14px;
    display: flex;
    flex: 1;
}

.detail-add-shop {
    width: 24px;
    height: 24px;
    margin-left: 12px;
}

.detail-product-price {
    color: #333;
    font-size: 22px;
    font-weight: bold;
    margin-top: 8px;
}

.detail-product-profit {
    color: #CD0E00;
    font-size: 16px;
    font-weight: bold;
    margin-top: 4px;
}

.detail-shipping-pledge {
    margin: 16px;
    display: flex;
    flex-direction: row;
}

.detail-shipping-box {
    display: flex;
    align-items: center;
}

.detail-shipping-box2 {
    margin-left: 18px;
}

.detail-shipping-check-size {
    width: 14px;
    height: 14px;
}

.detail-shipping-txt {
    font-size: 12px;
    color: #2A2A2A;
    margin-left: 6px;
}

.detail-tab-content-box {
    margin-bottom: 50px;
}

.detail-modelInfo-box {
    padding: 6px 12px 6px 12px;
}

.detail-modelInfo-title {
    font-weight: bold;
}

.detail-modelInfo-content {
    margin-top: 4px;
}

.detail-specifications-box {
    margin-top: 15px;
    margin-left: 12px;
}

.detail-specifications-txt {
    margin-bottom: 5px;
    font-size: 14px;
    color: #666;
}

.detail-descContent {
    font-size: 14px;
    color: #666;
}

.detail-sizeguide-tab-box {
    display: flex;
    flex-direction: row;
    margin: 30px 17px 17px 17px;
}

.detail-sizeguide-tab {
    display: flex;
    flex: 1;
    height: 30px;
    align-items: center;
    justify-content: center;
}

.detail-sizeguide-tab-left-t {
    background-color: #3e3e3e;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
}


.detail-sizeguide-tab-txt {
    font-size: 13px;
}


.detail-sizeguide-tab-left-f {
    background-color: #ccc;
    border-width: 1px;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
}

.detail-sizeguide-tab-right-t {
    background-color: #3e3e3e;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
}

.detail-sizeguide-tab-right-f {
    background-color: #ccc;
    border-width: 1px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
}

.detail-sizeguide-sizechar-info-txt {
    color: #666;
    font-size: 14px;
    margin: 0 12px 20px 12px;
}

.detail-sizeguide-img {
    width: 100%;
}


table {
    border-collapse: collapse;
    border-spacing: 0;
    min-width: 100%;
    overflow: hidden;
    overflow-x: scroll;
}

table tr {
    min-width: 100%;
    display: flex;
    flex-direction: row;
}

table td {
    min-width: 80px;
    height: 40px;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    border: 1px solid #e5e5e5;
}

table .firstTd{
    background: #333;
    border: 1px solid #666;
    color: #fff;
}




.detail-productDetail-imagelist {
  width: 100%;
}

.detail-bottom-tab-box {
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: #E5E5E5;
}

.detail-bottom-tab-shop {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.detail-bottom-tab-shop-img {
    width: 50px;
    height: 32px;
}

.detail-bottom-tab-shop-txt {
    font-size: 10px;
    color: #8E8E93;
    margin-top: 2px;
}

.detail-bottom-tab-divider {
    width: 1px;
    height: 100%;
    background-color: #E5E5E5
}

.detail-bottom-tab-buy-box {
    display: flex;
    flex-direction: row;
    flex: 1;
}

.detail-bottom-tab-buy {
    flex: 1;
}

.detail-bottom-tab-buy-txt {
    font-size: 16px;
    color: #333;
    font-weight: bold;
}

.detail-bottom-tab-soldout-box {
    display: flex;
    flex: 1;
    background-color: #999;
    justify-content: center;
    align-items: center;
}

.detail-bottom-tab-soldout {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
}

</style>
