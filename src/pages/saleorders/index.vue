<template>
  <div class="saleorders-page">
     
      <div class="sale-divide"></div>
      <!-- 销售盒子 -->
      <div v-for="item in items" :key="item.orderId">
        <csalebox :boxData="item"></csalebox>
        <div class="sale-divide"></div>
      </div>
  </div>
</template>

<script>
// Use Vuex
import csalebox from "@/components/c-salebox/c-salebox";
import itemData from "./data";

export default {
  data() {
    return {
      items:itemData.items
    };
  },
  components: {
    csalebox
  },
  methods: {}
};
</script>
<style>
.sale-divide {
  width: 100%;
  height: 10px;
  background-color: #f2f2f2;
}
</style>
