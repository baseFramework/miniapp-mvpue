<template>
  <div class="home-page">
       <chead :img="img"></chead>
  </div>
</template>

<script>
// Use Vuex
import chead from "@/components/c-head/c-head";

export default {
  data() {
    return {
        img:'./../../static/assets/logo.png'
    };
  },
  components: {
    chead
  },
  methods: {}
};
</script>
<style>

</style>
