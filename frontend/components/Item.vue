<template>
	<article id="item-container"
		:class="[entry ? '' : 'hidden', justify]"
		v-on:click.prevent.stop="closeItem"
	>

		<item-frame
			:entry="entry"
			v-on:justify="setJustify"
		>

		</item-frame>

	</article>
</template>

<script>
import ItemFrame from "./ItemFrame.vue";

export default{
	name: "ItemContainer",
	components: {
		"item-frame": ItemFrame
	},
	props: {
		entry: {
			type: [Object, null],
			default: null
		}
	},
	data: function(){
		return {
			justify: "justify-center"
		};
	},
	methods: {
		closeItem: function(){
			this.$emit("closeItem");
		},
		setJustify: function(value){
			this.justify = value;
		}
	}
};
</script>

<style lang="less" scoped>
@import url("../stylesheets/mixin.less");

#item-container{
	display: flex;
	flex-direction: column;
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	overflow-y: scroll;
	z-index: 1000;
	background: rgba(0, 0, 0, 0.5);


	&.hidden{
		display: none;
	}

	&.justify-center{
		justify-content: center;
	}

	&.justify-start{
		justify-content: flex-start;
	}
}
</style>