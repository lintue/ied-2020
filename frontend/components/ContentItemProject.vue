<template>
	<div class="student-item">
		<h2 v-html="entry.workTitle.replace(new RegExp(' +', 'g'), '&nbsp;')"></h2>
	</div>
</template>

<script>
export default{
	name: "AppStudentProject",
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
	.dark-theme();

	padding: 0.5rem;
	background-color: black;

	h2{
		margin: 0;
		font-weight: 400;
		font-size: 1.5rem;
		text-align: center;
	}
}
</style>