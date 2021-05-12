<script>
    import { calcTime, convertMoney } from '../helpers'

    export let time, budget, revenue;


</script>


<ul>
    <li><span>Running Time:</span> { calcTime( time ) }</li>
    <li><span>Budget:</span> { budget ? convertMoney( budget ) : "N/A" }</li>
    <li><span>Revenue:</span> { revenue ? convertMoney( revenue ) : "N/A" }</li>
</ul>


<style>
    ul { 
        list-style: none;
        margin: 1rem;
        padding: 0;
        display: flex;
        justify-content: space-around;
        color: beige;
    }
    span { 
        color: firebrick;
    }
</style>