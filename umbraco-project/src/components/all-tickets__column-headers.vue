<template> 

    <div class="column-headers">
        <div class="column-header blue">
            <p class="column-header__text">
                Creation date
            </p>
        </div>
        <div class="column-header light-blue">
            <p class="column-header__text">
                Avg. first response
            </p>
        </div>
        <div class="column-header blue">
            <p class="column-header__text">
                Avg. handling time
            </p>
        </div>
        <div class="column-header column-header--small light-blue">
            <p class="column-header__text">
                Within
            </p>
        </div>
        <div class="column-header column-header--small light-blue">
            <p class="column-header__text">
                Outside
            </p>
        </div>
        <div class="column-header blue">
            <p class="column-header__text">
                Tickets
            </p>
        </div>
    </div>
    
</template>

<script>
export default {

}
</script>

<style scoped>
/*all-tickets__column-headers*/
.column-headers{
    display: flex;
    flex-direction: row;
}

.column-header {
    display: flex; 
    flex: 2;
    font-weight: 700;
    height: 80px;
    margin-right: 8px;
    margin-top: 20px;
    box-shadow: 3px 3px 6px 0px rgba(0,0,0,0.5);
}

.column-header:last-of-type { /*no margin on the last element*/
    margin-right: 0;
}

.column-header--small {
    flex: 1;
}

.column-header__text {
    margin: auto 20px; /* centers the text in the div + the display: flex on the parent */ 
}
</style>