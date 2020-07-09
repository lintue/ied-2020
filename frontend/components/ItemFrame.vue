<template>
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
</template>

<script>
export default{
	name: "ItemFrame",
	props: {
		entry: {
			type: [Object, null],
			required: true
		}
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
			if(this.$el.clientHeight > window.innerHeight){
				this.$emit("justify", "justify-start");
			}else{
				this.$emit("justify", "justify-center");
			}
		}
	}
};
</script>

<style lang="less" scoped>
@import url("../stylesheets/mixin.less");

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
</style>