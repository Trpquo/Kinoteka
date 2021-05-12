<script>
    export let header
</script>

<div class="gallery">
    <h1>{ header }</h1>
    <div class="grid">
        <slot />
    </div>

</div>


<style>
    .gallery {
        padding: 2rem 2rem 4rem;
        background-color: firebrick;
        color: beige;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 1rem;
    }
    @media (min-width: 1280px) {
        .grid {
            grid-template-columns: repeat(10, 1fr);
        }
    }
</style>