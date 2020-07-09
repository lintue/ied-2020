<template>
	<div class="research-item">
		<h4 class="title-bar">researchquestion.txt</h4>
		<p class="research-description">
			{{ entry.description }}
		</p>
	</div>
</template>

<script>
export default{
	name: "AppItemResearch",
	props: {
		entry: {
			type: Object,
			required: true
		}
	}
};
</script>

<style lang="less" scoped>
@import url("../stylesheets/mixin.less");

.research-item{
	.light-theme();

	min-height: 0;
	border: 1px solid;
	// Subtract the container size/3 by the margin on the element
	width: ~"calc((100vw - 5rem) / 3 - 2rem)";
	font-size: 0.7rem;
	font-family: "IBM Plex Mono", monospace;
	box-shadow: 9px 10px 0px 0px rgba(0,0,0,1);

	.title-bar{
		margin: 0;
		text-align: center;
		font-family: "IBM Plex Sans", sans-serif;
		padding: 0.25rem;
		border-bottom: 1px solid;
	}

	.research-description{
		padding: 0 1rem;
	}
}
</style>