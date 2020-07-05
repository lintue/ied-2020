<template>
	<main id="page-container"
		:class="mode"
	>
		<app-header></app-header>
		<app-switch></app-switch>

		<app-content
			v-on:chaosDown="chaosDown"
		></app-content>
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
	props: {
		mode: {
			type: String,
			required: true
		}
	},
	methods: {
		chaosDown: function(el){
			if(this.mode === "chaos"){
				this.$root.$data.chaosElement = el;
			}
		}
	}
};
</script>

<style lang="less" scoped>
#page-container{
	min-width:100vw;
	min-height: 100vh;
	background-color: #242424;
}
</style>