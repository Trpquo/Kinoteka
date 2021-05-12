<script>
	import router from 'page'


  	import Header from './components/Header.svelte'
	import Home from './pages/Home.svelte'
	import Movie from './pages/Movie.svelte'
	import NotFound from './pages/NotFound.svelte'

	let page, params;

	router('/', ()=>{ page = Home })
	router('/movie/:id', (ctx, next)=>{ 
		params = ctx.params
		next()
	 }, ()=>{ console.log(params); page = Movie })
	 router('/*', ()=>{ page = NotFound })
	 
	 router.start()

</script>

<Header />
<svelte:component this={ page } { params } />


<style></style>