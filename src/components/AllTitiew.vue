<template>
    <div class="row ">
      <div class="col" v-for="(n, i) in travel_doi" :key="n">
          <div class="card" >
            <img :src="n.img" class="card-img-top">
            <div class="card-body">
              <h3 class="card-title">{{ n.name }}</h3>
              <a class="heart-icon" @click="handleAddTofav(n)"><i class="fa-regular fa-heart gray"></i></a> 
              <RouterLink :to="{name: `news_${i+1}` , params: {id: n.name}}" class="icon-link gap-1 link-secondary ">
                view
              </RouterLink>
            </div>
          </div>
      </div>
    </div>
    </template>
    
    <script setup>
    import { ref } from 'vue';
    import { doiStore } from '../stores/AllFav';
    import { addTofav } from '../stores/counter';
    import { RouterLink } from 'vue-router';
    
    const alldoi = doiStore();
    const travel_doi = ref(alldoi.DoiList);
    
    const handleAddTofav = (item) => {
      addTofav(item);
    };
    
    </script>
    
    
    <style>
    
    .card-img-top{
    height: 100%;
    padding: 5px;
    
    }
    .row{
    justify-content: center;
    align-items: center;
    text-align: center;
    row-gap: 10px;
    }
    
    .card{
      gap: 5px;
      width: 250px;
      font-family: 'Poppins', sans-serif;
      font-family: 'Thasadith', sans-serif;
    }
    .icon-link {
      text-decoration: none;
      margin-left: 10px;
    }
    .heart-icon{
      text-decoration: none;
      color: #6e6b70;
      margin-right: 10px;
    }
    .heart-icon:hover{
      color: #d30000;
    }
    
    </style>