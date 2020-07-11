<template>
	<div id="item-content"
		v-on:click.stop=""
	>
		<section id="title-bar">
			<div id="file-name"
				v-if="entry.category === 'main'"
			>Project.img</div>
			<div id="file-name"
				v-else-if="entry.category === 'corona'"
			>CoronaOffice.img</div>
			<div id="file-name"
				v-else-if="entry.category === 'lockdown'"
			>LockdownTask.img</div>
			<div id="file-name"
				v-else-if="entry.category === 'studio'"
			>StudioMoment.img</div>
			<div id="file-name"
				v-else-if="entry.category === 'add'"
			>additional.img</div>
			<div id="file-name"
				v-else
			>untitled.img</div>

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
				v-if="mediaType === 'local'"
				:src="mediaPath"
				v-on:load="mediaLoaded"
			>

			<div class="embed-container"
				v-else-if="mediaType === 'youtube'"
			>
				<iframe class="embed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
					:src="youtubeEmbedLink"
					v-on:load="mediaLoaded"
				></iframe>
			</div>

			<div class="embed-container"
				v-else-if="mediaType === 'vimeo'"
			>
				<iframe class="embed" frameborder="0" allow="autoplay; fullscreen" allowfullscreen
					:src="vimeoEmbedLink"
					v-on:load="mediaLoaded"
				></iframe>
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
		},
		mediaType: function(){
			const youtubeRE = /^(?:https?:\/\/)?(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch|embed\/watch|embed)?[?/]?(?:v=|feature=player_embedded&v=)?([\w-_]+).*?$/;
			const vimeoRE = /^(?:https?:\/\/)?(?:www\.)?vimeo\.com\/(?:channels\/)?(?:\w+\/)?(\d+)$/;

			if(youtubeRE.test(this.entry.media)){
				// Youtube link
				return "youtube";
			}else if(vimeoRE.test(this.entry.media)){
				// Vimeo link
				return "vimeo";
			}else{
				// Local file path
				return "local";
			}
		},
		youtubeEmbedLink: function(){
			const youtubeRE = /^(?:https?:\/\/)?(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch|embed\/watch|embed)?[?/]?(?:v=|feature=player_embedded&v=)?([\w-_]+).*?$/;
			const youtubeID = youtubeRE.exec(this.entry.media)[1];

			return `https://www.youtube.com/embed/${youtubeID}`;
		},
		vimeoEmbedLink: function(){
			const vimeoRE = /^(?:https?:\/\/)?(?:www\.)?vimeo\.com\/(?:channels\/)?(?:\w+\/)?(\d+)$/;
			const vimeoID = vimeoRE.exec(this.entry.media)[1];

			return `https://player.vimeo.com/video/${vimeoID}`;
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

		.embed-container{
			position: relative;
			width: 100%;
			height: 0;
			padding-bottom: 56.25%;

			.embed{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
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