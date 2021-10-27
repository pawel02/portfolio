<!-- 
Displays what I currently do and can do:
 - Software engineering apprenticeship
 - Youtube
 - Contracting ( Created Cleanportsmouth )
-->
<section id = "WhatImDoing">
    <h2>What I do</h2>

    <div class = "section-wrapper">
        <div class = "card-wrapper">
            <div class = "card">
                <h3>Contracting</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut illo blanditiis asperiores ullam exercitationem, corrupti labore at consequuntur voluptates, incidunt, iusto quibusdam accusamus aut hic fuga impedit autem tenetur voluptate.</p>
            </div>
        </div
        ><div class = "image-wrapper center">
            <img src = "./assets/contracting.jpg" alt = "Contracting">
        </div>
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
    display:grid;
    grid-template-columns: 1fr 1.5fr;
    align-items: center;
    justify-content: center;
    height:400px;
}

.card-wrapper
{
    width:100%;
    z-index:1;
}

.card
{
    width:100%;
    margin-left:40%;
    border-radius:15px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    padding:10px;
    background-color:#fff;
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
}
</style>