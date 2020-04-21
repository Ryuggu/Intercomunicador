<template>
<form class="form-inline" action="/action_page.php">

  <input type="email" id="email"  name="email">
 
  <input type="password" id="pwd"  name="pswd">
  <label>
  </label>
  <button type="">❌Hide tickets</button>

</form>

</template>



<style lang="scss" scoped>
.form-inline {  
  display: flex;
  justify-content: center;
    flex-flow: row wrap;
  align-items: center;
  margin: 1rem;
  padding: 1rem 0rem;
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
  background-color:#fff;
  border: 1px solid #ddd;
  color: black;
  cursor: pointer;
}

.form-inline button:hover {
  background-color: royalblue;
}




</style>