<template>
  <div class="orders-page">
      <div class="sale-divide"></div>
      <!-- 销售盒子 -->
      <div v-for="item in items" :key="item.orderId">
        <corderbox :boxData="item"></corderbox>
        <div class="sale-divide"></div>
      </div>
  </div>
</template>

<script>
// Use Vuex
import corderbox from "@/components/c-orderbox/c-orderbox";
import itemData from "./data";

export default {
  data() {
    return {
      items:itemData.items
    };
  },
  components: {
    corderbox
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
