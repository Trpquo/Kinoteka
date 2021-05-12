<script>

    import { POSTER_SIZE, IMAGE_BASE_URL } from '../config'

    export let actor;

    let profile = actor.profile_path ? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path : null

</script>

{#if profile} 
<figure>
    <img src={ profile } alt="">
    <figcaption>
        <p class="person"><span>Name:</span> { actor.name }</p>
        <p class="character"><span>Part:</span> { actor.character }</p>
    </figcaption>
</figure>
{/if}


<style>

    figure { 
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        height: calc(100vw/3.5);
        background-color: #333;
    }
    @media (min-width: 1280px) {
        figure { 
            height: calc(100vw/7);
        }
    }
    figure img {
        height: 100%;
        display: block;
    }
    figcaption { 
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: #111c;
        padding: 1rem;
        opacity: 0;
        box-sizing: border-box;
        transform: translateY(100px) rotateX(90deg);
        transform-style: preserve-3d;
        transition: .5s ease-out;
        font-weight: 800;
        overflow: hidden;
    }
    figure:hover figcaption {
        transform: none;
        opacity: 1;
    }
    span { 
        display: block;
        margin: 0;
        color: firebrick;
        font-weight: 400;
    }
    p { 
        margin: .5rem 0;
    }

</style>