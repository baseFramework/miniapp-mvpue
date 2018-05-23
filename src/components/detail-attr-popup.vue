<template>
    <div v-if="detailInfo">
        <div class="detailAttrPopup-dialog-modal"> <!-- 根元素，z-index 需要高于父容器其他元素 -->
            <div class="detailAttrPopup-dialog-wrapper" @click="dismiss" v-show="isShow"></div>
            <!-- 加载一个具有透明度的背景，使根元素透明，子元素会继承该透明度 -->
            <transition name="drop">
                <div class="detailAttrPopup-dialog-container" v-show="isShow">  <!-- 模态框容器，z-index 需要高于背景 -->
                    <img class="detailAttrPopup-close-btn" src="./../../static/assets/navigation_close@2x.png" @click="dismiss"/>
                    <div class="detailAttrPopup-product-info-box">
                        <img class="detailAttrPopup-product-info-img" :src="detailInfo.productInfo.mediumImage">
                        <div class="detailAttrPopup-product-info-name-box">
                            <p class="detailAttrPopup-product-info-name">{{detailInfo.productInfo.productName}}</p>
                            <p class="detailAttrPopup-product-info-price">
                                {{detailInfo.unit}}{{detailInfo.productInfo.marketPrice}}</p>
                        </div>
                    </div>
                    
                    <div @click="handleItemTouch" class="detailAttrPopup">
                        <div v-for="attrItem in detailInfo.productInfo.attributeList" class="detailAttrPopupBox">
                            <div class="detailAttrPopup-title">{{ attrItem.name }}</div>
                            <div class="detailAttrPopup-item-box">
                                <div v-for="(item, index1) in attrItem.valueItems" class="detailAttrPopup-item"
                                     :data-item="item" :data-isska="attrItem.isSka" :key="index1" :class="{'on': item.checked}">
                                    {{ item.name }}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="detailAttrPopup-divider"></div>
                    
                    <div class="detailAttrPopup-quality-box">
                        <p class="detailAttrPopup-quality-title">数量</p>
                        <quantity-select v-on:quantityChange="quantityChange"></quantity-select>
                    </div>
                    
                    <div class="detailAttrPopup-btn-box" @click="addToCart">
                        <p class="detailAttrPopup-btn-txt">加入购物车</p>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    
    import QuantitySelect from '../components/quantity-select.vue'
    
    export default {
        data() {
            return {
                detailInfo: null,
                isShow: false,
                
                quantity: 1,
                
                isLoading: false,
                
                selectedSka: null,
                selectedSku: null,
                skaAttr: null,
                skuAttr: null,
                hasSka: true,
                hasSku: true,
            }
        },
        
        components: {
            QuantitySelect,
        },
    
        mounted() {
        },
        
        methods: {
            initInfo(info) {
                if (!this.detailInfo)
                    this.setInfo(info)
            },
            
            setInfo(info) {
                
                this.detailInfo = info
                this.selectedSku = null
                
                console.log(this.detailInfo)
    
                for (let attr of this.detailInfo.productInfo.attributeList) {
                    if (attr.isSka) {
                        this.hasSka = true
                        this.skaAttr = attr
                        for (let skaItem of attr.valueItems) {
                            if (skaItem.checked)
                                this.selectedSka = skaItem
                        }
                    } else {
                        this.hasSku = true
                        this.skuAttr = attr
                        for (let skuItem of attr.valueItems) {
                            if (skuItem.checked)
                                this.selectedSku = skuItem
                        }
                    }
                }
            },
            
            getDetail(productId) {
                this.isLoading = true
        
                let _this = this;
                _this.$http.get('/mock/16/api/store/product_detail', {productId: productId}).then(res => {
                    _this.setInfo(res.data)
                    _this.isLoading = false
                }).catch(()=> {
                    _this.isLoading = false
                })
            },
            
            show() {
                this.isShow = true
            },
            
            dismiss() {
                this.isShow = false;
            },
            
            quantityChange(num) {
                this.quantity = num
            },
            
            handleItemTouch(event) {
                let target = event.mp.target.dataset
                console.log(target.isska)
                if (target.isska)
                    this.handleSkaTouch(target.item);
                else
                    this.handleSkuTouch(target.item);
            },
            
            handleSkaTouch(item) {
                if (this.isLoading || this.selectedSka && this.selectedSka.productId === item.productId)
                    return;
    
                this.getDetail()
            },
            
            handleSkuTouch(item) {
                if (this.selectedSku && this.selectedSku.productId === item.productId)
                    return;
    
                let attr = this.skuAttr;
                for (let skuItem of attr.valueItems) {
                    if (skuItem.checked) {
                        skuItem.checked = false;
                    } else if (skuItem.productId === item.productId) {
                        skuItem.checked = true;
                    }
                }
    
                this.selectedSku = item
                this.skuAttr = attr
            },
    
            addToCart() {
                if (this.hasSka && !this.selectedSka) {
                    return;
                }
    
                if (this.hasSku && !this.selectedSku) {
                    return;
                }
    
                this.$emit('addToCart', this.detailInfo, this.quantity, this.hasSka, this.hasSku, this.selectedSka, this.selectedSku)
            },
        },
        
    }
