<template>
	<div id="item-content"
		v-on:click.stop=""
	>
		<section id="title-bar">
			<div id="file-name">event.com</div>
			<div id="close-item-btn"
				v-on:click="closeItem"
			>
				<span class="material-icons">
					close
				</span>
			</div>
		</section>

		<section id="content-container">
			<div id="cover">
				<img :src="mediaPath">
			</div>

			<div id="info">
				<h1
					:class="['title', isLong]"
				>{{ entry.workTitle }}</h1>
				<div class="event-info">
					<p>{{ entry.description }}</p>
					<p>{{ formattedDate }}</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default{
	name: "ItemEvent",
	props: {
		entry: {
			type: Object,
			required: true
		}
	},
	computed: {
		mediaPath: function(){
			return `./media/${this.entry.media}`;
		},
		formattedDate: function(){
			const d = moment(`${this.entry.date} ${this.entry.time}`, "DD/MM/YYYY hh:mm");
			return d.format("MMMM Do, h:mma");
		},
		isLong: function(){
			return this.entry.workTitle === "Is it really ever really really really real? Or is real reality really just a representation? Really." ? "long" : "";
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
	.dark-theme();

	max-width: 1000px;
	width: 70%;
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
			width: 40%;
			padding: 3rem;

			.title{
				font-family: "Montserrat", sans-serif;
				font-weight: 700;
				font-size: 2.5rem;
				margin: 0;

				&.long{
					font-size: 2rem;
				}
			}

			.event-info{
				margin: 2rem 0;
			}
		}

		#cover{
			width: 60%;
			background: #FFFFFF;
			padding: 3rem;

			img{
				max-width:100%;
				max-height:100%;
			}
		}
	}
}
</style>