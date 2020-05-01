import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { DateTime as LuxonDateTime } from "luxon";

Vue.use(Vuex);

export default new Vuex.Store({

  // STATE
  state: {

    // Filter state
    startingDate: LuxonDateTime.local()
      .minus({ month: 1 })
      .toISO(),
    endingDate: LuxonDateTime.local().toISO(),
    filterValue: { id: 1, name: "➖ Show all" },
    filterOptions: [
      { id: 1, name: "➖ Show all" },
      { id: 2, name: "✔️ Within hours" },
      { id: 3, name: "❌ Outside hours" }
    ],
    employeeValue: null,
    employeeOptions: [],
    locationValue: null,
    locationOptions: [
      { id: 1, name: "Odense, Denmark" },
      { id: 2, name: "Sydney, Australia" },
      { id: 3, name: "New York, United States" }
    ],

    // Ignored employees, should not be displayed in filter
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
    ]
  },

  // MUTATIONS
  mutations: {
    setStartingDate(state, date) {
      state.startingDate = date;
    },
    setEndingDate(state, date) {
      state.endingDate = date;
    },
    setFilterValue(state, filterValue) {
      state.filterValue = filterValue;
    },
    setFilterOptions(state, filterOptions) {
      state.filterOptions = filterOptions;
    },
    setEmployeeValue(state, employee) {
      state.employeeValue = employee;
    },
    setEmployeeOptions(state, employeeOptions) {
      state.employeeOptions = employeeOptions;
    },
    setLocationValue(state, location) {
      state.locationValue = location;
    },
    setLocationOptions(state, locationOptions) {
      state.locationOptions = locationOptions;
    }
  },

  // ACTIONS
  actions: {
    fetchEmployees(context) {
      axios.get("http://localhost:3000/admins").then(response => {
        let admins = response.data.admins;
        let result = admins.filter(
          employee => !context.state.ignoredEmployeeIds.includes(parseInt(employee.id))
        );
        context.commit("setEmployeeOptions", result);
      }).catch(error => {
        console.log(error);
      });
    }
  },

  modules: {}
});
