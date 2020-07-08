<template>
	<div class="item"
		:class="mode"
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
		},
		mode: {
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
		},
		changeElPosition: function(){
			if(this.mode === "chaos"){
				const box = this.$parent.$el.getBoundingClientRect();
				const bounds = {
					width: box.width,
					height: box.height - 50,
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
.item{
	min-width: 100px;
	min-height: 100px;
	display: inline-block;
	z-index: 1;
	cursor: pointer;
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
