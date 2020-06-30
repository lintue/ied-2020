<template>
	<div class="chaos-item"
		v-on:mousedown.prevent="itemDown"
		v-on:mouseup="itemUp"
		v-on:mousemove="itemMove"
	>
	</div>
</template>

<script>
export default{
	name: "ChaosItem",
	props: {
		image: {
			type: String,
			required: true
		}
	},
	data: function(){
		return {
			mouseIsDown: false,
			pMouseX: null,
			pMouseY: null
		};
	},
	methods: {
		itemDown: function(e){
			this.mouseIsDown = true;
		},
		itemUp: function(e){
			this.mouseIsDown = false;
		},
		itemMove: function(e){
			if(this.mouseIsDown){
				if(this.pMouseX !== null && this.pMouseY !== null){
					// Get mouse delta
					const deltaX = e.screenX - this.pMouseX;
					const deltaY = e.screenY - this.pMouseY;

					const elBoundingBox = this.$el.getBoundingClientRect();
					this.$el.style.left = `${elBoundingBox.x + deltaX}px`;
					this.$el.style.top = `${elBoundingBox.y + deltaY}px`;
				}

				this.pMouseX = e.screenX;
				this.pMouseY = e.screenY;
			}
		}
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
}
</style>