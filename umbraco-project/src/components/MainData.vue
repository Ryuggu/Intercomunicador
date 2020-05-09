<template>
  <div class="column-filters">
    <div class="ticket-filters light-blue">
      <form class="ticket-filters__text">
        <label for="name">Avg. first response</label>
        <br />
        <label for="name">{{ averageFirstResponse.toFormat("d'd' h'h' m'm' s's'") }}</label>
      </form>
    </div>

    <div class="ticket-filters blue">
      <form class="ticket-filters__text">
        <label for="name">Avg. handling time</label>
        <br />
        <label for="name">{{ averageHandlingTime.toFormat("d'd' h'h' m'm' s's'") }}</label>
      </form>
    </div>

    <div class="ticket-filters light-blue">
      <form class="ticket-filters__text">
        <label for="name">Total tickets</label>
        <br />
        <label for="name" class="ticket-filters__text--big">{{ totalTickets }}</label>
      </form>
    </div>

    <div class="ticket-filters blue">
      <form class="ticket-filters__text">
        <label for="name">Within office hours</label>
        <br />
        <label for="name" class="ticket-filters__text--big">{{ withinHours }}</label>
      </form>
    </div>

    <div class="ticket-filters blue">
      <form class="ticket-filters__text">
        <label for="name">Outside of office hours</label>
        <br />
        <label for="name" class="ticket-filters__text--big">{{ outsideHours }}</label>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    averageFirstResponse() {
      return this.$store.getters.averageFirstResponse;
    },
    averageHandlingTime() {
      return this.$store.getters.averageHandlingTime;
    },
    totalTickets() {
      return this.$store.state.conversations.length;
    },
    withinHours() {
      return this.$store.getters.withinHours.length;
    },
    outsideHours() {
      return this.$store.getters.outsideHours.length;
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
  height: 12rem;
  margin-right: 0.8rem;
  margin-top: 1.25rem;
  box-shadow: 3px 3px 6px 0px rgba(0,0,0,0.5);
}
.ticket-filters__text{
  height: 3.125rem;
  font-size: 2rem;
}

.ticket-filters__text--big {
  font-size: 4rem;
}

.ticket-filters:last-of-type {
  /*no margin on the last element*/
  margin-right: 0;
}

.ticket-filters__text {
  margin:0.5rem 3rem ; /* centers the text in the div + the display: flex on the parent */ 
}
</style>