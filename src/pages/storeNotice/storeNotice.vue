<template>
  <div class="store-notice">
    <div class="notice-input">
      <input class="notice-input-text" placeholder="请输入店铺公告" v-model="inputText"/>
      <!--<div class="space-line"></div>-->
    </div>
    <div class="sure-button" @click="onConfirm"><span class="sure-button-text">确认</span></div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        inputText:''
      };
    },
    methods:{
      onConfirm(){
        console.log(this.inputText)
      }
    }

  }
</script>

<style scoped>
  .store-notice{
    background-color: #f2f2f2;
    position: absolute;
    height: 100%;
    width: 100%;
  }
  .notice-input{
    display: flex;
    height: 57px;
    background-color: #ffffff;
    margin-top: 10px;
    padding-left :16px;
    padding-right: 16px;
    flex-direction: column;
    justify-content: center;

  }
  .notice-input-text{
    font-size: 14px;
  }
  .space-line{
    height: 1px;
    width: 100%;
    background-color: #e5e5e5;
  }
  .sure-button{
    display: flex;
    height: 49px;
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 30px;
    background-color: red;
    border-radius: 24.5px;
    justify-content: center;
    align-items: center;
  }
  .sure-button-text{
    font-size: 16px;
    color: #ffffff;
  }
</style>
