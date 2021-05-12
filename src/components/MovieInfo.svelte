<script>
    import { POSTER_SIZE, IMAGE_BASE_URL, BACKDROP_SIZE } from '../config'

    import Thumb from './Thumb.svelte'

    export let movie

    let backdrop = movie.backdrop_path ? IMAGE_BASE_URL + BACKDROP_SIZE + movie.backdrop_path : '#333'
    let poster = movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : null

</script>

{#if movie}

<main style="--backdrop: url({ backdrop })">
        <figure>
            <Thumb image={ poster } />
            <figcaption>
                <h1>{ movie.title }</h1>
                <h4>Plot</h4>
                <p>{ movie.overview }</p>
                <div class="director">
                    <h4>Director{movie.directors.length > 1 ? "s" : ""}</h4>
                    {#each movie.directors as director}
                        <p>{ director.name }</p>
                    {/each}
                </div>
                <div class="rating-director">
                    <h4>IMDB Rating</h4>
                    <p>{ movie.vote_average }</p>
                </div>
            </figcaption>
        </figure>
</main>
{/if}


<style>
    main { 
        padding: 2rem 1rem;
        position: relative;
        z-index: 1;
        overflow: hidden;
        
    }
    main:before {
        background: var(--backdrop);
        background-size: cover;
        background-position: center;
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        filter: blur(.5vw) brightness(50%);
    }
    figure { 
        display: flex;
        gap: 2rem;
    }
    figcaption { 
        flex: 1 0 30%;
    }
    h4 { 
        text-transform: uppercase;
        letter-spacing: .2em;
        margin-bottom: .25rem;
    }
    h4 + p {

        margin-top: 0;
    }
    .rating-director p {
        background-color: beige;
        color: #333;
        border-radius: 50%;
        width: 3em;
        height: 3em;
        font-weight: bold;
        display: grid;
        line-height: 1em;
        place-items: center;

    }
</style>