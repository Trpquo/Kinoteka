<script>
    import { createEventDispatcher, onMount } from 'svelte'
    const dispatch = createEventDispatcher()

</script>

<button on:click={ ()=>{ dispatch('loadMore') } }>
    <slot />
</button>

<style>
    button { 
        background-color: #111;
        width: 25%;
        min-width: 200px;
        height: 4rem;
        color: beige;
        cursor: pointer;
        transition: .3s;
        border-radius: 99999px;
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: .1em;
        max-width: 1280px;
        display: block;
        padding: 0 1rem;
        margin: -3rem auto 0;
        outline: none;
    }
    button:hover {
        background-color: teal;
    }
</style>