<script>
    import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../config'

    export let image
    export let title
    export let text
</script>

<div id="hero" style="--image: url({ IMAGE_BASE_URL + BACKDROP_SIZE + image })">
    <h1>{ title }</h1>
    <p>{ text }</p>
</div>

<style>
    #hero {
        background: linear-gradient(to bottom, #0000 39%, #0000 41%, #000a 100%), var(--image), #333;
        background-size: 100%, cover;
        background-position: center;
        height: 600px;
        animation: animateHeroImage 1s;
        padding: 2rem;

        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: flex-end;
        align-content: flex-end;
        color: white;
        font-family:'Courier New', Courier, monospace;
    }
    @keyframes animateHeroImage {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    h1 {
        margin: 0;
        width: 100%;
    }
</style>