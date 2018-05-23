<template>
	<div class="c-quantity-root">
    <img class="c-quantity-img-size" src="./../../static/assets/quantity-cut@2x.png" @click="cutClick"/>
    <p class="c-quantity-txt">{{currentNum}}</p>
    <img class="c-quantity-img-size" src="./../../static/assets/quantity-add@2x.png" @click="addClick"/>

	</div>
</template>

<script>
	export default {
		props: ['tabTitleL', 'tabTitleR'],
		data() {
			return {
				currentNum: 1,
			};
		},
	    methods: {
        cutClick() {
          if (this.currentNum > 1) {
            this.currentNum--
            this.$emit('quantityChange', this.currentNum)
          }

	    	},

        addClick() {
          if (this.currentNum < 9) {
            this.currentNum++
            this.$emit('quantityChange', this.currentNum)
          }
	    	}
	    }
	}
</script>

<style>
.c-quantity-root {
	display: flex;
	flex-direction: row;
  align-items: center;
}

.c-quantity-img-size {
	height: 24px;
	width: 24px;
}

.c-quantity-txt {
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin-left: 16px;
  margin-right: 16px;
}

</style>
