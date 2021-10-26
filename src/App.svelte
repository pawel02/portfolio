<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import simpleParallax from 'simple-parallax-js';

	let ready = false;
	onMount(() => {
		var image = document.querySelector('#main-bg');
		new simpleParallax(image);
		ready = true;
	})
</script>

<main class = 'center'>
	<div id = 'background-wrapper'>
		<img src = './assets/bg-darkened.jpg' alt = 'background image' aria-hidden='true' id = "main-bg"/>
	</div>
	{#if ready}
		<h1 in:fly="{{ y: 200, duration: 2000 }}">Hi I'm Pawel and I create software, <br>have a look at 
			<a href = '#' aria-hidden='true' in:fly="{{ y: 200, duration: 4000 }}">what I've done.</a>
		</h1>
	{/if}
	<button>Learn more about what I do<br><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg></button>
</main>

<style>
main
{
	width:100%;
	height:100vh;
	position:relative;
	overflow:hidden;
}

#background-wrapper
{
	z-index:-1;
	position:absolute;
}
main img {
	height:auto;
	width:100%;
}

h1
{
	color:#fff;
	font-size:3rem;
	text-align:center;
}


button
{
	position:absolute;
	bottom:0;
	width:350px;
	background-color:transparent;
	background:transparent;
	color:#fff;
	outline:none;
	font-size:1.1rem;
	border:0px;
	cursor:pointer;
}

button:hover
{
	opacity:0.8;
}

button:focus
{
	outline:1px solid #fff;
}

svg
{
	height:35px;
	width:35px;
}

@media screen and (orientation:portrait) 
{
	main img
	{
		width:auto;
		height:100%;
	}
}

</style>
