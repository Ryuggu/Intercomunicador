<template>
  <div class="filter__row">
    <div class="filter__option">
      <label class="filter__label">Datetime from</label>
      <Datetime type="datetime" class="filter__input" v-model="dateFrom" format="yyyy-MM-dd HH:mm"></Datetime>
      <!-- <div class="filter__input">2020-04-01 08:00</div> -->
    </div>
    <div class="filter__option">
      <label class="filter__label">Datetime to</label>
      <Datetime type="datetime" class="filter__input" v-model="dateTo" format="yyyy-MM-dd HH:mm"></Datetime>
      <!-- <div class="filter__input">2020-04-08 22:00</div> -->
    </div>
    <div class="filter__option">
      <label class="filter__label">Filter tickets</label>
      <Dropbox class="filter__input" label="Show all">
        <li>➖ Show all</li>
        <li>✔️ Office hours</li>
        <li>❌ Office hours</li>
      </Dropbox>
    </div>
    <div class="filter__option">
      <label class="filter__label">Employee search</label>
      <Dropbox class="filter__input" label="Search">
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
    <div class="filter__option">
      <label class="filter__label">Location search</label>
      <Dropbox class="filter__input" label="Search">
        <li>Odense, Denmark</li>
        <li>Sydney, Australia</li>
        <li>New York, United States</li>
      </Dropbox>
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

<style scoped lang="scss">
.filter__row {
  display: flex;
  justify-content: center;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
}
.filter__option {
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:last-child) {
    margin-right: 32px;
  }
}
.filter__label {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;

  &--large {
    font-size: 48px;
  }
}
.filter__input {
  background-color: #152235;
  width: 240px;
  height: 60px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.5);
  transition: 250ms;

  &:not(ul):hover {
    background-color: lighten(#152235, 10%);
  }
}
</style>