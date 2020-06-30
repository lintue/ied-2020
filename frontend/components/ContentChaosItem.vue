<template>
	<div class="chaos-item"
		v-on:mousedown.prevent="itemDown"
	>
	</div>
</template>

<script>
export default{
	name: "ChaosItem",
	props: {
		image: {
			type: String,
			required: true
		}
	},
	data: function(){
		return {
		};
	},
	methods: {
		itemDown: function(e){
			this.$emit("chaosDown", this.$el);
		}
	}
};
</script>

<style lang="less">
.chaos-item{
	position: absolute;
	background: white;
	min-width: 100px;
	min-height: 100px;
	display: block;
}
</style>