<template>
	<div class="chaos-item"
		v-on:mousedown.prevent="itemDown"
		v-on:click="itemClick"
	>
	</div>
</template>

<script>
export default{
	name: "ChaosItem",
	props: {
		media: {
			type: String,
			required: true
		}
	},
	methods: {
		itemDown: function(e){
			this.$emit("chaosDown", this.$el);
		},
		itemClick: function(e){
			const downPos = this.$store.state.mouseDownPos;

			if(Math.hypot((downPos.x - e.screenX), (downPos.y - e.screenY)) <
				this.$store.state.moveThreshold)
			{
				console.log("click");
			}
		}
	},
	mounted: function(){
		this.$nextTick(function () {
			const box = this.$parent.$el.getBoundingClientRect();
			const bounds = {
				width: box.width,
				height: box.height,
				x: box.x + window.scrollX,
				y: box.y + window.scrollY
			};
			let x = Math.floor(Math.random() * bounds.width) + bounds.x;
			let y = Math.floor(Math.random() * bounds.height) + bounds.y;

			if(x + this.$el.clientWidth > bounds.x + bounds.width){
				x = bounds.x + bounds.width - this.$el.clientWidth;
			}
			if(y + this.$el.clientHeight > bounds.y + bounds.height){
				y = bounds.y + bounds.height - this.$el.clientHeight;
			}

			this.$el.style.left = `${x}px`;
			this.$el.style.top = `${y}px`;
		});
	}
};
</script>

<style lang="less">
.chaos-item{
	position: absolute;
	background: white;
	min-width: 100px;
	min-height: 100px;
	display: block;
	z-index: 1;
	cursor: pointer;
}
</style>
