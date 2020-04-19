<template>
  <div class="filter">
    <div class="filter__options">
      <div class="filter__entry">
        <label>Datetime from</label>
        <Datetime
          type="datetime"
          class="filter__input"
          v-model="dateFrom"
          format="yyyy-MM-dd HH:mm"
        ></Datetime>
      </div>
      <div class="filter__entry">
        <label>Datetime to</label>
        <Datetime type="datetime" class="filter__input" v-model="dateTo" format="yyyy-MM-dd HH:mm"></Datetime>
      </div>
      <div class="filter__entry">
        <label>Filter tickets</label>
        <Dropbox label="Show all">
          <li>➖ Show all</li>
          <li>✔️ Office hours</li>
          <li>❌ Office hours</li>
        </Dropbox>
      </div>
      <div class="filter__entry">
        <label>Employee search</label>
        <Dropbox label="Search">
          <li>Tyron</li>
          <li>Shae</li>
          <li>Renato</li>
          <li>Andres</li>
          <li>Edmond</li>
          <li>Katherine</li>
          <li>Peg</li>
          <li>Aron</li>
          <li>Nancy</li>
          <li>Octavia</li>
        </Dropbox>
      </div>
      <div class="filter__entry">
        <label>Compare periods</label>
        <button class="filter__button filter__input">Compare</button>
      </div>
    </div>
    <div class="filter__options">
      <div class="filter__entry">
        <button class="filter__apply">Apply filters</button>
      </div>
    </div>
  </div>
</template>

<script>
import { DateTime as LuxonDateTime } from "luxon";
import Dropbox from "@/components/Dropbox.vue";
export default {
  components: {
    Dropbox
  },
  data() {
    return {
      dateFrom: LuxonDateTime.local()
        .minus({ month: 1 })
        .toISO(),
      dateTo: LuxonDateTime.local().toISO(),
      inOfficeHrs: false,
      outOfficeHrs: false
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");

.vdatetime-input {
  background-color: #152235;
  color: #fff;
  border: none;
  text-align: center;
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  padding: 1rem;
}

.filter__input .vdatetime-popup__header,
.filter__input .vdatetime-calendar__month__day--selected > span > span,
.filter__input .vdatetime-calendar__month__day--selected:hover > span > span {
  background: #101f3b;
}

.filter__input .vdatetime-year-picker__item--selected,
.filter__input .vdatetime-month-picker__item--selected,
.filter__input .vdatetime-time-picker__item--selected,
.filter__input .vdatetime-popup__actions__button {
  color: #1b254f;
}

.filter {
  margin: auto;
  background-color: #00f;
  font-family: "Lato", sans-serif;
  color: #fff;
  padding: 1rem 0;
}

.filter__options {
  display: flex;
  justify-content: center;
}

.filter__entry {
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.25rem;
    font-weight: bold;
  }
}

.filter__apply {
  flex: 0 0 20%;
  margin: 0 1rem;
  padding: 0.75rem;
  border: none;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  font-family: "Lato", sans-serif;
  background-color: #39d18c;
  color: #fff;
  transition: 250ms;

  &:hover {
    background-color: lighten(#39d18c, 10%);
  }
}

.filter__input {
  background-color: #152235;
  color: #fff;
  margin: 1rem;
}
</style>