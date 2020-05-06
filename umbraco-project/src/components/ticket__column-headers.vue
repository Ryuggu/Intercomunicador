<template>
  
    <div class="column-headers">
        <div class="ticket-header light-blue">
            <p class="ticket-header__text">
                Creation time
            </p>
        </div>
        <div class="ticket-header blue">
            <p class="ticket-header__text">
                First response
            </p>
        </div>
        <div class="ticket-header light-blue">
            <p class="ticket-header__text">
                Handling time
            </p>
        </div>
        <div class="ticket-header blue">
            <p class="ticket-header__text">
                Office hours?
            </p>
        </div>
        <div class="ticket-header light-blue">
            <p class="ticket-header__text">
                Conversation ID
            </p>
        </div>
        <div class="ticket-header blue">
            <p class="ticket-header__text">
                Location
            </p>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
/*ticket__column-headers*/

.column-headers{
    display: flex;
    flex-direction: row;
}

.ticket-header {
    display: flex; 
    flex: 1;
    font-weight: 700;
    font-size: 2.1rem;
    height: 48px;
    margin-right: 8px;
    margin-top: 20px;
    box-shadow: 3px 3px 6px 0px rgba(0,0,0,0.5);
}

.ticket-header:last-of-type { /*no margin on the last element*/
    margin-right: 0;
}

.ticket-header__text {
    margin: auto 20px; /* centers the text in the div + the display: flex on the parent */ 
}
</style>