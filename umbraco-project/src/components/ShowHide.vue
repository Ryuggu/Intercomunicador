<template>
 <div class="filter">
    <div class="filter__row">
      <div class="filter__option">
        <Datetime
          type="datetime"
          class="filter__input"
          v-model="dateFrom"
          format="yyyy-MM-dd HH:mm"
        ></Datetime>
        <!-- <div class="filter__input">2020-04-01 08:00</div> -->
      </div>
      <div class="filter__option">
        <Datetime type="datetime" 
        class="filter__input" 
        v-model="dateTo" 
        format="yyyy-MM-dd HH:mm"></Datetime>
        <!-- <div class="filter__input">2020-04-08 22:00</div> -->
      </div>
    
        <FilterSingle v-if="compare" />
    <div class="filter__row">
      <div class="filter__option">
        <button v-on:click="toggleCompare" class="filter__apply">Show Date</button>
      </div>
    </div>
    </div>
 </div>
      
 
 
</template>

<script>
import { DateTime as LuxonDateTime } from "luxon";
export default {
  components: {
  },
  data() {
    return {
      
      dateTo: LuxonDateTime.local().toISO(),
      
      compare: false
    };
  },
  methods: {
    toggleCompare: function() {
      this.compare = !this.compare;
    }
  }
};
</script>


<style scoped lang="scss">

.filter {
  background-color: transparent;
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin: 15px;
}
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
  align-items: inherit;

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
  background-color: #fff;
  color:black;
  width: 240px;
  height: 60px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.5);
  transition: 250ms;

  &:not(ul):hover {
    background-color: lighten(#f9faf9, 10%);
  }
}


.filter__apply {
  background-color: #fff;
  width: 240px;
  color: black;
  height: 60px;
  font-size: 28px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.5);
  transition: 250ms;

  &:hover {
    background-color: lighten(#f9faf9, 10%);
  }
}
</style>