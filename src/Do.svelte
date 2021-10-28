<script>
    import {onMount} from 'svelte';
    import {fly} from 'svelte/transition';

    let scrollY;
    let scrolledInViews = [false, false, false];

    function checkPosition()
    {
        var rect1 = document.querySelectorAll(".section-wrapper")[0].getBoundingClientRect();
        scrolledInViews[0] = scrolledInViews[0] ? true : rect1.y <= window.innerHeight - (rect1.height / 2);

        var rect2 = document.querySelectorAll(".section-wrapper")[1].getBoundingClientRect();
        scrolledInViews[1] = scrolledInViews[1] ? true : rect2.y <= window.innerHeight - (rect2.height / 2);

        var rect3 = document.querySelectorAll(".section-wrapper")[2].getBoundingClientRect();
        scrolledInViews[2] = scrolledInViews[2] ? true : rect3.y <= window.innerHeight - (rect3.height / 2);
    }

    onMount(() => {
        checkPosition();
    })

</script>

<svelte:window bind:scrollY on:scroll={checkPosition} on:resize={checkPosition}></svelte:window>

<section id = "WhatImDoing">
    <h2>What I do</h2>

    <div class = "section-wrapper section-wrapper-left">
        {#if scrolledInViews[0]}
        <div class = "card-wrapper" transition:fly="{{ y: 200, duration: 2000 }}">
            <div class = "card card-left">
                <h3>Contracting</h3>
                <p>Anything from web dev, cloud, game dev to embedded systems. I can accomidate any software development needs. I have experience working with GCP, Angular, JavaScript, C++, C#, Python, PHP, ReactJS, Firebase, MySQL and many more. I am constantly learning new technologies and work in an agile way. So if you don't find the tech stack that you're using here, I can learn it quick.</p>
            </div>
        </div
        ><a href="#contact" class = "image-wrapper center" transition:fly="{{ y: 150, duration: 1000 }}">
            <img src = "./assets/contracting.jpg" alt = "Contracting">
        </a>
        {/if}
    </div>

    <div class = "section-wrapper section-wrapper-right">
        {#if scrolledInViews[1]}
        <a href = "www.youtube.com/Computeshorts" class = "image-wrapper center" style = "justify-self:right" transition:fly="{{ y: 150, duration: 1000 }}">
            <img src = "./assets/contracting.jpg" alt = "Contracting">
        </a
        ><div class = "card-wrapper" transition:fly="{{ y: 200, duration: 2000 }}">
            <div class = "card card-right" style = "border:1px solid #00a700;">
                <h3>Youtube</h3>
                <p>I try to keep in touch with the community and help out others therefore I have an active <a href = "https://www.youtube.com/channel/UC2clDLZK1wXYB5be4b240Hg" target="_blank">youtube channel</a> where I post programming tutorial videos. </p>
            </div>
        </div>
        {/if}
    </div>

    <div class = "section-wrapper section-wrapper-left">
        {#if scrolledInViews[2]}
        <div class = "card-wrapper" transition:fly="{{ y: 200, duration: 2000 }}">
            <div class = "card card-left" style = "border:1px solid #0f4eff;">
                <h3>Software Engineering Apprenticeship</h3>
                <p>To extends my skills further I am currently studying for a degree in digital and techonology solutions at <a href = "https://warwick.ac.uk/" target="_blank">Warwick university</a> as part of my apprenticeship at <a href = "https://www.thalesgroup.com/en" target="_blank">Thales.</a></p>
            </div>
        </div
        ><div class = "image-wrapper center" transition:fly="{{ y: 150, duration: 1000 }}">
            <img src = "./assets/apprenticeship.png" alt = "Apprenticeship">
        </div>
        {/if}
    </div>
</section>

<style>
h3 
{
    font-size:1.8rem;
    margin:15px 0 5px 0;
}

.section-wrapper
{
    height:400px;
    overflow:hidden;
    display:grid;
    align-items: center;
    justify-content: center;
    width:100%;
}

.section-wrapper-left
{
    grid-template-columns: 1fr 1.5fr;
}
.section-wrapper-right
{
    grid-template-columns: 1.5fr 1fr;
}

.card-wrapper
{
    width:100%;
    z-index:1;
}

.card
{
    width:90%;
    border-radius:15px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    padding:10px;
    background-color:#fff;
    border:1px solid var(--atomic-tangerine);
}

.card-left
{
    margin-left:40%;
}
.card-right
{
    margin-left:-40%;
}

p
{
    font-size:1rem;
    opacity:0.9;
}

.image-wrapper
{
    width:90%;
    height:80%;
    overflow:hidden;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

img
{
    width:auto;
    height:150%;
}

@media screen and (max-width: 1000px)
{
    .card-left
    {
        margin-left:10%;
    }
    .card-right
    {
        margin-left:-30%;
    }
    .card
    {
        width:110%;
    }
}

@media screen and (max-width: 750px)
{
    .section-wrapper
    {
        grid-template-columns:1fr 0;
        height:auto;
        padding:25px 0;
    }
    .image-wrapper
    {
        display:none;
    }

    .card
    {
        width:90%;
        display:block;
        margin:0 auto !important;
    }
    .card-left
    {
        margin:0;
    }
    .card-right
    {
        margin:0;
    }
    p
    {
        font-size:1.5rem;
    }
}
</style>