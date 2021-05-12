<script>
    const logo = '/images/vintage couple 02.png'
    
</script>


<header>
    <div class="content">
        <a href="/">
            <img class="logo" src={logo} alt="logo">
        </a>
        <h1>Filmoteka</h1>
    </div>
</header>


<style>
    header {
        background-color: firebrick;
        padding: 0 1rem;
    }

    .content {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        max-width: 1280px;
        min-height: 100px;
        padding: 0 0 1rem;
        margin: 0 auto;
    }
    h1 {
        color: firebrick;
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 6rem;
        padding: 0 3rem;
        margin-bottom: 0;
        letter-spacing: .05em;
        text-shadow: -7px -2px 0 beige, 7px 2px 0 black;
    }
    .logo {
        width: 150px;
        margin-top: 1rem;
    }
</style>