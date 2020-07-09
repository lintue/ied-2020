<template>
	<article id="item-container"
		:class="[entry ? '' : 'hidden', justify]"
		v-on:click.prevent.stop="closeItem"
	>

		<div id="item-content"
			v-on:click.stop=""
		>
			<section id="title-bar">
				<div id="file-name">{{ entry.workTitle }}</div>
				<div id="close-item-btn"
					v-on:click="closeItem"
				>
					<span class="material-icons">
						close
					</span>
				</div>
			</section>

			<section id="media"
				v-if="entry.media"
			>
				<img
					:src="mediaPath"
					v-on:load="mediaLoaded"
				>
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
					{{ entry.workTitle }}
				</h2>
				<p id="description-text"
					v-if="entry.description"
				>
					{{ entry.description }}
				</p>
			</section>
		</div>

	</article>
</template>

<script>
export default{
	name: "ItemContainer",
	props: {
		entry: {
			type: [Object, null],
			default: null
		}
	},
	data: function(){
		return {
			justify: "justify-center"
		};
	},
	computed: {
		mediaPath: function(){
			return `./media/${this.entry.media}`;
		}
	},
	methods: {
		closeItem: function(){
			this.$emit("closeItem");
		},
		mediaLoaded: function(){
			if(this.$el.querySelector("#item-content").clientHeight > window.innerHeight){
				this.justify = "justify-start";
			}else{
				this.justify = "justify-center";
			}
		}
	}
};
</script>

<style lang="less" scoped>
.light-theme(){
	background: white;
	color: black;
	border-color: black;
}

.dark-theme(){
	background: #242424;
	color: white;
	border-color: white;
}

#item-container{
	display: flex;
	flex-direction: column;
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	overflow-y: scroll;
	z-index: 1000;
	background: rgba(0, 0, 0, 0.5);


	&.hidden{
		display: none;
	}

	&.justify-center{
		justify-content: center;
	}

	&.justify-start{
		justify-content: flex-start;
	}

	#item-content{
		.dark-theme();

		max-width: 1000px;
		width: 70%;
		border: 1px solid;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		padding-bottom: 3rem;

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

		#media{
			img{
				max-width: 1000px;
				width: ~"calc(70vw - 2px)";
			}
		}

		#name{
			.light-theme();

			position: absolute;
			font-family: "Montserrat", sans-serif;
			font-weight: 800;
			font-size: 1.8rem;
			font-style: italic;
			padding: 0.5rem 3rem;
			margin: 3rem;
			border: 3px solid;
			transform: translateY(-5rem);
		}

		#description{
			padding: 0 3rem;
			padding-top: 4rem;

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
}
</style>