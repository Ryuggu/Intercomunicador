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
import Dropbox from "@/components/Dropbox.vue";
import FilterSingle from "@/components/FilterSingle.vue";

export default {
  components: {
    Dropbox,
    FilterSingle
  },
  data() {
    return {
      inOfficeHrs: false,
      outOfficeHrs: false,
      compare: false
    };
  },
  methods: {
    toggleCompare() {
      this.compare = !this.compare;
    }
  },
  computed: {
    startingDate: {
      get() {
        return this.$store.state.startingDate;
      },
      set(newDate) {
        this.$store.commit("setStartingDate", newDate);
      }
    },
    endingDate: {
      get() {
        return this.$store.state.endingDate;
      },
      set(newDate) {
        this.$store.commit("setEndingDate", newDate);
      }
    },
    filterValue: {
      get() {
        return this.$store.state.filterValue;
      },
      set(filterValue) {
        this.$store.commit("setFilterValue", filterValue);
      }
    },
    filterOptions() {
      return this.$store.state.filterOptions;
    },
    employeeValue: {
      get() {
        return this.$store.state.employeeValue;
      },
      set(employee) {
        this.$store.commit("setEmployeeValue", employee);
      }
    },
    employeeOptions() {
      return this.$store.state.employeeOptions;
    },
    locationValue: {
      get() {
        return this.$store.state.locationValue;
      },
      set(location) {
        this.$store.commit("setLocationValue", location);
      }
    },
    locationOptions() {
      return this.$store.state.locationOptions;
    }
  },
  created() {
    this.$store.dispatch("fetchEmployees");
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
