<template>
  <div class="header__title">
    <nav>
      <h1>Rastreador de Estadísticas para Entradas de Intercomunicador</h1>
      <div class="menu-item">
        <router-link v-if="!loggedIn" to="/login" class="button">
          <vue-fontawesome icon="user" size="2.5" color="lightgray"></vue-fontawesome>
        </router-link>
        <Dropdown title :items="Setting" />
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Dropdown from "./Dropdown";

export default {
  name: "NavBar",
  components: { Dropdown },

  ...mapGetters(["loggedIn"]),
  data() {
    return {
      Setting: [
        {
          title: "Change Theme",
          link: "#"
        },
        {
          title: "Tickets per page",
          link: "#"
        }
      ]
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push({ name: "home" });
      });
    }
  }
};
</script>
<style scoped lang="scss">
.header__title {
  text-align: center;
 	padding: 0.25rem;
  background-color: #1b264f;
}

h1 {
  color: white;
  font-size: 2.4rem;
  text-align: center;
  padding: 1rem 18rem;
 
  text-decoration: none;
}
nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.menu-item a.active {
  background-color: rgb(55, 65, 100);
}

.menu-item {
  color: azure;
  padding: 0rem 2rem;
  position: relative;
  display: flex;
}
.menu-item a {
  color: inherit;
  text-decoration: none;
}
.menu-sub-title {
  color: white;
}
</style>
