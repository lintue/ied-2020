<template>
	<main id="page-container">
		<app-header></app-header>
	</main>
</template>

<script>
import Header from "./Header.vue";

export default {
	name: "App",
	components: {
		"app-header": Header
	},
	methods: {

	}
};
</script>

<style lang="less" scoped>
#page-container{
	background-color: #242424;
	min-width:100vw;
	min-height: 100vh;
}
</style>