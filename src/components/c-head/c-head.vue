<template>
  <div class="c-head-wrap">
      <img :src="img" />
  </div>
</template>

<script>
export default {
    props:["img"]
}
</script>

<style>
.c-head-wrap{
    width: 100%;
    height: 46.5px;
    text-align: center;
}
.c-head-wrap img{
    width: 120px;
    height: 28px;
}
</style>
