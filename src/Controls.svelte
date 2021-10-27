<!--
    Contains all of the controls for the website that are persistent across the website
    example is the scroll to top
-->
<script>
    import {fade} from 'svelte/transition';
    let scrollY;
</script>

<svelte:window bind:scrollY></svelte:window>
{#if scrollY > 50}
    <a href = "#top" in:fade class = "center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
    </a>
{/if}

<style>
a
{
    position:fixed;
    bottom:25px;
    right:25px;
    width:45px;
    height:45px;
    border-radius:50%;
    background-color:#fff;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

a svg
{
    fill:#333;
    transform:rotate(-180deg);
    width:35px;
    height:35px;
}
</style>