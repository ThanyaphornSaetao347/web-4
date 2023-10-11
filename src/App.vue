<script setup>

import { RouterView } from 'vue-router'
import boxheader from './views/BlogHeader.vue'


</script>


<template>
 <boxheader/>
  <div class="container">
 
  <RouterView/>
  </div>
  
<div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <!-- <img class="logo" src="../src//assets/footer.png" alt="logo"> -->
      </a>
      <span class="mb-3 mb-md-0 text-body-secondary">&copy; 2023 Chiang Mai Let's Go , 0994657123</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3">
        <a class="text-body-secondary" href="#">
          <svg class="bi" width="24" height="24">
            <use xlink:href="#twitter"/>
          </svg>
        </a>
      </li>
    
      <li class="ms-3">
        <a class="text-body-secondary" href="#">
          <svg class="bi" width="24" height="24">
            <use xlink:href="#instagram"/>
          </svg>
        </a>
      </li>
      
      <li class="ms-3">
        <a class="text-body-secondary" href="#">
          <svg class="bi" width="24" height="24">
            <use xlink:href="#facebook"/>
          </svg>
        </a>
      </li>
    </ul>
  </footer>
</div>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Poppins&family=Sedgwick+Ave+Display&family=Yellowtail&family=Zeyada&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Thasadith&display=swap');

.logo{
  width: 50px;
}
.logo img{
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
}
</style>