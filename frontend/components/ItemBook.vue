<template>
	<div id="item-content"
		v-on:click.stop=""
	>
		<section id="title-bar">
			<div id="file-name">book.img</div>
			<div id="close-item-btn"
				v-on:click="closeItem"
			>
				<span class="material-icons">
					close
				</span>
			</div>
		</section>

		<section id="content-container">
			<div id="info">
				<h2 class="student-name">{{ entry.student }}</h2>
				<p class="book-info">
					{{ entry.author }}<br>
					<em>{{ entry.workTitle }}</em>
				</p>
			</div>
			<div id="cover">
				<img :src="mediaPath">
			</div>
		</section>
	</div>
</template>

<script>
export default{
	name: "ItemBook",
	props: {
		entry: {
			type: Object,
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
		}
	}
};
</script>

<style lang="less" scoped>
@import url("../stylesheets/mixin.less");

#item-content{
	.light-theme();

	max-width: 1000px;
	width: 60%;
	border: 1px solid;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);

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

	#content-container{
		display: flex;
		align-items: flex-start;

		#info{
			width: 50%;
			padding: 3rem;

			.student-name{
				.student-name-tag();

				margin: 0;
			}

			.book-info{
				em{
					font-style: italic;
				}
			}
		}

		#cover{
			width: 50%;
			margin-bottom: -3px;

			img{
				max-width:100%;
				max-height:100%;
			}
		}
	}
}
</style>