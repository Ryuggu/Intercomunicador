<template>
<header>

    <nav>
         <h1>Rastreador de Estadísticas para Entradas de Intercomunicador</h1>

   <div class="menu-item">
       <Dropdown title=""  :items="Setting" /> 
       <a href="#"><vue-fontawesome icon="user" size="2" color="lightgray"></vue-fontawesome></a>
       </div>
    </nav>

</header>
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
                    title:'CHange Theme',
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
