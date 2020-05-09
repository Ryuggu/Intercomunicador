<template>
  <div class="appearance_ticket">
    <div class="btn">01-01-2019</div>

    <div class="btn">31-12-2019</div>

    <div class="btn noselect" v-on:click="toggleShowHide">{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "✔️ Show tickets",
      hidden: false
    };
  },
  methods: {
    toggleShowHide() {
      // Toggles between the the two following values when the button is clicked
      if (this.hidden ) {
          this.message = "✔️ Show tickets"
      } else {
          this.message = "❌ Hide tickets"
      }
      this.hidden = !this.hidden
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

/*Disables highlighting of the button text when clicked*/
.noselect {
    user-select: none;
}
</style>