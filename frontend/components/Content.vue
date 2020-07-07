<template>
	<div id="main-content"
		:class="mode"
	>
		<app-item
			image=""
			v-on:chaosDown="chaosDown"
		></app-item>
		<div id="grid"
			:class="mode"
		></div>
	</div>
</template>

<script>
import AppItem from "./ContentItem.vue";

export default{
	name: "Content",
	components: {
		"app-item": AppItem
	},
	props: {
		mode: {
			type: String,
			required: true
		}
	},
	methods: {
		chaosDown: function(el){
			this.$emit("chaosDown", el);
		}
	}
};
</script>

<style lang="less" scoped>
#main-content{
}

#grid{
	min-width: 100vw;
	min-height: 100vh;
	border: 1px solid white;
	position: relative;
	overflow: hidden;

	&.chaos:before{
	content: "";
	position: absolute;
	width: 200%;
	height: 200%;
	top: -50%;
	left: -50%;
	background: url("./grid-chaos.svg") 0 0 repeat;
	transform: rotate(10deg);
	-webkit-transform: rotate(10deg);
	-moz-transform: rotate(10deg);
	-ms-transform: rotate(10deg);
	-o-transform: rotate(10deg);
	}

	&.order:before{
	content: "";
	position: absolute;
	background-image: url("./grid-order.svg");
	background-repeat: repeat-y;
	background-size: cover;
	min-width: 100%;
	min-height: 100%;
	}
}


</style>
