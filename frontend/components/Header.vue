<template>
	<header id="page-header">
		<h1 id="title"><span class="yellow">I</span><span class="blue">E</span><span class="red">D</span> 2020</h1>

		<div id="course-title-container">
			<p id="course-title"><span class="yellow">Information</span> <span class="blue">Experience</span> <span class="red">Design</span></p>
			<p>Royal College of Art</p>
			<p>London</p>
		</div>

		<nav id="navigation">
			<ul>
				<li>about</li>
				<li>instagram</li>
				<li>RCA2020</li>
			</ul>
		</nav>
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
	color: white;
	font-family: "IBM Plex Mono", monospace;
	font-weight: 200;
	display: flex;
	padding: 2rem;
	align-items: flex-start;
	max-width: 90vw;

	.yellow{
		color: #fde94b;
	}

	.blue{
		color: #5aa6da;
	}

	.red{
		color: #e5301b;
	}

	#title{
		margin: 0 2rem;
		font-family: "Montserrat", sans-serif;
		font-weight: 900;
		font-style: italic;
		font-size: 6rem;
	}

	#course-title-container{
		height: 6rem;
		padding: 1rem;
		margin: 0 1.5rem;

		p{
			margin: 0;
			margin-bottom: 0.25rem;
		}

		#course-title{
			font-weight: 400;
		}
	}

	#navigation{
		margin: 0 1.5rem;
		padding: 0 1rem;

		ul{
			list-style: none;
			padding: 0;

			li{
				padding: 0.7rem 0;
				margin: 0 1rem;
				border-bottom: 1px solid white;
				width: 9rem;

				&:first-of-type{
					padding-top: 0;
				}

				&:last-of-type{
					padding-bottom: 0;
					border-bottom: none;
				}
			}
		}
	}
}
</style>