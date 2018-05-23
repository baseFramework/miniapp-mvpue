<template>
  <div class="store-address">
    <div class="address-form">
      <li class="address-item-cell">
        <StepSelect v-bind:items="countryData" itemsKey='value' @selectChange="countryChange"
                    subClass="address-item-input" initialIndex='0' ref="country"/>
        <div class="space-line"></div>
      </li>
      <li class="address-item-cell">
        <input class="address-item-input" placeholder="联系人" v-model="addressInfo.linkman"/>
        <div class="space-line"></div>
      </li>
      <li class="address-item-cell">
        <input class="address-item-input" placeholder="地址1" v-model="addressInfo.address1"/>
        <div class="space-line"></div>
      </li>
      <li class="address-item-cell">
        <input class="address-item-input" placeholder="地址2(选填)" v-model="addressInfo.address2"/>
        <div class="space-line"></div>
      </li>
      <li class="address-item-cell">
        <input class="address-item-input" placeholder="城市" v-model="addressInfo.city"/>
        <div class="space-line"></div>
      </li>
      <li class="address-item-cell">
        <StepSelect v-bind:items="stateData" itemsKey="value" @selectChange="stateChange"
                    subClass="address-item-input" initialIndex="0" ref="state"/>
        <div class="space-line"></div>
      </li>
      <li class="address-item-cell">
        <input class="address-item-input" placeholder="邮编" v-model="addressInfo.postcode"/>
        <div class="space-line"></div>
      </li>
      <li class="address-item-cell">
        <input class="address-item-input" placeholder="联系电话" v-model="addressInfo.phone"/>
        <div class="space-line"></div>
      </li>
      <li class="address-item-cell" v-if="type">
        <div class="address-item-input"><img :src="defaultImg" @click="defaultClick"/>
          <p>设为默认</p></div>
      </li>
    </div>
    <div class="submit-button" @click="onSubmit"><span class="submit-button-text">确认</span></div>
  </div>
</template>

<script>
  import StepSelect from "@/components/step-select/step-select";

  export default {
    components: {StepSelect},
    data() {
      return {
        type: '',
        isDefault: true,
        defaultImg: '../../../static/assets/selected.png',
        addressInfo: {
          countryName: '',
          stateCode: '',
        },
        countryData: [{
          key: "USA",
          value: "美国"
        },
          {
            key: "JAN",
            value: "日本"
          },
          {
            key: "UK",
            value: "英国"
          }],
        stateData: [
          {
            key: "AK",
            value: "AK"
          },
          {
            key: "AL",
            value: "AL"
          },
          {
            key: "AR",
            value: "AR"
          }],
      };
    },
    methods: {
      onSubmit() {
        console.log(this.addressInfo);
      },
      countryChange(e) {
        this.addressInfo.countryName = e.value;
        console.log(e.value)
      },
      stateChange(e) {
        this.addressInfo.stateCode = e.value;
        console.log(e.value)
      },
      defaultClick() {
        this.isDefault = !this.isDefault;
        this.defaultImg = this.isDefault ? '../../../static/assets/selected.png' : '../../../static/assets/unselected.png';
      }
    },
    mounted() {
      this.addressInfo.countryName = this.$refs.country.displayText;
      this.addressInfo.stateCode = this.$refs.state.displayText;
      this.type = (this.$root.$mp.query.type == 'address_book');
    }
  }
</script>

<style>
  page {
    background-color: #f2f2f2;
  }

  .store-address {
    background-color: #f2f2f2;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  .address-form {
    margin-top: 10px;
    margin-bottom: 88px;
  }

  .address-item-cell {
    background-color: #ffffff;
    height: 60px;
    display: flex;
    /*justify-content: center;*/
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
  }

  .address-item-input {
    font-size: 14px;
    height: 59px;
    line-height: 59px;
    display: flex;
    align-items: center;
  }

  .address-item-input img {
    height: 20px;
    width: 20px;
  }

  .address-item-input p {
    font-size: 14px;
    color: #999999;
    margin-left: 8px;

  }

  .space-line {
    height: 1px;
    width: 100%;
    background-color: #e5e5e5;
  }

  .submit-button {
    display: flex;
    position: fixed;
    height: 49px;
    left: 16px;
    right: 16px;
    bottom: 26px;
    background-color: #CD0E00;
    border-radius: 24.5px;
    justify-content: center;
    align-items: center;
    z-index: 5;
  }

  .submit-button-text {
    color: #ffffff;
  }

</style>
