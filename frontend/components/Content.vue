<template>
	<div id="main-content" :class="mode">
		<div id="grid" :class="mode">

			<student-profile id="items"
				v-if="mode === 'order' && showingStudent"
				:student="showingStudent"

				v-on:closeStudent="closeStudent"
				v-on:showItem="showItem"
			></student-profile>

			<section id="items"
				v-else-if="mode === 'chaos'"
			>
				<app-item
					v-for="(entry, index) in entries"
					:class="['app-item', entry.category === 'book' ? 'book' : '']"
					:key="index"

					:entry="entry"
					:mode="mode"
					:isBook="entry.category === 'book'"
					:highlighted="isHighlighted(entry.student)"

					v-on:chaosDown="chaosDown"
					v-on:showItem="showItem"
				></app-item>

				<app-item class="app-item"
					v-for="student in students"
					:key="student.name"

					:entry="student"
					:mode="mode"
					:highlighted="isHighlighted(student.name)"

					v-on:chaosDown="chaosDown"
					v-on:showItem="showItem"
				></app-item>

				<div class="close-student-button"
					v-if="showingStudent"
					v-on:click="closeStudent"
				></div>
			</section>

			<section id="items" v-else-if="mode === 'order'">
				<section>
					<h2 class="section-title">
						STUDENTS
					</h2>
					<div class="order-items">
						<app-item class="app-item"
							v-for="student in students"
							:key="student.name"

							:entry="student"
							:mode="mode"

							v-on:chaosDown="chaosDown"
							v-on:showItem="showItem"
						></app-item>
					</div>
				</section>

				<section>
					<h2 class="section-title">
						PROJECT TITLE
					</h2>
					<div class="order-items">
						<app-item class="app-item"
							v-for="(entry, index) in projectTitle"
							:key="index"

							:entry="entry"
							:mode="mode"

							v-on:chaosDown="chaosDown"
							v-on:showItem="showItem"
						></app-item>
					</div>
				</section>

				<section class="media-centric">
					<h2 class="section-title">
						PROJECT
					</h2>
					<div class="order-items">
						<app-item class="app-item"
							v-for="(entry, index) in project"
							:key="index"

							:entry="entry"
							:mode="mode"

							v-on:chaosDown="chaosDown"
							v-on:showItem="showItem"
						></app-item>
					</div>
				</section>

				<section class="media-centric">
					<h2 class="section-title">
						MAKING OF
					</h2>
					<div class="order-items">
						<app-item class="app-item"
							v-for="(entry, index) in makingOf"
							:key="index"

							:entry="entry"
							:mode="mode"

							v-on:chaosDown="chaosDown"
							v-on:showItem="showItem"
						></app-item>
					</div>
				</section>

				<section class="research-centric">
					<h2 class="section-title">
						RESEARCH
					</h2>
					<div class="order-items">
						<app-item class="app-item"
							v-for="(entry, index) in research"
							:key="index"

							:entry="entry"
							:mode="mode"

							v-on:chaosDown="chaosDown"
							v-on:showItem="showItem"
						></app-item>
					</div>
				</section>

				<section class="media-centric">
					<h2 class="section-title">
						LIBRARY
					</h2>
					<div class="order-items">
						<app-item class="app-item book"
							v-for="(entry, index) in library"
							:key="index"

							:entry="entry"
							:mode="mode"
							isBook

							v-on:chaosDown="chaosDown"
							v-on:showItem="showItem"
						></app-item>
					</div>
				</section>

				<section class="media-centric">
					<h2 class="section-title">
						EVENTS
					</h2>
					<div class="order-items">
						<app-item class="app-item"
							v-for="(entry, index) in events"
							:key="index"

							:entry="entry"
							:mode="mode"

							v-on:chaosDown="chaosDown"
							v-on:showItem="showItem"
						></app-item>
					</div>
				</section>

				<section class="media-centric">
					<h2 class="section-title">
						CORONA OFFICE
					</h2>
					<div class="order-items">
						<app-item class="app-item"
							v-for="(entry, index) in coronaOffice"
							:key="index"

							:entry="entry"
							:mode="mode"

							v-on:chaosDown="chaosDown"
							v-on:showItem="showItem"
						></app-item>
					</div>
				</section>

				<section class="media-centric">
					<h2 class="section-title">
						LOCKDOWN TASK
					</h2>
					<div class="order-items">
						<app-item class="app-item"
							v-for="(entry, index) in lockdownTask"
							:key="index"

							:entry="entry"
							:mode="mode"

							v-on:chaosDown="chaosDown"
							v-on:showItem="showItem"
						></app-item>
					</div>
				</section>
			</section>

		</div>
	</div>
