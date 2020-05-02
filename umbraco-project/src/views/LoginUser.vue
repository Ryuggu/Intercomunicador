<template>
  <div>
    <form class="form-inline" @submit.prevent="login">
      <label for="email">Email</label>
      <input v-model="email" type="email" name="email" autocomplete="off" required />

      <label for="password">Password</label>
      <input v-model="password" type="password" name="password" autocomplete="off" required />

      <button type="submit" name="button">Login</button>
      <p>{{ error }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push({ name: "home" });
        })
        .catch(err => {
          this.error = err.response.data.error;
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
  width: 50%;
  height: 30%;
  padding: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.5);
  border: 1px solid black;
  box-sizing: border-box;
}

.form-inline label {
  margin: 5px 10px 5px 0;
}

.form-inline input {
  vertical-align: middle;
  margin: 5px 10px 5px 0;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
}

.form-inline button {
  padding: 10px 20px;
  background-color: #152235;
  border: 1px solid #ddd;
  color: white;
  cursor: pointer;
}
</style>
