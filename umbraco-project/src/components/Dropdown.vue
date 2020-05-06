<template>

<div class="menu-item" @click="isOpen =!isOpen"><a href="#">
        {{title}}<a href="#"><vue-fontawesome icon="cog" size="2.5" color="lightgray"></vue-fontawesome></a> </a>
        <transition name="fade" apper>
            
        <div class="sub-menu" v-if="isOpen">
            <div v-for="(item, i) in items" :key="i" class="menu-item">
            <a :href="item.link">{{item.title}}</a>
            
        </div>
     </div>
        </transition>
 </div>

</template>

<script>
export default {
    name:'Dropdown',
    props:['title','items'],
    data(){
    return{
        isOpen:false
    }
    }
}
</script>
<style scoped lang="scss">
nav .menu-item .sub-menu{
    position: absolute;
    background-color:#F6EEE7;
    padding: 1rem;
    top:4rem;
    right:1rem;
    inline-size: max-content;
    color:inherit;
    
}
nav .menu-item .sub-menu a{
    font-size: 1.6rem;
    color:black;
  padding: 1rem;
    text-decoration: none;
    }

</style>
