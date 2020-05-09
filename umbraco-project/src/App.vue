<template>
  <div id="app">
    <NavBar />
        <router-view class="page" />

</div>
  
</template>
<script>
import NavBar from "./components/NavBar";


export default {
  name: 'app',
  components:{NavBar}
  
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}
header{
  width: 100%;
  background-color: #1B264F;
  padding: 15px;

}

</style>
