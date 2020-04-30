<template>

<div class="menu-item" @click="isOpen =!isOpen"><a href="#">
        {{title}}<a href="#"><vue-fontawesome icon="cog" size="1.5" color="lightgray"></vue-fontawesome></a> </a>
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
    padding: 25px 15px;
    top:100%;
    left:10%;
    inline-size: max-content;
    color:inherit;
    
}
nav .menu-item .sub-menu a{
    color:black;
    padding:35px 5px;
    text-decoration: none;
    }
.fade-enter-activ,
.fade-leave-active{
    transition: all.4s ease-out;

}
.fade-enter,
.fade-enter-to{
    opacity: 0;
}
</style>
