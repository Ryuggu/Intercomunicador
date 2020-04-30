<template>
  <div class="filter__row">
    <div class="filter__option">
      <label v-if="showLabels" class="filter__label">Starting date</label>
      <Datetime
        type="datetime"
        class="filter__input"
        v-model="startingDate"
        format="yyyy-MM-dd HH:mm"
      ></Datetime>
    </div>
    <div class="filter__option">
      <label v-if="showLabels" class="filter__label">Ending date</label>
      <Datetime
        type="datetime"
        class="filter__input"
        v-model="endingDate"
        format="yyyy-MM-dd HH:mm"
      ></Datetime>
    </div>
    <div class="filter__option">
      <label v-if="showLabels" class="filter__label">Office hours</label>
      <Dropbox
        v-model="filterValue"
        :options="filterOptions"
        class="filter__input"
        label="Show all"
      />
    </div>
    <div class="filter__option">
      <label v-if="showLabels" class="filter__label">Employee</label>
      <Dropbox
        v-model="employeeValue"
        :options="employeeOptions"
        :searchable="true"
        class="filter__input"
        label="Search…"
      />
    </div>
    <div class="filter__option">
      <label v-if="showLabels" class="filter__label">Location</label>
      <Dropbox
        v-model="locationValue"
        :options="locationOptions"
        :searchable="true"
        class="filter__input"
        label="Search…"
      />
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
  props: {
    showLabels: Boolean
  },
  data() {
    return {
      filterValue: { id: 1, name: "➖ Show all" },
      filterOptions: [
        { id: 1, name: "➖ Show all" },
        { id: 2, name: "✔️ Within hours" },
        { id: 3, name: "❌ Outside hours" }
      ],
      employeeValue: null,
      employeeOptions: [
        { id: 1, name: "Tyron" },
        { id: 2, name: "Shae" },
        { id: 3, name: "Renato" },
        { id: 4, name: "Andres" },
        { id: 5, name: "Edmond" },
        { id: 6, name: "Katherine" },
        { id: 7, name: "Peg" },
        { id: 8, name: "Aron" },
        { id: 9, name: "Nancy" },
        { id: 10, name: "Octavia" }
      ],
      locationValue: null,
      locationOptions: [
        { id: 1, name: "Odense, Denmark" },
        { id: 2, name: "Sydney, Australia" },
        { id: 3, name: "New York, United States" }
      ],
      startingDate: LuxonDateTime.local()
        .minus({ month: 1 })
        .toISO(),
      endingDate: LuxonDateTime.local().toISO(),
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
