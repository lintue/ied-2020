<template>
	<div class="media-item">
		<img :src="mediaPath">
	</div>
</template>

<script>
export default{
	name: "AppItemMedia",
	props: {
		entry: {
			type: Object,
			required: true
		}
	},
	computed: {
		mediaPath: function(){
			const youtubeRE = /^(?:https?:\/\/)?(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch|embed\/watch|embed)?[?/]?(?:v=|feature=player_embedded&v=)?([\w-_]+).*?$/;
			const vimeoRE = /^(?:https?:\/\/)?(?:www\.)?vimeo\.com\/(?:channels\/)?(?:\w+\/)?(\d+)$/;

			if(this.mediaType === "local"){
				return `./media/${this.entry.media}`;
			}else if(this.mediaType === "youtube"){
				const youtubeID = youtubeRE.exec(this.entry.media)[1];
				return `https://img.youtube.com/vi/${youtubeID}/mqdefault.jpg`;
			}else if(this.mediaType === "vimeo"){
				const vimeoID = vimeoRE.exec(this.entry.media)[1];
			}else{
				return "";
			}
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
		}
	}
};
</script>

<style lang="less" scoped>
.media-item{
	img{
		height: 240px;
	}
}
</style>