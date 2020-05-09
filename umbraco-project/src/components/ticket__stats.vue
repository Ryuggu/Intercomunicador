<template>
  
    <div class="ticket-table">
        <div class="ticket-table__cell">
            <p class="ticket-table__data">
                00:15:08
            </p>
        </div>
        <div class="ticket-table__cell">
            <p class="ticket-table__data">
                1h 16m 36s
            </p>
        </div>
        <div class="ticket-table__cell">
            <p class="ticket-table__data">
                6d 14h 32m
            </p>
        </div>
        <div class="ticket-table__cell red">
            <p class="ticket-table__data">
                No
            </p>
        </div>
        <div class="ticket-table__cell">
            <a href class="ticket-table__data ticket-table__data--link">
                26044195860
            </a>
        </div>
        <div class="ticket-table__cell">
            <p class="ticket-table__data">
                Odense, Denmark
            </p>
        </div>
    </div>

</template>

<script>
export default {
    name: "ticket__stats",
}
</script>

<style scoped lang="scss">
/*ticket__stats*/

.ticket-table{
    display: flex;
    flex-direction: row;
}

.ticket-table__cell {
    display: flex; 
    flex: 2;
    font-weight: 700;
    font-size: 2.1rem;
    height: 48px;
    margin-right: 8px;
    margin-top: 8px;
    box-shadow: 3px 3px 6px 0px rgba(0,0,0,0.5);
    background-color: white;
}

.ticket-table__cell:last-of-type { /*no margin on the last element*/
    margin-right: 0;
}

.ticket-table:nth-of-type(even) .ticket-table__cell {
    background-color: #f6eee7;
}

.ticket-table__cell--small {
    flex: 1;
}

.ticket-table__data {
    margin: auto 20px; /* centers the text in the div + the display: flex on the parent */ 
    color: black;
    font-weight: 400;
}

.ticket-table__data--link {
    color: #0F54ED;
}
</style>