<script>
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()
    let searchText, timeout;

    $: {
        if ( searchText !== undefined ) {
            clearTimeout( timeout )
            timeout = setTimeout(()=>{
                dispatch('search', { searchText })
            }, 500)
        }
    }


</script>


<div class="wrapper">
    <input bind:value={ searchText } placeholder="Search movie database...">
    <i class="fa fa-search fa-2x" name="search" />
</div>


<style>
    .wrapper {
        color: beige;
        background-color: #333;
        padding: 1rem;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }
    input { 
        background-color: #444;
        border: 0;
        border-radius: 99999px;
        margin-left: 1rem;
        width: 100%;
        color: beige;
        font-weight: bold;
        font-family: 'Courier New', Courier, monospace;
        padding: 1rem;
        outline: 0;
    }
    i { 
        color: #555;
        transition: .5s;
    }
    input:focus + i {
        color: beige;
    }
</style>