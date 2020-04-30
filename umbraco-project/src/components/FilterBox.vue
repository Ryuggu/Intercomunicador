<template>
  <div class="filter">
    <div class="filter__row">
      <div class="filter__option">
        <label class="filter__label">Starting date</label>
        <Datetime
          type="datetime"
          class="filter__input"
          v-model="startingDate"
          format="yyyy-MM-dd HH:mm"
        ></Datetime>
      </div>
      <div class="filter__option">
        <label class="filter__label">Ending date</label>
        <Datetime
          type="datetime"
          class="filter__input"
          v-model="endingDate"
          format="yyyy-MM-dd HH:mm"
        ></Datetime>
      </div>
      <div class="filter__option">
        <label class="filter__label">Office hours</label>
        <Dropbox
          v-model="filterValue"
          :options="filterOptions"
          class="filter__input"
          label="Show all"
        />
      </div>
      <div class="filter__option">
        <label class="filter__label">Employee</label>
        <Dropbox
          v-model="employeeValue"
          :options="employeeOptions"
          :searchable="true"
          class="filter__input"
          label="Search…"
        />
      </div>
      <div class="filter__option">
        <label class="filter__label">Location</label>
        <Dropbox
          v-model="locationValue"
          :options="locationOptions"
          :searchable="true"
          class="filter__input"
          label="Search…"
        />
      </div>
    </div>
    <FilterSingle v-if="compare" />
    <div class="filter__row">
      <div class="filter__option">
        <button
          class="filter__apply"
          v-bind:class="{ 'filter__apply--cancel': compare }"
          v-on:click="toggleCompare"
        >{{ compare ? "Cancel" : "Compare" }}</button>
      </div>
      <div class="filter__option">
        <button class="filter__apply">Apply filters</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { DateTime as LuxonDateTime } from "luxon";
import Dropbox from "@/components/Dropbox.vue";
import FilterSingle from "@/components/FilterSingle.vue";
export default {
  components: {
    Dropbox,
    FilterSingle
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
        { id: 1, name: "do node index.js on node-intercom if you can see this"}
      ],
      ignoredEmployeeIds: [
        25052,
        78091,
        90390,
        126673,
        445310,
        538477,
        681365,
        726088,
        764391,
        793884,
        888234,
        970769,
        1789787,
        1878322,
        1948149,
        1979405,
        2230765,
        2270265,
        2365674,
        2764296,
        2792142,
        2796945,
        2920088,
        2929101,
        3106509,
        3162143,
        3370938,
        3379832,
        3440988,
        3643469,
        3809597,
        3844498
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
      outOfficeHrs: false,
      compare: false
    };
  },
  methods: {
    toggleCompare: function() {
      this.compare = !this.compare;
    }
  },
  created() {
    axios({
      method: "GET",
      url: "http://localhost:3000/admins"
    })
      .then(response => {
        let admins = response.data.admins;
        let result = admins.filter(
          employee => !this.ignoredEmployeeIds.includes(parseInt(employee.id))
        );
        this.employeeOptions = result;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped lang="scss">
.filter {
  background-color: #00f;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  padding: 16px;

  &__row {
    display: flex;
    justify-content: center;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  &__option {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:not(:last-child) {
      margin-right: 32px;
    }
  }

  &__label {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 16px;

    &--large {
      font-size: 48px;
    }
  }

  &__input {
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

  &__apply {
    background-color: #39d18c;
    width: 240px;
    height: 60px;
    font-size: 32px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.5);
    transition: 250ms;
    user-select: none !important;

    &:hover {
      background-color: lighten(#39d18c, 10%);
    }

    &--cancel {
      background-color: #fa4657;
      &:hover {
        background-color: lighten(#fa4657, 10%);
      }
    }
  }
}
</style>
