<script>
    import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'

    export let image = ''
    export let movieId = ''
    export let clickable = false

    let imageUrl = image && IMAGE_BASE_URL + POSTER_SIZE + image

    const placeholderImage = '/images/just my  button 01.png'
</script>

<figure>
    {#if clickable}
        <a href="/movie/{movieId}">
            <img class="clickable" src={ imageUrl || placeholderImage } alt="thumbnail">
        </a>
        {:else}
        <img src={ imageUrl || placeholderImage } alt="thumbnail">
        {/if}
        <figcaption>{ movieId }</figcaption>
</figure>

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
    a { 
        display: block;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }
    figcaption { 
        position: absolute;
        bottom: 30%;
        width: 100%;
        background-color: #1119;
        padding: 2rem;
        opacity: 0;
        box-sizing: border-box;
        text-align: center;
        transition: opacity .5s ease-in;
    }
    figure:hover figcaption {
        opacity: 1;
    }
</style>