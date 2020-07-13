<template>
	<section class="student-profile">
		<div class="title-bar">
			<h2 class="title">{{ student.name }}</h2>
			<span class="material-icons close-btn"
				v-on:click="closeStudent"
			>
				close
			</span>
		</div>

		<div class="content-container">
			<div class="socials-container subcontainer">
				<a class="socials" target="_blank"
					v-if="student.RCA2020"
					:href="student.RCA2020"
				>
					RCA SHOW 2020 <span class="arrow"></span>
				</a>

				<a class="socials" target="_blank"
					v-if="student.portfolio"
					:href="student.portfolio"
				>
					PORTFOLIO <span class="arrow"></span>
				</a>

				<a class="socials" target="_blank"
					v-if="student.instagram"
					:href="student.instagram"
				>
					INSTAGRAM <span class="arrow"></span>
				</a>
			</div>

			<div class="subcontainer">
				<app-item class="app-item"
					:entry="projectTitle"
					mode="order"
					:boundingRect="boundingRect"

					v-on:showItem="showItem"
				></app-item>
			</div>

			<div class="subcontainer">
				<app-item class="app-item"
					v-for="entry in studentEntries"
					:entry="entry"
					mode="order"
					:boundingRect="boundingRect"

					v-on:showItem="showItem"
				></app-item>
			</div>
		</div>
	</section>
</template>

<script>
import AppItem from "./ContentItem";

export default{
	name: "StudentProfile",
	components: {
		"app-item": AppItem
	},
	props: {
		student: {
			type: Object,
			required: true
		},
		boundingRect: {
			type: [DOMRect, null],
			required: true
		}
	},
	computed: {
		studentEntries: function(){
			const entries = _.filter(this.$store.state.entries, (entry) => {
				return entry.student === this.student.name && entry.category !== "description";
			});

			return entries;
		},
		projectTitle: function(){
			const entry = _.find(this.$store.state.entries, (entry) => {
				return entry.student === this.student.name && entry.category === "description";
			});

			return entry;
		}
	},
	methods: {
		closeStudent: function(){
			this.$emit("closeStudent");
		},
		showItem: function(entry){
			this.$emit("showItem", entry);
		}
	}
};
</script>

<style lang="less" scoped>
@import url("../stylesheets/mixin.less");

.student-profile{
	min-height: 100vh;
	min-width: 100vw;
	padding: 0;

	.title-bar{
		.light-theme();

		display: flex;
		justify-content: space-between;
		align-items: center;

		.title{
			margin: 0;
			display: inline-block;
			flex-grow: 2;
			text-align: center;
			font-family: "Montserrat", sans-serif;
			font-style: italic;
			font-weight: 800;
			border: 1px solid;
			padding: 1rem;
			height: 4rem;
		}

		.close-btn{
			display: inline-block;
			padding: 1rem;
			border: 1px solid;
			border-left: none;
			height: 4rem;
			cursor: pointer;
		}
	}

	.content-container{
		padding: 2rem 4rem;

		.subcontainer{
			margin-bottom: 3rem;
			display: flex;
			flex-wrap: wrap;
			align-items: flex-start;

			.app-item{
				margin: 1rem;
			}
		}

		.socials-container{
			display: flex;

			.socials{
				.light-theme();

				padding: 0.7rem 2rem;
				border: 1px solid;
				margin-right: 3rem;
				font-family: "Montserrat", sans-serif;
				font-weight: 700;
				font-size: 1.4rem;
				text-decoration: none;

				.arrow{
					background-image: url("./arrow-black.svg");
					display: inline-block;
					width: ~"calc(30px - 0.7rem)";
					height: ~"calc(30px - 0.7rem)";
				}
			}
		}
	}
}
</style>