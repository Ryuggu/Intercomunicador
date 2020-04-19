<template>

    <div class="tickets-table">
        <div class="ticket-table__cell">
            <p class="ticket-table__data">
                2020-04-01
            </p>
        </div>
        <div class="ticket-table__cell">
            <p class="ticket-table__data">
                0d 1h 16m 36s
            </p>
        </div>
        <div class="ticket-table__cell">
            <p class="ticket-table__data">
                3d 14h 32m 12s
            </p>
        </div>
        <div class="ticket-table__cell ticket-table__cell--small green">
            <p class="ticket-table__data">
                29
            </p>
        </div>
        <div class="ticket-table__cell ticket-table__cell--small red">
            <p class="ticket-table__data">
                10
            </p>
        </div>
        <div class="ticket-table__cell">
            <p class="ticket-table__data">
                39
            </p>
        </div>
    </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
/*all-tickets__stats*/

.tickets-table{
    display: flex;
    flex-direction: row;
}

.ticket-table__cell {
    display: flex; 
    flex: 2;
    font-weight: 700;
    height: 48px;
    margin-right: 8px;
    margin-top: 8px;
    box-shadow: 3px 3px 6px 0px rgba(0,0,0,0.75);
    background-color: white;
}

.ticket-table__cell:last-of-type { /*no margin on the last element*/
    margin-right: 0;
}

.tickets-table:nth-of-type(even) .ticket-table__cell {
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
</style>