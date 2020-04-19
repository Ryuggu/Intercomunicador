<template>
  <div class="page__container">
    <AllTicketsColumnHeaders />
    <AllTicketsStats />
    <TicketColumnHeaders />
    <TicketStats />
  </div>
</template>

<script>
// @ is an alias to /src
import AllTicketsColumnHeaders from "@/components/all-tickets__column-headers";
import AllTicketsStats from "@/components/all-tickets__stats";
import TicketColumnHeaders from "@/components/ticket__column-headers";
import TicketStats from "@/components/ticket__stats";

export default {
  name: "Home",
  components: {
    AllTicketsColumnHeaders,
    AllTicketsStats,
    TicketColumnHeaders,
    TicketStats
  }
};
</script>
