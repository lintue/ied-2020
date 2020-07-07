<template>
	<div id="switch-btn"
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
		}
	},
	data: {

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
	img{
		width: 10vw;
		height: auto;
	}
	z-index: 1;
}
</style>
