<template>
	<div id="switch-btn" v-if="!isMobile"
		v-on:click="switchMode"
	>
		<img :src="[mode === 'chaos' ? './switch-chaos.svg' : './switch-order.svg']">
	</div>
</template>

<script>
export default{
	name: "ModeSwitch",
	props: {
		mode: {
			type: String,
			required: true
		},
		isMobile: {
			type: Boolean,
			required: true
		}
	},
	methods: {
		switchMode: function(e){
			this.$emit("switchMode");
		}
	}
};
</script>

<style lang="less" scoped>
#switch-btn{
	z-index: 100;
	cursor: pointer;

	img{
		width: 10vw;
		height: auto;
	}
}
</style>
