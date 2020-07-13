<template>
	<div id="main-content" :class="mode">
		<div id="preload">
			<img src="./grid-chaos.svg">
			<img src="./grid-order.svg">
		</div>

		<template v-if="computedMounted">
			<div id="grid"
				:class="mode"
			>

				<student-profile id="items"
					v-if="mode === 'order' && showingStudent"
					:student="showingStudent"
					:boundingRect="computedRect"

					v-on:closeStudent="closeStudent"
					v-on:showItem="showItem"
				></student-profile>

				<section id="items"
					v-else-if="mode === 'chaos'"
				>
					<app-item
						v-for="entry in entries"
						:class="['app-item', entry.category === 'book' ? 'book' : '']"

						:entry="entry"
						:mode="mode"
						:isBook="entry.category === 'book'"
						:highlighted="isHighlighted(entry.student)"
						:boundingRect="computedRect"

						v-on:chaosDown="chaosDown"
						v-on:showItem="showItem"
					></app-item>

					<app-item class="app-item"
						v-for="student in students"

						:entry="student"
						:mode="mode"
						:highlighted="isHighlighted(student.name)"
						:boundingRect="computedRect"

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

								:entry="student"
								:mode="mode"
								:boundingRect="computedRect"

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
								v-for="entry in projectTitle"

								:entry="entry"
								:mode="mode"
								:boundingRect="computedRect"

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
								v-for="entry in project"

								:entry="entry"
								:mode="mode"
								:boundingRect="computedRect"

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
								v-for="entry in makingOf"

								:entry="entry"
								:mode="mode"
								:boundingRect="computedRect"

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
								v-for="entry in research"

								:entry="entry"
								:mode="mode"
								:boundingRect="computedRect"

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
								v-for="entry in library"

								:entry="entry"
								:mode="mode"
								isBook
								:boundingRect="computedRect"

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
								v-for="entry in events"

								:entry="entry"
								:mode="mode"
								:boundingRect="computedRect"

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
								v-for="entry in coronaOffice"

								:entry="entry"
								:mode="mode"
								:boundingRect="computedRect"

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
								v-for="entry in lockdownTask"

								:entry="entry"
								:mode="mode"
								:boundingRect="computedRect"

								v-on:chaosDown="chaosDown"
								v-on:showItem="showItem"
							></app-item>
						</div>
					</section>

					<section class="media-centric">
						<h2 class="section-title">
							STUDIO MOMENT
						</h2>
						<div class="order-items">
							<app-item class="app-item"
								v-for="entry in studioMoment"

								:entry="entry"
								:mode="mode"
								:boundingRect="computedRect"

								v-on:chaosDown="chaosDown"
								v-on:showItem="showItem"
							></app-item>
						</div>
					</section>

					<section class="media-centric">
						<h2 class="section-title">
							ADDITIONAL
						</h2>
						<div class="order-items">
							<app-item class="app-item"
								v-for="entry in additional"

								:entry="entry"
								:mode="mode"
								:boundingRect="computedRect"

								v-on:chaosDown="chaosDown"
								v-on:showItem="showItem"
							></app-item>
						</div>
					</section>
				</section>

			</div>
		</template>
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
	data: function(){
		return {
			boundingRect: new DOMRect(),
			isMounted: false
		};
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
			return _.sortBy(_.filter(this.entries, (entry) => {
				return entry.category === "event";
			}), (entry) => {
				const d = moment(`${entry.date} ${entry.time}`, "DD/MM/YYYY hh:mm");
				return d.unix();
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
		},
		studioMoment: function(){
			return _.filter(this.entries, (entry) => {
				return entry.category === "studio";
			});
		},
		additional: function(){
			return _.filter(this.entries, (entry) => {
				return entry.category === "add";
			});
		},
		computedRect: function(){
			return this.boundingRect;
		},
		computedMounted: function(){
			return this.isMounted;
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
	},
	mounted: function(){
		this.boundingRect = this.$el.getBoundingClientRect();
		this.isMounted = true;
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
			margin-top: 4rem;
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
		width: 300%;
		height: 100%;
		position: relative;

		&.chaos{
			overflow: hidden;
		}

		&.order{
			max-width: 100vw;
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

#preload{
	display: none;
}
</style>
