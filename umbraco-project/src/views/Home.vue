<template>
  <div class="home">
    <template v-if="!isLoading">
      <div class="page__container">
        <FilterBox />
        <MainData />
        <ShowHide />
        <DailyTicketsStats />
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import FilterBox from "@/components/FilterBox.vue";
import DailyTicketsStats from "@/components/allTicketsColumnHeaders";
import MainData from "@/components/MainData";
import ShowHide from "@/components/ShowHide";

export default {
  name: "Home",
  components: {
    FilterBox,
    DailyTicketsStats,
    MainData,
    ShowHide
  },
  created() {
    axios.get("//localhost:5000/home").then(({ data }) => {
      this.home = data.home.home;
      this.isLoading = false;
    });
  }
};
</script>

