<template>

<div class="menu-item" @click="isOpen =!isOpen"><a href="#">
        {{title}}<a href="#"><vue-fontawesome icon="cog" size="2" color="lightgray"></vue-fontawesome></a> </a>
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
