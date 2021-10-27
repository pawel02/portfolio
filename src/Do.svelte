<!-- 
Displays what I currently do and can do:
 - Software engineering apprenticeship
 - Youtube
 - Contracting ( Created Cleanportsmouth )
-->

<script>
    import {onMount} from 'svelte';
    import {fly} from 'svelte/transition';

    let scrollY;
    let scrolledInViews = [false, false, false];

    function checkPosition()
    {
        // get the position of #WhatImDoing
        var rect = document.querySelectorAll(".section-wrapper")[0].getBoundingClientRect();

        scrolledInViews[0] = scrolledInViews[0] ? true : rect.y <= window.innerHeight - (rect.height / 4);
        console.log(scrolledInViews[0]);
    }

    onMount(() => {
        checkPosition();
    })

</script>

<svelte:window bind:scrollY on:scroll={checkPosition} on:resize={checkPosition}></svelte:window>

<section id = "WhatImDoing">
    <h2>What I do</h2>

    <div class = "section-wrapper">
        {#if scrolledInViews[0]}
        <div class = "card-wrapper" transition:fly="{{ y: 200, duration: 2000 }}">
            <div class = "card">
                <h3>Contracting</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut illo blanditiis asperiores ullam exercitationem, corrupti labore at consequuntur voluptates, incidunt, iusto quibusdam accusamus aut hic fuga impedit autem tenetur voluptate.</p>
            </div>
        </div
        ><div class = "image-wrapper center" transition:fly="{{ y: 150, duration: 1000 }}">
            <img src = "./assets/contracting.jpg" alt = "Contracting">
        </div>
        {/if}
    </div>
</section>

<style>
h2
{
    font-size:3rem;
    margin:25px 0;
    text-align:center;
    width:100%;
}
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
    grid-template-columns: 1fr 1.5fr;
    align-items: center;
    justify-content: center;
    width:100%;
}

.card-wrapper
{
    width:100%;
    z-index:1;
}

.card
{
    width:90%;
    margin-left:40%;
    border-radius:15px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    padding:10px;
    background-color:#fff;
    border:1px solid var(--atomic-tangerine);
}

p
{
    font-size:1rem;
    opacity:0.9;
}

.image-wrapper
{
    width:100%;
    height:80%;
    overflow:hidden;
}

img
{
    width:90%;
    height:auto;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
</style>