</script>

<style>
    
    .detailAttrPopup-dialog-modal {
        position: absolute;
        z-index: 5;
    }
    
    .detailAttrPopup-dialog-wrapper {
        position: fixed;
        height: 100%;
        width: 100%;
        z-index: 5;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        
    }
    
    .detailAttrPopup-dialog-wrapper {
        background-color: #000;
        opacity: .5;
    }
    
    .detailAttrPopup-dialog-container {
        position: fixed;
        z-index: 80;
        left: 0;
        bottom: 0;
        right: 0;
        padding-top: 16px;
        /* margin: 0 auto; */
        background-color: #fff;
        border-radius: 6px;
        /*box-shadow: 0 5px 15px rgba(0,0,0,.5);*/
    }
    
    .detailAttrPopup-product-info-box {
        display: flex;
        flex-direction: row;
    }
    
    .detailAttrPopup-product-info-img {
        height: 76px;
        width: 60px;
    }
    
    .detailAttrPopup-product-info-name-box {
        margin-left: 16px;
        margin-right: 20px;
    }
    
    .detailAttrPopup-product-info-name {
        font-size: 13px;
        color: #666;
    }
    
    .detailAttrPopup-product-info-price {
        font-size: 18px;
        color: #333;
        margin-top: 18px;
        font-weight: bold;
    }
    
    .detailAttrPopup-quality-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px 16px 20px 16px;
    }
    
    .detailAttrPopup-quality-title {
        color: #333;
        font-size: 14px;
    }
    
    .detailAttrPopup-btn-box {
        display: flex;
        width: 100%;
        height: 49px;
        background-color: #CD0E00;
        align-items: center;
        justify-content: center;
    }
    
    .detailAttrPopup-btn-txt {
        color: #fff;
        font-size: 14px;
        font-weight: bold;
    }
    
    .detailAttrPopup-divider {
        width: 100%;
        height: 10px;
        margin-top: 20px;
        background-color: #F2F2F2;
    }
    
    .detailAttrPopup-close-btn {
        width: 22px;
        height: 22px;
        float: right;
        padding-left: 6px;
        padding-right: 6px;
    }
    
    .detailAttrPopup {
        padding: 0 0 20px;
        max-height: 200px;
        overflow: auto;
    }
    
    .detailAttrPopupBox {
        margin: 0 10px;
    }
    
    .detailAttrPopup-title {
        height: 16px;
        line-height: 16px;
        font-size: 14px;
        color: #333;
        margin: 10px 0;
    }
    
    .detailAttrPopup-item-box {
        width: 100%;
        text-align: left;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        box-align: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
    }
    
    .detailAttrPopup-item {
        border: 1px solid #CCC;
        border-radius: 60px;
        padding: 6px 20px 6px 20px;
        margin: 6px 8px 6px 8px;
        color: #333;
        font-size: 14px;
    }
    
    .detailAttrPopup-item.on {
        border: 1px solid #CD0E00;
        color: #CD0E00;
    }
</style>
