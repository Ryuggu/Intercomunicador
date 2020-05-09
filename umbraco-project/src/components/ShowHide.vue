<template>
  <div class="appirance_ticket">
    <div class="btn">01-01-2019</div>

    <div class="btn">31-12-2019</div>

    <div class="btn">"✔ Show tickets"</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTickets: "✔️ Show tickets",
      hideTickets: "❌ Hide tickets",
    };
  },
  methods: {
    toggleShowHide() {
      /*ShowHide method goes here */
    }
  }
};
</script>



<style scoped>
.appearance_ticket {
  margin: 2rem;
  display: flex;
}
.btn {
  background-color: #fff;
  color: black;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.5);
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  font-size: 2rem;
  margin: 1rem;
}

.appearance_ticket {
  margin-left: 28%;
}
</style>