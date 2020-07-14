<template>
	<header id="page-header"
		:class="[collapsed ? 'collapsed' : '', mode]"
	>
		<div id="info">
			<h2 id="about-title">ABOUT</h2>
			<h1 id="title"><span class="yellow">I</span><span class="blue">E</span><span class="red">D</span> 2020</h1>

			<div id="course-description">
				<p>
					<span class="bold">IED2020</span> is a research site concluding the two year <span class="bold yellow">Information</span> <span class="bold blue">Experience</span> <span class="bold red">Design</span> masters degree at the <span class="bold">Royal College of Art</span> in London. The course looks beyond binary concepts through theory and practice, where we imagined speculative and real-world art and design solutions within a studio space amongst students of different disciplines, from philosophers and musicians to strategists and writers. When we were struck with the covid-19 pandemic, our creative spaces moved into our homes. This virtual space celebrates all of our thinking and research, and is where our projects come together again where we physically may not be able to in the near future.
				</p>
			</div>
		</div>

		<div id="socials"
			v-on:click.prevent="toggleHeader"
		>
			<a href="https://www.instagram.com/rcaied/" target="_blank" class="external-links"
				v-if="!collapsed"
				v-on:click.stop=""
			>INSTAGRAM <span class="arrow"></span></a>
			<a href="https://2020.rca.ac.uk/programmes/information-experience-design-ma" target="_blank" class="external-links"
				v-if="!collapsed"
				v-on:click.stop=""
			>RCA SHOW 2020 <span class="arrow"></span></a>

			<a href="#rca2020" class="about"
				v-if="collapsed"
			>ABOUT</a>

			<a href="#" id="header-collapse">
				<span class="material-icons icon"
					v-if="collapsed"
				>
					keyboard_arrow_down
				</span>

				<span class="material-icons icon"
					v-else
				>
					keyboard_arrow_up
				</span>
			</a>
		</div>
	</header>
</template>

<script>
export default {
	name: "Header",
	props: {
		mode: {
			type: String
		}
	},
	data: function(){
		return {
			collapsed: true
		};
	},
	methods: {
		toggleHeader: function(){
			this.collapsed = !this.collapsed;
		}
	}
};
</script>

<style lang="less" scoped>
@import url("../stylesheets/mixin.less");

@large-font: 12vh;
@medium-font: 1.5rem;

#page-header{
	position: absolute;
	top: 0;
	left: 0;
	transform: translateY(0);
	transition: transform 0.5s ease;
	z-index: 500;
	display: flex;
	flex-direction: column;

	&.collapsed{
		transform: translateY(~"calc(-100% + 4rem)");
	}

	&.chaos{
		border: 1px solid white;
		color: white;
		background: @dark-color;

		a{
			color: white;
		}

		#socials{
			border-top: 1px solid white;

			.arrow{
				background-image: url("./arrow-white.svg");
				display: inline-block;
				width: ~"calc(30px - 0.7rem)";
				height: ~"calc(30px - 0.7rem)";
			}
		}
	}

	&.order{
		border: 1px solid black;
		color: black;
		background: white;

		a{
			color: black;
		}

		#socials{
			border-top: 1px solid black;

			.arrow{
				background-image: url("./arrow-black.svg");
				display: inline-block;
				width: ~"calc(30px - 0.7rem)";
				height: ~"calc(30px - 0.7rem)";
			}
		}
	}

	.yellow{
		color: #fde94b;
	}

	.blue{
		color: #5aa6da;
	}

	.red{
		color: #e5301b;
	}

	.bold{
		font-weight: bold;
	}

	#info{
		padding: 1.25rem 2rem;
		height: 80%;
		display: block;

		#about-title{
			font-family: "Montserrat", sans-serif;
			font-weight: 800;
			font-style: italic;
			margin: 0;
		}

		#title{
			font-family: "Montserrat", sans-serif;
			font-weight: 900;
			font-style: italic;
			font-size: @large-font;
			margin: 0.4em 0;
		}

		#course-description{
			font-size: @medium-font;
			line-height: 1.4em;
			font-weight: 500;
		}
	}

	#socials{
		font-family: "Montserrat", sans-serif;
		padding: 1.25rem 2rem;
		display: block;
		height: 4rem;
		cursor: pointer;

		a{
			text-decoration: none;
			margin: 0 2rem;
			font-weight: 800;
			font-size: @medium-font;

			&:first-child{
				margin-left: 0;
			}
		}

		#header-collapse{
			&:focus{
				border: none;
				outline: none;
			}

			.icon{
				font-size: calc(@medium-font * 2);
				float: right;
				transform: translateY(-1rem);
			}
		}
	}

	@media (max-width: 750px) {
		#info{
			#title{
				font-size: 3.5rem;
			}

			#course-description{
				font-size: 1rem;
			}
		}

		#socials{
			a{
				font-size: 1rem;
				margin: 0;
				margin-bottom: 1rem;
				width: 50%;
			}

			.external-links{
				display: none;
			}
		}
	}
}
</style>