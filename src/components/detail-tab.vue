<template>
	<div class="root">

		<div v-if="selectTab1" class="tab-box" @click="tab1Click"><p class="tab-title">{{tabTitleL}}</p></div>
		<div v-else class="tab-box tab-box-n" @click="tab1Click"><p class="tab-title">{{tabTitleL}}</p></div>

		<div class="divider"/>

		<div v-if="!selectTab1" class="tab-box" @click="tab2Click"><p class="tab-title">{{tabTitleR}}</p></div>
		<div v-else class="tab-box tab-box-n" @click="tab2Click"><p class="tab-title">{{tabTitleR}}</p></div>
	</div>
</template>

<script>
	export default {
		props: ['tabTitleL', 'tabTitleR'],
		data() {
			return {
				selectTab1: true,
			};
		},
	    methods: {
	    	tab1Click() {
	    		this.selectTab1 = true;
				this.$emit('tabChange', true)
	    	},

	    	tab2Click() {
	    		this.selectTab1 = false;
				this.$emit('tabChange', false)
	    	}
	    }
	}
</script>

<style>
.root {
	display: flex;
	flex-direction: row;
}

.divider {
	background-color: #E5E5E5;
	height: 48px;
	width: 1px;
}

.tab-box {
	display: flex;
	flex: 1;
	height: 48px;
	align-items: center;
	justify-content: center;
}

.tab-box-n {
	background-color:  #F6F6F6;
	border-bottom-style: solid;
	border-bottom-width: 1px;
	border-bottom-color: #E5E5E5;
}

.tab-title {
	font-size: 14px;
	color: #333;
}

</style>
