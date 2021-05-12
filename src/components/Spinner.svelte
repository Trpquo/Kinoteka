<div id="spinner"></div>

<style>
    #spinner {
        border: 5px solid firebrick;
        border-top: 5px solid beige;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 1s ease-in-out infinite;
        margin: -3rem auto 20px;
    }
    @keyframes spin {
        from { transform: rotate(0deg) }
        to { transform: rotate(360deg) }
    }
</style>