<template>
	<div id="main-content">
		<chaos-item image=""></chaos-item>
	</div>
</template>

<script>
import ChaosItem from "./ContentChaosItem.vue";

export default{
	name: "Content",
	components: {
		"chaos-item": ChaosItem
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