<template>
  <div class="home">
  <AppFilter />
    <div class="page__container">
      <AllTicketsColumnHeaders />
      <AllTicketsStats />
      <TicketColumnHeaders />
      <TicketStats />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AllTicketsColumnHeaders from "@/components/all-tickets__column-headers";
import AllTicketsStats from "@/components/all-tickets__stats";
import TicketColumnHeaders from "@/components/ticket__column-headers";
import TicketStats from "@/components/ticket__stats";
import AppFilter from "@/components/AppFilter.vue";

export default {
  name: "Home",
  components: {
    AllTicketsColumnHeaders,
    AllTicketsStats,
    TicketColumnHeaders,
    TicketStats,
    AppFilter
  }
};
</script>
