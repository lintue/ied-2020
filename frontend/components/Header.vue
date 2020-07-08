<template>
	<header id="page-header">
		<div id="info">
			<h2 id="about-title">ABOUT</h2>
			<h1 id="title"><span class="yellow">I</span><span class="blue">E</span><span class="red">D</span> 2020</h1>

			<div id="course-description">
				<p>
					<span class="bold">IED2020</span> is a research site concluding the two year <span class="bold yellow">Information</span> <span class="bold blue">Experience</span> <span class="bold red">Design</span> masters degree at the <span class="bold">Royal College of Art</span> in London. The course looks beyond binary concepts through theory and practice, where we imagined speculative and real-world art and design solutions within a studio space amongst students of different disciplines, from philosophers and musicians to strategists and writers. When we were struck with the covid-19 pandemic, our creative spaces moved into our homes. This virtual space celebrates all of our thinking and research, and is where our projects come together again where we physically may not be able to in the near future.
				</p>
			</div>
		</div>

		<div id="socials">
			<a href="#instagram">INSTAGRAM &nearr;</a>
			<a href="#rca2020">RCA SHOW 2020 &nearr;</a>
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
	}
};
</script>

<style lang="less" scoped>
#page-header{
	position: absolute;
	top: 0;
	left: 0;
	color: white;
	border: 1px solid white;
	max-height: 100vh;
	overflow-y: scroll;
	background: #242424;
	z-index: 1000;

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
		padding: 2rem;

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
			font-size: 6rem;
		}

		#course-description{
			font-size: 1.6rem;
			line-height: 1.4em;
		}
	}

	#socials{
		border-top: 1px solid white;
		font-family: "Montserrat", sans-serif;
		padding: 1rem 2rem;

		a{
			text-decoration: none;
			color: white;
			margin: 0 2rem;
			font-weight: 800;
			font-size: 1.6rem;

			&:first-child{
				margin-left: 0;
			}
		}
	}
}
</style>