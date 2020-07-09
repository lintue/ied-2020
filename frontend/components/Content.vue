<template>
	<div id="main-content" :class="mode">
		<div id="grid" :class="mode">
			<section id="items"
				v-if="mode === 'chaos'"
			>
				<app-item class="app-item"
					v-for="(entry, index) in entries"
					:key="index"

					:entry="entry"
					:mode="mode"

					v-on:chaosDown="chaosDown"
					v-on:showItem="showItem"
				></app-item>
			</section>

			<section id="items" v-else>
				<section>
					<h2 class="section-title">
						STUDENTS
					</h2>
					<div class="order-items"></div>
				</section>

				<section>
					<h2 class="section-title">
						PROJECT TITLE
					</h2>
					<div class="order-items"></div>
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
					<div class="order-items"></div>
				</section>

				<section class="media-centric">
					<h2 class="section-title">
						EVENTS
					</h2>
					<div class="order-items"></div>
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

export default{
	name: "Content",
	components: {
		"app-item": AppItem
	},
	props: {
		mode: {
			type: String,
			required: true
		},
		entries: {
			type: Array,
			default: []
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
		}
	}
};
</script>

<style lang="less" scoped>
@import url("../stylesheets/mixin.less");

#main-content{
	z-index: 0;

	&.chaos{
		height: 300vh;
	}

	&.order{
		#items{
			position: relative;
			margin-top: 10vh;
			z-index: 10;

			.section-title{
				.light-theme();

				display: block;
				width: 100vw;
				padding: 0.5rem 4rem;
				border: 1px solid;
				margin: 0;
			}

			.order-items{
				padding: 2.5rem;
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
			min-width: 100%;
			min-height: 100%;
			top: 0;
			left: 0;
		}
	}
}


</style>