</template>

<script>
import AppItem from "./ContentItem.vue";
import StudentProfile from "./ContentStudent.vue";

export default{
	name: "Content",
	components: {
		"app-item": AppItem,
		"student-profile": StudentProfile
	},
	props: {
		mode: {
			type: String,
			required: true
		},
		entries: {
			type: Array,
			default: []
		},
		students: {
			type: Array,
			default: []
		},
		showingStudent: {
			type: [Object, null],
			default: null
		}
	},
	computed: {
		projectTitle: function(){
			return _.filter(this.entries, (entry) => {
				return entry.category === "description";
			});
		},
		project: function(){
			return _.filter(this.entries, (entry) => {
				return entry.category === "main";
			});
		},
		makingOf: function(){
			return _.filter(this.entries, (entry) => {
				return entry.category === "making";
			});
		},
		research: function(){
			return _.filter(this.entries, (entry) => {
				return entry.category === "research";
			});
		},
		library: function(){
			return _.filter(this.entries, (entry) => {
				return entry.category === "book";
			});
		},
		events: function(){
			return _.filter(this.entries, (entry) => {
				return entry.category === "event";
			});
		},
		coronaOffice: function(){
			return _.filter(this.entries, (entry) => {
				return entry.category === "office";
			});
		},
		lockdownTask: function(){
			return _.filter(this.entries, (entry) => {
				return entry.category === "lockdown";
			});
		}
	},
	methods: {
		chaosDown: function(el){
			this.$emit("chaosDown", el);
		},
		showItem: function(entry){
			this.$emit("showItem", entry);
		},
		closeStudent: function(){
			this.$emit("closeStudent");
		},
		isHighlighted: function(studentName){
			if(this.showingStudent === null){
				return null;
			}else{
				if(studentName === this.showingStudent.name){
					return true;
				}else{
					return false;
				}
			}
		}
	}
};
</script>

<style lang="less" scoped>
@import url("../stylesheets/mixin.less");

#main-content{
	z-index: 0;

	&.chaos{
		height: 1000vh;

		#items{
			.close-student-button{
				display: block;
				width: 100vw;
				height: 100vh;
				z-index: 5;
				position: fixed;
				left: 0;
				top: 0;
			}
		}
	}

	&.order{
		#items{
			position: relative;
			margin-top: 10vh;
			z-index: 10;

			&.student-profile{
				padding: 0;
			}

			.section-title{
				.light-theme();

				display: block;
				width: 100vw;
				padding: 0.5rem 4rem;
				border: 1px solid;
				margin: 0;
			}

			.order-items{
				padding: 1.5rem 2.5rem;
				display: flex;
				flex-wrap: wrap;

				.app-item{
					margin: 1rem;
				}
			}

			.media-centric{
				.order-items{
					flex-direction: row;

					.app-item{
						height: 240px;

						&.book{
							height: 170px;
						}
					}
				}
			}

			.research-centric{
				.order-items{
					flex-direction: column;
					height: 230vh;
				}
			}
		}
	}

	#items{
		position: absolute;
		padding-top: 10vh;
	}

	#grid{
		min-width: 100vw;
		min-height: 100vh;
		width: 100%;
		height: 100%;
		position: relative;

		&.chaos{
			border: 1px solid white;
			overflow: hidden;
		}

		&.chaos:before{
			content: "";
			position: absolute;
			width: 200%;
			height: 200%;
			top: -50%;
			left: -50%;
			background: url("./grid-chaos.svg") 0 0 repeat;
			background-size: 100vw 100vw;
			transform: rotate(10deg);
		}

		&.order:before{
			content: "";
			position: absolute;
			background-image: url("./grid-order.svg");
			background-repeat: repeat-y;
			background-size: 100vw;
			min-width: 100%;
			min-height: 100%;
			top: 0;
			left: 0;
		}
	}
}


</style>
