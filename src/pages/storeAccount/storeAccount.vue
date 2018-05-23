<template>
  <div class="page-bg">
    <div class="account-avatar">
      <div class="account-avatar-title"><span class="account-avatar-span">店铺头像</span></div>
      <img v-bind:src="userInfo.avatarUrl" class="account-avatar-pic"/>
    </div>
    <div>
      <ul class="account-items">
        <div class="account-item" v-for="(list, index) in lists" :key="index">
          <div class="account-item-content" v-on:click="pushToDetail(list)" >
            <div><span class="account-item-content-title">{{list.title}}</span></div>
            <div class="account-item-content-rightContent">
              <div><span class="account-item-content-contentDetail">{{list.content}}</span></div>
              <img class="account-item-content-pic" :src="indicato"/>
            </div>
          </div>
          <div class="space-line"></div>
        </div>
      </ul>
    </div>

  </div>
</template>

<script>
    export default {
      data() {
        return {
          indicato:'./../../static/assets/Indicato.png',
          lists:[
            {
              title:'店铺名称',
              content:'解忧杂货铺',
              path:'../storeName/main'
            },
            {
              title:'店铺公告',
              content:'何以解忧，唯有买买买买~',
              path:'../storeNotice/main'
            },
            {
              title:'店铺地址',
              content:'',
              path:'../storeAddress/main'
            },
            {
              title:'联系邮箱',
              content:'jyzhp@gmail.com',
              path:'../storeEmail/main'
            },
            {
              title:'联系电话',
              content:'6436922452',
              path:''
            },
          ],
          userInfo:{},
        };
      },
      methods:{
        /////跳转函数
        pushToDetail(list){
          const url = list.path;
          wx.navigateTo({ url })
        }
      },
      created(){
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo;
              }
            })
          }
        });
      },

    }
</script>

<style>
.page-bg{
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
  position: absolute;
}
.account-avatar{
  display: flex;
  background-color: #ffffff;
  margin-top: 10px;
  height: 96px;
  padding-left: 16px;
  padding-right: 38px;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
}
.account-avatar-title{
  height: 96px;
  font-size: 16px;
  line-height: 96px;
}
.account-avatar-span{
  color: #333333;
}
.account-avatar-pic{
  height: 64px;
  width: 64px;
  border-radius: 50%;
}
.account-items{
  margin-top: 10px;
}
.account-item{
  background-color: #ffffff;
  height: 60px;
  width: 100%;
}
.space-line{
  height: 1px;
  width: 100%;
  background-color: #e5e5e5;
}
.account-item-content{
  display: flex;
  flex-direction: row;
  height: 59px;
  padding-left:16px;
  padding-right: 16px;
  align-items: center;
  justify-content:space-between;
}
.account-item-content-title{
  font-size: 16px;
  color: #333333;
}
.account-item-content-contentDetail{
  font-size: 14px;
  color: #999999;
  margin-right: 16px;
}
.account-item-content-rightContent{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.account-item-content-pic{
  height: 14px;
  width: 14px;
}

</style>
