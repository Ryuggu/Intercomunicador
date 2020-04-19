<template>
<div class="header__title">
    <h1>Rastreador de Estadísticas para Entradas de Intercomunicador</h1>
        
    <nav>
   <div class="menu-item">
       <Dropdown title=""  :items="Setting" /> 
       <a href="#"><vue-fontawesome icon="user" size="2" color="lightgray"></vue-fontawesome></a>
       </div>
    </nav>
  </div>
</template>
<script>
import Dropdown from "./Dropdown";

export default {
    name: 'NavBar',
    components:{Dropdown},
    data(){
        return{
            Setting:[
                {
                    title:'Change Theme',
                    link:'#'
                },
                {
                    title:'Tickets per page',
                    link:'#'
                }
            ]
        }
    }
    
}
</script>
<style scoped>
.header__title{
    text-align: center;
    padding-top: 25px;

}

h1{
    color: white;
    font-size: 22px;
}
nav{
    display: flex;
    align-items:center;
    justify-content:flex-end;
}

.menu-item a.active{
    background-color: rgb(55, 65, 100);


}

.menu-item{
    color: azure;
    padding: 2px 38px;
    position: relative;
    display: flex;
}  
.menu-item a{
    color: inherit;
    text-decoration: none;
}  
.menu-sub-title{color: white;

}
</style>
