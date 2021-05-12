<script>
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition'

    import Navigation from '../components/Navigation.svelte'
    import MovieInfo from '../components/MovieInfo.svelte'
    import MovieInfoBar from '../components/MovieInfoBar.svelte'
    import Actor from '../components/Actor.svelte'
    import Grid from '../components/Grid.svelte'
    import Spinner from '../components/Spinner.svelte'

    import { fetchMovie } from '../api'

    export let params

    let isLoading, error, movie;

    const handleFetchMovie = async()=> {
        try {
            isLoading = true
            movie = await fetchMovie( params.id )
            error = false
            console.log( movie )
        } catch ( error ) {
            error = true
            console.error( error )
        }
        isLoading = false
    }

    onMount(async ()=>{
        const localMovie = window.localStorage.getItem( params.id )
        if ( localMovie ) {
            console.log('Grabbing from local.')
            movie = JSON.parse( localMovie )
        }
        else { 
            handleFetchMovie()
        }
    })

    $: {
        if (movie) {
            window.localStorage.setItem(params.id, JSON.stringify( movie ))
        }
    }

</script>

{#if error}
    <p>No movie for you!</p>
{:else if movie}

<div transition:fade={{ duration: 300 }}>
    <Navigation movie={ movie.original_title } />
    <MovieInfo movie={ movie } />
    <MovieInfoBar time={ movie.runtime } budget={ movie.budget } revenue={ movie.revenue } />
    <Grid header="Cast">
    {#each movie.actors as actor}
        <Actor { actor } />
    {/each}
    </Grid>
</div>
{/if}
{#if isLoading}
    <Spinner />
{/if}
<style>
    div {
        color: beige;
    }
</style>