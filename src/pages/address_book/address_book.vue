<template>
  <div class="address-book-bg">
    <ul>
      <div class="address-book-cell" v-for="(item,index) in items">
        <div class="address-book-cell-div">
          <div class="address-book-cell-leftDiv">
            <span>{{item.name}}</span>
            <p>{{item.code}}</p>
            <p>{{item.address}}</p>
          </div>
          <div class="address-book-cell-rightDiv"><img src="../../../static/assets/Edit.png" @click="editAddress"/>
          </div>
        </div>
        <div class="address-book-cell-default" v-if="index==0"><p>默认地址</p></div>
      </div>
    </ul>
    <div class="address-book-add-bg"><div class="address-book-addButton" @click="addAddress"><p>添加新地址</p></div></div>
  </div>
</template>

<script>
  export default {
    name: "address_book",
    data() {
      return {
        items: [
          {
            name: 'Joel Jefferson',
            code: '5204594496',
            address: '1811 Parkway Drive, Sierra, AZ 85635 Uni dfs dsd  dsafsd States'
          },
          {
            name: 'Joel Jefferson',
            code: '5204594496',
            address: '1811 Parkway Drive, Sierra, AZ 85635 United States'
          },
          {
            name: 'Joel Jefferson',
            code: '5204594496',
            address: '1811 Parkway Drive, Sierra, AZ 85635 United States'
          },
          ],
      };
    },
    methods: {
      editAddress() {
        console.log('edit')
      },
      addAddress(){
        const url = '../storeAddress/main?type=address_book';
        wx.navigateTo({url})
      }
    }
  }
</script>

<style scoped>
  .address-book-bg {
    background-color: #f2f2f2;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .address-book-cell {
    margin-top: 1px;
    width: 100%;
    background-color: #ffffff;
  }

  .address-book-cell-div {
    height: 112px;
    margin-top: 1px;
    width: 100%;
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .address-book-cell-default {
    height: 38px;
    margin-top: 1px;
    width: 100%;
    background-color: #ffffff;
  }

  .address-book-cell-default p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #CD0E00;
    border-style: solid;
    border-width: 1px;
    border-radius: 4px;
    height: 22px;
    width: 64px;
    margin-left: 16px;
  }

  .address-book-cell-leftDiv {
    width: 341px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .address-book-cell-leftDiv p {
    font-size: 14px;
    margin-left: 16px;
    line-height: 16px;
    color: #333333;
    font-family: HelveticaNeue;
  }

  .address-book-cell-leftDiv span {
    font-size: 14px;
    margin-left: 16px;
    line-height: 16px;
    color: #333333;
    font-family: HelveticaNeue-Bold;
  }

  .address-book-cell-rightDiv {
    height: 112px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .address-book-cell-rightDiv img {
    height: 18px;
    width: 18px;
  }

  .address-book-addButton {
    margin-left: 38px;
    margin-right: 38px;
    /*margin-top: 26px;*/
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-width: 1px;
    color: #cccccc;
    border-radius: 100px;
  }

  .address-book-add-bg{
    height: 88px;
    background-color: #f2f2f2;
    width: 100%;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .address-book-addButton p {
    color: #333333;
    font-size: 14px;
  }
</style>
