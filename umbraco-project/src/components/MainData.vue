<template>
  <div class="column-filters">
    <div class="ticket-filters light-blue">
      <form class="ticket-filters__text">
        <label for="name">Avg. first response</label>
        <br />
        <label for="name">1hour 3min 42sec</label>
      </form>
    </div>

    <div class="ticket-filters blue">
      <form class="ticket-filters__text">
        <label for="name">Avg. handling time</label>
        <br />
        <label for="name">6days 14hours 32min</label>
      </form>
    </div>

    <div class="ticket-filters light-blue">
      <form class="ticket-filters__text">
        <label for="name">Total tickets</label>
        <br />
        <label for="name">{{ totalTickets }}</label>
      </form>
    </div>

    <div class="ticket-filters blue">
      <form class="ticket-filters__text">
        <label for="name">Within office hours</label>
        <br />
        <label for="name">55</label>
      </form>
    </div>

    <div class="ticket-filters blue">
      <form class="ticket-filters__text">
        <label for="name">Outside of office hours</label>
        <br />
        <label for="name">12</label>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    totalTickets() {
      return this.$store.state.conversations.length;
    }
  },
  created() {
    this.$store.dispatch("fetchConversations");
  }
};
</script>

<style scoped lang="scss">
/*ticket__column-headers*/

.column-filters {
  display: flex;
  flex-direction: row;
}

.ticket-filters {
    display: flex; 
    flex: 1;
    font-weight: 700;
    font-size: 2rem;
    height: 6rem;
    margin-right: 0.5rem;
    margin-top: 1.25rem;
    box-shadow: 3px 3px 6px 0px rgba(0,0,0,0.5);
}
.ticket-filters__text{
  height: 3.125rem;
      font-size: 2rem;


}

.ticket-filters:last-of-type {
  /*no margin on the last element*/
  margin-right: 0;
}

.ticket-filters__text {
    margin: auto 1.25rem; /* centers the text in the div + the display: flex on the parent */ 
}
</style>