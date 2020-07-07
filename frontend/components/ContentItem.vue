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
		image: {
			type: String,
			required: true
		}
	},
	data: function(){
		return {
		};
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
}
</style>
