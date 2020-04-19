<template>
  <div class="home">
    
    <div class="page__container">
      <AppFilter />
      <AllTicketsColumnHeaders />
      <AllTicketsStats />
      <TicketColumnHeaders />
      <TicketStats />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppFilter from "@/components/AppFilter.vue";
import AllTicketsColumnHeaders from "@/components/all-tickets__column-headers";
import AllTicketsStats from "@/components/all-tickets__stats";
import TicketColumnHeaders from "@/components/ticket__column-headers";
import TicketStats from "@/components/ticket__stats";

export default {
  name: "Home",
  components: {
    AppFilter,
    AllTicketsColumnHeaders,
    AllTicketsStats,
    TicketColumnHeaders,
    TicketStats
  }
};
</script>
