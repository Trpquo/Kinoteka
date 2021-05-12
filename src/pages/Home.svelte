<script>
  import Hero from '../components/Hero.svelte'
  import Search from '../components/Search.svelte'
  import Grid from '../components/Grid.svelte'
  import Thumb from '../components/Thumb.svelte'
  import LoadMoreButton from '../components/LoadMoreButton.svelte'
  import Spinner from '../components/Spinner.svelte'

  import { onMount } from 'svelte'
  import { fetchMovies } from '../api'


  let movies = {
    movies: [],
    currentPage: 1
  };
  let isLoading, error, searchTerm = '';


  const handleFetchMovies = async (searchTerm, loadMore) => {
      try { 
          isLoading = true
          error = false
          movies = await fetchMovies(searchTerm, movies, loadMore)
          console.log(movies)
      }
      catch (err) {
          error = true
          // console.error(err)
      }
      isLoading = false
  }

  const handleSearch =e=> {
    searchTerm = e.detail.searchText
    movies.movies = []
    movies.currentPage = 1
    handleFetchMovies(searchTerm, false)
  }

  const handleLoadMore =()=> { 
    handleFetchMovies( searchTerm, true )
    movies.currentPage++
   }

  onMount(async ()=>{
    const sessionMovies = window.sessionStorage.getItem('movie-app')
    if (sessionMovies) {
      console.log('Grabbing from storage.')
      movies = JSON.parse( sessionMovies )
    }
    else { 
      handleFetchMovies(searchTerm, false)
    }
  })

  $: {
    if (movies.movies.length > 0) {
      window.sessionStorage.setItem('movie-app', JSON.stringify( movies ))
    }
  }

</script>
{#if error}
  <p>No movies for you!</p>
  {:else}
  {#if movies.heroImage && !searchTerm}
    <Hero image={ movies.heroImage.backdrop_path } title={ movies.heroImage.original_title } text={ movies.heroImage.overview } />
  {/if}
  <Search on:search={ handleSearch }/>
  <Grid header={ searchTerm ? `Search result for ${ searchTerm }` : 'Popular Movies' }>
    {#each movies.movies as movie}
      <Thumb 
        clickable
        image={ movie.poster_path } 
        movieId={ movie.id }
      />
    {/each}
  </Grid>
  {#if isLoading}
    <Spinner />
  {/if}
  {#if !isLoading && movies.currentPage < movies.totalPages}
    <LoadMoreButton on:loadMore={ handleLoadMore }>
      Load More
    </LoadMoreButton>
  {/if}
{/if}

<style>

</style>
