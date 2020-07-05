<template>
	<div id="main-content">
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
	methods: {
		chaosDown: function(el){
			this.$emit("chaosDown", el);
		}
	}
};
</script>

<style lang="less" scoped>
#main-content{
	background-image: url("../stylesheets/grid.svg");
	background-repeat: repeat-y;
	background-size: cover;
	min-width: 100vw;
	min-height: 100vh;
}
</style>