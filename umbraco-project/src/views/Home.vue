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
// @ is an alias to /src
import FilterBox from "@/components/FilterBox.vue";
import DailyTicketsStats from "@/components/all-tickets__column-headers";
import MainData from "@/components/MainData";
import ShowHide from "@/components/ShowHide";

export default {
  name: "Home",
  components: {
    FilterBox,
    DailyTicketsStats,
    MainData,
    ShowHide
  }
};
</script>
