<template>
  <div>
    <form class="form-inline"  @submit.prevent="register">
      <label for="name">Name</label>
      <input v-model="name" type="text" name="name" value />

      <label for="email">Email</label>
      <input v-model="email" type="email" name="email" value />

      <label for="password">Password</label>
      <input v-model="password" type="password" name value />

      <button type="submit" name="button">Register</button>
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
      <router-link to="/loginUser">Already have an account? Login.</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errors: null
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "dashboard" });
        })
        .catch(err => {
          this.errors = err.response.data.errors;
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.form-inline {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  height: 30rem;
  padding: 3rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  border: 1px solid black;
  box-shadow: 0rem 0rem 1.2rem 0rem black; 
  box-sizing: border-box;
    font-size: 2rem;

}

.form-inline label {
  margin: 5px 10px 5px 0;
    color: black;

}

.form-inline input {
  vertical-align: middle;
  margin: 5px 10px 5px 0;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  color: black;
}

.form-inline button {
  padding: 10px 20px;
  background-color: #152235;
  border: 1px solid #ddd;
  color: white;
  cursor: pointer;
}
</style>
