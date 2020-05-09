import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { DateTime as LuxonDateTime, Duration } from "luxon";

Vue.use(Vuex);


// #############################################
// =============== HELPERS ====================
// #############################################

// Helper function to get average response and handling time
function getAverageTime(times) {

  // Filter out open tickets (last_close_at == null)
  var closedTickets =
    times
      .filter(t => t.end != null);

  // Calculate average time: map to make list of periods,
  // reduce to add them together
  var avgTimeInSeconds =
    closedTickets
      .map(t => t.end - t.start)
      .reduce((acc, cur) => acc + cur, 0);

  // Divide by count if average time is non-zero
  // (division returns NaN if average is zero)
  if (avgTimeInSeconds) avgTimeInSeconds /= closedTickets.length;

  // Return a Luxon Duration object (represents a period of time)
  return Duration.fromObject({ seconds: avgTimeInSeconds });
}


export default new Vuex.Store({


  // #############################################
  // =============== STATE =======================
  // #############################################

  state: {
    user: null,
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
    ],

    // Main data
    conversations: []
  },


  // #############################################
  // =============== GETTERS =====================
  // #############################################

  getters: {

    loggedIn(state) {
      return !!state.user;
    },

    // Get average response time
    averageFirstResponse(state) {
      return getAverageTime(
        state.conversations
          .map(conv => ({
            start: conv.created_at,
            end: conv.statistics.first_admin_reply_at
          }))
      )
    },

    // Get average handling time
    averageHandlingTime(state) {
      return getAverageTime(
        state.conversations
          .map(conv => ({
            start: conv.created_at,
            end: conv.statistics.last_close_at
          }))
      )
    },

    // Get tickets that are created within office hours
    withinHours(state) {
      return state.conversations
        .filter(conv => {
          var created = LuxonDateTime.fromSeconds(conv.created_at)
          return created.hour >= 8 && created.hour < 22
        })
    },

    // Get tickets that are created outside office hours
    outsideHours(state) {
      return state.conversations
        .filter(conv => {
          var created = LuxonDateTime.fromSeconds(conv.created_at)
          return created.hour < 8 || created.hour >= 22
        })
    },
  },


  // #############################################
  // =============== MUTATIONS ===================
  // #############################################

  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.token}`;
    },
    LOGOUT(state) {
      state.user = null;
      localStorage.removeItem("user");
      axios.defaults.headers.common["Authorization"] = null;
    },

    // Filter data
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
    },

    // Main data
    setConversations(state, conversations) {
      state.conversations = conversations;
    }
  },


  // #############################################
  // =============== ACTIONS =====================
  // #############################################

  actions: {
    login({ commit }, credentials) {
      return axios
        .post("//localhost:5000/login", credentials)
        .then(({ data }) => {
          commit("SET_USER_DATA", data);
        });
    },
    logout({ commit }) {
      commit("LOGOUT");
    },

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
    },

    // GET country name
    fetchLocations() {
      axios.get("http://localhost:3000/contacts")
        .then(response => {
          let contacts = response.data.data;
          contacts.forEach(element => {
            console.log(element.location.country);
          });

          this.locationOptions = contacts;
        })

        .catch(error => {
          console.log(error);
        });
    },

    // Get tickets
    fetchConversations(context) {
      axios.get("http://localhost:3000/conversations").then(response => {
        let conversations = response.data;
        context.commit("setConversations", conversations);
      }).catch(error => {
        console.log(error);
      });
    }
  }
})
