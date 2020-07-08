<template>
	<main id="page-container"
		:class="mode"
	>
		<app-header
			:mode="mode"
		></app-header>
		<app-switch class="app-switch"
			:mode="mode"
			v-on:switchMode="switchMode"
		></app-switch>

		<app-content
			:mode="mode"
			:entries="entries"
			v-on:chaosDown="chaosDown"
			v-on:showItem="showItem"
		></app-content>

		<item-container
			:title="showingItem"
			v-on:closeItem="closeItem"
		></item-container>
	</main>
</template>

<script>
import Header from "./Header.vue";
import Switch from "./Switch.vue";
import Content from "./Content.vue";
import ItemContainer from "./Item.vue";

export default {
	name: "App",
	components: {
		"app-header": Header,
		"app-switch": Switch,
		"app-content": Content,
		"item-container": ItemContainer
	},
	props: {
		mode: {
			type: String,
			required: true
		},
		entries: {
			type: Array,
			default: []
		}
	},
	data: function(){
		return {
			showingItem: ""
		};
	},
	methods: {
		chaosDown: function(el){
			this.$emit("chaosDown", el);
		},
		switchMode: function(){
			this.$emit("switchMode");
		},
		showItem: function(title){
			this.showingItem = title;
		},
		closeItem: function(){
			this.showingItem = "";
		}
	}
};
</script>

<style lang="less" scoped>
#page-container{
	min-width:100vw;
	min-height: 100vh;
	overflow-x: hidden;

	&.chaos{
		background-color: #242424;
	}

	&.order{
		background-color: white;
	}
}

.app-switch{
	position: fixed;
	right: 40px;
	top: 100px;
}
</style>