<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import simpleParallax from 'simple-parallax-js';
	import Do from './Do.svelte';
	import Controls from './Controls.svelte'

	let ready = false;
	let timer;
	let currWord = 0;
	let words = [["what I've done.", '#WhatIveDone'], ["what I'm doing.", '#WhatImDoing'], ["what I love doing.", "#WhatImDoing"]];
	let	displayWords = [
		{
			words: words[0],
			isOutTransition: false	
		}];
	onMount(() => {
		ready = true;
		var image = document.querySelector('#main-bg');
		new simpleParallax(image);
		timer = setInterval(() => {
			// Moved to the next word
			currWord = currWord + 1 > words.length - 1 ? 0 : currWord + 1;
			if (currWord === 0)
			{
				displayWords = [
					{
						words: words[0],
						isOutTransition: false
					},
					{
						words: words[words.length - 1],
						isOutTransition: true
					}
				]
			}
			else
			{
				displayWords = [
					{
						words: words[currWord],
						isOutTransition: false
					},
					{
						words: words[currWord - 1],
						isOutTransition: true
					}
				]
			}
		}, 2000);
	})
</script>

<main class = 'center' id="top">
	<a id = "contact" href = '#contact'>Contact me</a>
	{#if ready}
		<h1 in:fly="{{ y: 200, duration: 2000 }}">Hi I'm Pawel and I create software, <br>have a look at 
			<div id = "tansition-wrapper" class = "center">
				{#each displayWords as displayWord (displayWord.words)}
					<a class = "words" class:words-out = "{displayWord.isOutTransition}" href = {displayWord.words[1]} aria-hidden='true'>{displayWord.words[0]}</a>
				{/each}
			</div>
		</h1>
	{/if}
	<a class = "learn-more" href = "#WhatImDoing">Learn more about what I do<br><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg></a>
	<div id = 'background-wrapper'>
		<img src = './assets/bg-darkened.jpg' alt = 'background image' aria-hidden='true' id = "main-bg"/>
	</div>
</main>
<Controls />
<Do />

<!-- Done -->
<!--
	Contact form
-->
<!-- 
Add a footer containing:
- Links to my socials
- links to the github page
-->

<style>
main
{
	width:100%;
	height:100vh;
	position:relative;
	overflow:hidden;
}

#contact
{
	position:absolute;
	top:15px;
	right:25px;
	border:1px solid #fff;
	color:#fff;
	font-size:1rem;
	cursor:pointer;
	padding:7px 15px;
	border-radius:5px;
}

#contact:hover
{
	opacity:0.7;
	text-decoration:none;
}

#background-wrapper
{
	z-index:-1;
	position:absolute;
}

#tansition-wrapper
{
	position:relative;
	height:5rem;
	overflow:hidden;
}

.words
{
	font-size:3rem;
	animation-name:flyin;
	animation-duration: 0.8s;
	animation-timing-function: cubic-bezier(0.46, 1.1, 1, 1);
	position:absolute;
	top:initial;
	opacity:1;
}

.words-out
{
	animation-name:flyout;
	animation-timing-function: cubic-bezier(0.18, 0.94, 0.58, 1);
	animation-duration:0.8s;
	opacity:0;
}

@keyframes flyin
{
	0%
	{
		top:3rem;
		opacity:0.5;
	}

	100%
	{
		top:0.5rem;
		opacity:1;
	}
}

@keyframes flyout
{
	0%
	{
		top:0.5rem;
		opacity:1;
	}
	100%
	{
		opacity:0;
		top:-3rem;
	}
}

main img {
	width:auto;
	height:100%;
}

h1
{
	color:#fff;
	font-size:3rem;
	text-align:center;
}


.learn-more
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
	text-align:center;
}

.learn-more:hover
{
	opacity:0.8;
	text-decoration: none;
}

.learn-more:focus
{
	outline:1px solid #fff;
}

svg
{
	height:35px;
	width:35px;
}

@media screen and (max-width:650px)
{
	#contact
	{
		font-size:1.5rem;
	}

	button
	{
		font-size:1.3rem;
	}
}

</style>
