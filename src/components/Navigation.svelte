<script>
    export let movie
</script>


<nav>
    <a href="/">Home</a>
    <span>&nbsp;&gt;&nbsp;</span>{ movie }
</nav>


<style>
    nav {
        padding: .5rem 2rem;
        display: flex;
        align-items: center;
        width: 100%;
        height: 3rem;
        background-color: #111;
        color: beige;
    }
    a, a:visited {
        color: firebrick;
        text-decoration: none;
    }
    span {
        color: #666;
    }

</style>