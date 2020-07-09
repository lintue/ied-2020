<template>
	<article id="item-container"
		:class="[entry ? '' : 'hidden', justify]"
		v-on:click.prevent.stop="closeItem"
	>

		<item-frame
			v-if="baseDisplay"
			:entry="entry"
			v-on:justify="setJustify"
		>
		</item-frame>
		<item-description
			v-if="descriptionDisplay"
			:entry="entry"
		>
		</item-description>

	</article>
</template>

<script>
import ItemFrame from "./ItemFrame.vue";
import ItemDescription from "./ItemDescription.vue";

export default{
	name: "ItemContainer",
	components: {
		"item-frame": ItemFrame,
		"item-description": ItemDescription
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
	computed: {
		baseDisplay: function(){
			return _.contains([
				"main",
				"making",
				"office",
				"lockdown",
				"studio",
				"add"
			], this.entry.category);
		},
		descriptionDisplay: function(){
			return this.entry.category === "description";
		}
	},
	methods: {
		closeItem: function(){
			this.$emit("closeItem");
		},
		setJustify: function(value){
			this.justify = value;
		}
	},
	mounted: function(){
		this.$nextTick(() => {
			if(this.$el.querySelector("#item-content").clientHeight > window.innerHeight){
				this.justify = "justify-start";
			}else{
				this.justify = "justify-center";
			}
		});
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