<template>
	<div class="student-item">
		<h2 v-html="entry.name.replace(' ', '&nbsp;')"></h2>
	</div>
</template>

<script>
export default {
	name: "AppStudentItem",
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

.student-item{
	.light-theme();

	padding: 0.5rem;
	border: 3px solid;

	h2{
		margin: 0;
		font-family: "Montserrat", sans-serif;
		font-style: italic;
		font-weight: 800;
		font-size: 1.5rem;
		text-align: center;
	}
}
</style>