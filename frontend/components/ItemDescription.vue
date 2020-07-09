<template>
	<div id="item-content"
		:class="entry.category"
		v-on:click.stop=""
	>
		<section id="title-bar">
			<div id="file-name">{{ entry.workTitle || "Description" }}</div>
			<div id="close-item-btn"
				v-on:click="closeItem"
			>
				<span class="material-icons">
					close
				</span>
			</div>
		</section>

		<section id="name"
			v-if="entry.student"
		>
			{{ entry.student }}
		</section>

		<section id="description"
			v-if="entry.description"
		>
			<h2 id="project-title">
				{{ entry.workTitle || "Description" }}
			</h2>
			<p id="description-text"
				v-if="entry.description"
			>
				{{ entry.description }}
			</p>
		</section>
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
	max-width: 1000px;
	width: 70%;
	border: 1px solid;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	padding-bottom: 2rem;

	&.description{
		.dark-theme();
	}

	&.research{
		.light-theme();
	}

	#title-bar{
		text-align: center;
		font-size: 1.7rem;
		border-bottom: 1px solid;

		#file-name{
			padding: 0.5rem;
			display: inline-block;
			font-weight: 500;
		}

		#close-item-btn{
			float: right;
			display: inline-block;
			padding: 0.4rem;
			font-size: 1.9rem;
			cursor: pointer;
			border-left: 1px solid;
		}
	}

	#name{
		.light-theme();

		font-family: "Montserrat", sans-serif;
		font-weight: 800;
		font-size: 1.5rem;
		font-style: italic;
		padding: 0.5rem 3rem;
		margin: 2rem 3rem;
		border: 3px solid;
		display: inline-block;
	}

	#description{
		padding: 0 3rem;

		#project-title{
			font-family: "Montserrat", sans-serif;
			font-weight: 700;
			font-size: 2.2rem;
			margin: 0;
		}

		#description-text{
			font-weight: 400;
		}
	}
}
</style>