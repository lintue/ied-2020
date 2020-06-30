<template>
	<main id="page-container">
		<app-header></app-header>
		<app-switch></app-switch>

		<app-content></app-content>
	</main>
</template>

<script>
import Header from "./Header.vue";
import Switch from "./Switch.vue";
import Content from "./Content.vue";

export default {
	name: "App",
	components: {
		"app-header": Header,
		"app-switch": Switch,
		"app-content": Content
	},
	methods: {

	}
};
</script>

<style lang="less" scoped>
#page-container{
	min-width:100vw;
	min-height: 100vh;
}
</style>