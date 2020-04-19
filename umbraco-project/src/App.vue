<template>
  <div id="app">
<DateHeader/>
    <NavBar />
  <router-view />
</div>
  
</template>
<script>
import NavBar from "./components/NavBar";
import DateHeader from "./components/DateHeader"


export default {
  name: 'app',
  components:{NavBar,DateHeader}
  
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
