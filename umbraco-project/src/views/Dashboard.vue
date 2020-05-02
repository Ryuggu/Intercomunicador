<template v-if="!isLoading">
  <div class="home">
    <div class="page__container">
      <FilterBox />
      <MainData />
      <ShowHide />
      <AllTicketsColumnHeaders />
      <AllTicketsStats />
      <TicketColumnHeaders />
      <TicketStats />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FilterBox from "@/components/FilterBox.vue";
import AllTicketsColumnHeaders from "@/components/all-tickets__column-headers";
import AllTicketsStats from "@/components/all-tickets__stats";
import TicketColumnHeaders from "@/components/ticket__column-headers";
import TicketStats from "@/components/ticket__stats";
import MainData from "@/components/MainData";
import ShowHide from "@/components/ShowHide";

export default {
  name: "Home",
  components: {
    FilterBox,
    AllTicketsColumnHeaders,
    AllTicketsStats,
    TicketColumnHeaders,
    TicketStats,
    MainData,
    ShowHide
  }
};
export default {
  components: { EventCard },
  data() {
    return {
      isLoading: true,
      events: []
    };
  },
  created() {
    axios.get("//localhost:3000/home").then(({ data }) => {
      this.home = data.home.home;
      this.isLoading = false;
    });
  }
};

</script>

