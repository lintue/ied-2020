<template>
	<div class="item"
		:class="[mode, entryType]"
		v-on:mousedown.prevent="itemDown"
		v-on:click="itemClick"
	>
		<component
			:is="entryType"
			:entry="entry"
		></component>
	</div>
</template>

<script>
import ItemResearch from "./ContentItemResearch.vue";
import ItemMedia from "./ContentItemMedia.vue";
import ItemStudent from "./ContentItemStudent.vue";
import ItemProject from "./ContentItemProject.vue";

export default{
	name: "AppItem",
	components: {
		"item-research": ItemResearch,
		"item-media": ItemMedia,
		"item-student": ItemStudent,
		"item-project": ItemProject
	},
	props: {
		entry:{
			type: [Object, null],
			default: null
		},
		mode: {
			type: String,
			required: true
		}
	},
	computed: {
		entryType: function(){
			if(this.entry.category === "research"){
				return "item-research";
			}else if(_.contains([
				"main",
				"making",
				"office",
				"lockdown",
				"studio",
				"add",
				"book"
			], this.entry.category)){
				return "item-media";
			}else if(this.entry.category === "description"){
				return "item-project";
			}else if(this.entry.name && this.entry.RCA2020){
				return "item-student";
			}else{
				return "";
			}
		}
	},
	methods: {
		itemDown: function(e){
			this.$emit("chaosDown", this.$el);
		},
		itemClick: function(e){
			const downPos = this.$store.state.mouseDownPos;

			if(Math.hypot((downPos.x - e.screenX), (downPos.y - e.screenY)) <
				this.$store.state.moveThreshold || this.$store.state.mode === "order")
			{
				this.$emit("showItem", this.entry);
			}
		},
		changeElPosition: function(){
			if(this.mode === "chaos"){
				const box = this.$parent.$el.getBoundingClientRect();
				const bounds = {
					width: box.width,
					height: box.height,
					x: box.x + window.scrollX,
					y: box.y + window.scrollY
				};
				let x = Math.floor(Math.random() * bounds.width) + bounds.x;
				let y = Math.floor(Math.random() * (bounds.height - window.innerHeight/10)) + bounds.y + window.innerHeight/10;

				if(x + this.$el.clientWidth > bounds.x + bounds.width){
					x = bounds.x + bounds.width - this.$el.clientWidth;
				}
				if(y + this.$el.clientHeight > bounds.y + bounds.height){
					y = bounds.y + bounds.height - this.$el.clientHeight;
				}

				this.$el.style.left = `${x}px`;
				this.$el.style.top = `${y}px`;
			}else{
				this.$el.style.left = "revert";
				this.$el.style.top = "revert";
			}
		}
	},
	watch: {
		mode: function(){
			this.changeElPosition();
		}
	},
	mounted: function(){
		this.$nextTick(function () {
			this.changeElPosition();
		});
	}
};
</script>

<style lang="less" scoped>
@import url("../stylesheets/mixin.less");

.item{
	min-width: 100px;
	display: inline-block;
	z-index: 1;
	cursor: pointer;

	&.item-research{
		min-height: 0;
	}

	&.item-student{
		min-height: 0;
	}
}

.chaos{
	position: absolute;
	background: grey;
}

.order{
	position: relative;
	left: initial;
	top: initial;
	background: grey;
}
</style>
