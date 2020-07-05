<template>
	<div id="main-content"
		:class="mode"
	>
		<app-item
			image=""
			v-on:chaosDown="chaosDown"
		></app-item>
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
	background-repeat: repeat-y;
	background-size: cover;
	min-width: 100vw;
	min-height: 100vh;

	&.chaos{
		background-image: url("./grid-chaos.svg");
	}

	&.order{
		background-image: url("./grid-order.svg");
	}
}
</style>