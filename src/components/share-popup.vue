<template>
    <div>
        <div class="sharePopup-dialog-modal"> <!-- 根元素，z-index 需要高于父容器其他元素 -->
            <div class="sharePopup-dialog-wrapper" @click="dismiss" v-show="isShow"></div>
            <!-- 加载一个具有透明度的背景，使根元素透明，子元素会继承该透明度 -->
            <transition name="drop">
                <div class="sharePopup-dialog-container" v-show="isShow">  <!-- 模态框容器，z-index 需要高于背景 -->
                    <p class="sharePopup-dialog-title">{{dialogTitle}}</p>
                    <p class="sharePopup-dialog-content">{{dialogContent}}</p>
                    <div class="sharePopup-img-box">
                        <div class="sharePopup-wx-box">
                            <img class="sharePopup-wx-img" src="./../../static/assets/share_wx@2x.png"/>
                            <p class="sharePopup-wx-txt">微信好友</p>
                        </div>
                        
                        <div class="sharePopup-wx-box sharePopup-wx-moments-box">
                            <img class="sharePopup-wx-img" src="./../../static/assets/share_moments@2x.png"/>
                            <p class="sharePopup-wx-txt">微信朋友圈</p>
                        </div>
                    </div>
                    
                    <div class="sharePopup-divider"></div>
                    
                    
                    <div class="sharePopup-btn-box" @click="dismiss">
                        <p class="sharePopup-btn-txt">取消</p>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    
    
    export default {
        props: [
            'dialogTitle',
            'dialogContent',
        ],
        
        data() {
            return {
                isShow: false,
            }
        },
        
        components: {},
        
        methods: {
            dismiss() {
                this.isShow = false
            },
            
            show() {
                this.isShow = true
            },
            
        },
        
    }
</script>

<style>
    
    .sharePopup-dialog-modal {
        position: absolute;
        z-index: 5;
    }
    
    .sharePopup-dialog-wrapper {
        position: fixed;
        height: 100%;
        width: 100%;
        z-index: 5;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        
        background-color: #000;
        opacity: .5;
    }
    
    .sharePopup-dialog-container {
        position: fixed;
        z-index: 80;
        left: 0;
        bottom: 0;
        right: 0;
        align-items: center;
        display: flex;
        flex-direction: column;
        background-color: #FCFCFC;
        border-radius: 6px;
        /*box-shadow: 0 5px 15px rgba(0,0,0,.5);*/
    }
    
    .sharePopup-dialog-title {
        font-size: 16px;
        color: #CD0E00;
        font-weight: bold;
        margin: 20px 32px 0 32px;
    }
    
    .sharePopup-dialog-content {
        font-size: 12px;
        color: #333;
        margin: 12px 32px 24px 32px;
        text-align: center;
    }
    
    .sharePopup-img-box {
        display: flex;
        flex-direction: row;
    }
    
    .sharePopup-wx-box {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .sharePopup-wx-moments-box {
        margin-left: 50px;
    }
    
    .sharePopup-wx-img {
        width: 55px;
        height: 55px;
    }
    
    .sharePopup-wx-txt {
        font-size: 12px;
        color: #333;
        margin-top: 6px;
    }
    
    .sharePopup-divider {
        width: 100%;
        height: 10px;
        margin-top: 20px;
        background-color: #F2F2F2;
    }
    
    .sharePopup-btn-box {
        display: flex;
        width: 100%;
        height: 49px;
        align-items: center;
        justify-content: center;
        background-color: #FCFCFC;
    }
    
    .sharePopup-btn-txt {
        color: #666;
        font-size: 14px;
    }
</style>
