<template>
	<div id="item-content"
			v-on:click.stop=""
	>
	</div>
</template>

<script>
export default{
	name: "ItemDescription",
	props: {
		entry: {
			type: Object,
			required: true
		}
	},
	methods: {
		closeItem: function(){
			this.$emit("closeItem");
		}
	}
};
</script>

<style lang="less" scoped>
@import url("../stylesheets/mixin.less");

#item-content{
	.dark-theme();
}
</style>