<template>
  <div class="home">
    <AppFilter />
  </div>
</template>

<script>
// @ is an alias to /src
import AppFilter from "@/components/AppFilter.vue";

export default {
  name: "Home",
  components: {
    AppFilter
  }
};
</script>
