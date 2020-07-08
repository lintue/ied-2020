<template>
	<article id="item-container"
		:class="title ? '' : 'hidden'"
		v-on:click.prevent.stop="closeItem"
	>

		<div id="item-content"
			v-on:click.stop=""
		>
			<section id="title-bar">
				<div id="file-name">Project.img</div>
				<div id="close-item-btn">
					<span class="material-icons">
						close
					</span>
				</div>
			</section>
			<section id="media"></section>
			<section id="description">
				<section id="name">
					Zohar Dvir
				</section>
				<h2 id="project-title">
					Image Title
				</h2>
				<p id="description-text">
					Lorem ipsum laboris duis voluptate ut dolore incididunt amet duis sint eu tempor ut occaecat anim voluptate aliquip excepteur ullamco velit enim esse sint ea ullamco et incididunt ea dolor incididunt in est eu sit ut fugiat et aliquip qui sit.
				</p>
			</section>
		</div>

	</article>
</template>

<script>
export default{
	name: "ItemContainer",
	props: {
		title: {
			type: String
		},
		media: {
			type: String
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
#item-container{
	display: block;
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	overflow-y: scroll;
	z-index: 1000;
	background: rgba(0, 0, 0, 0.5);
	color: white;

	&.hidden{
		display: none;
	}

	#item-content{
		max-width: 1000px;
		width: 70%;
		border: 1px solid white;
		background: #242424;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		#title-bar{
			text-align: center;
			font-size: 1.7rem;
			border-bottom: 1px solid white;

			#file-name{
				padding: 0.5rem;
				display: inline-block;
			}

			#close-item-btn{
				float: right;
				display: inline-block;
				padding: 0.4rem;
				font-size: 1.9rem;
				cursor: pointer;
				border-left: 1px solid white;
			}
		}

		#media{

		}

		#description{
			padding: 3rem;
			padding-top: 4rem;

			#name{
				position: absolute;
				font-family: "Montserrat", sans-serif;
				font-weight: 800;
				font-size: 1.8rem;
				font-style: italic;
				transform: translateY(-5rem);
				color:black;
				padding: 0.5rem 3rem;
				border: 3px solid black;
				background: white;
			}

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