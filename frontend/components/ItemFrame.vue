<template>
	<div id="item-content">
		<section id="title-bar">
			<div id="file-name">Project.img</div>
			<div id="close-item-btn"
				v-on:click="closeItem"
			>
				<span class="material-icons">
					close
				</span>
			</div>
		</section>

		<section id="media">
			<img
				:src="mediaPath"
				v-on:load="mediaLoaded"
			>
		</section>

		<section id="description">
			<section id="name"
				v-if="entry.student"
			>
				{{ entry.student }}
			</section>
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
			type: Object,
			require: true
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

</style>