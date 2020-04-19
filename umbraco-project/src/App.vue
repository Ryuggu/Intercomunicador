<template>
  <div id="app">
<DateHeader/>
    <NavBar />
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
  @import './assets/style/style.css';


</style>
