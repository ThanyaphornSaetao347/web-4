<script setup>
import { fav } from '../stores/counter.js';
import { computed } from 'vue';


const totalItemsInfav = computed(() => {
  return fav.value.reduce((acc, item) => acc + item.quantity, 0);
});

const removeFromfav = (itemToRemove) => {
  const index = fav.value.findIndex(item => item.name === itemToRemove.name);
  if (index !== -1) {
    fav.value.splice(index, 1);
  }
};


</script>

<template>
          <div class="col-10">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <h4 class="fw-normal mb-0 text-black">List To Travel :  {{ totalItemsInfav }}</h4>
            </div>
            <div class="row mb-2">
                <div class="col-md-3" v-for="(item, index) in fav" :key="index">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary-emphasis">
                                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                    <button @click="() => removeFromfav(item)" class="btn btn-link p-0 border-0 bg-transparent">
                                        <i class="fa-solid fa-heart fa-2x" style="color: #d28a7c;"></i>
                                    </button>
                                </div> 
                            </strong>
                            <h3 class="mb-0">{{item.name}}</h3>
                                <div class="mb-1 text-body-secondary"></div>
                                    <p class="card-text mb-auto"></p>
                                </div>
                                <div class="col-auto d-none d-lg-block">
                                    <img v-if="item.img" :src="item.img" class="img-thumbnail" alt="Thumbnail" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
<div class="d-flex justify-content-end">
  <RouterLink class="btn btn-primary btn-lg" to="/">เสร็จสิ้น</RouterLink>
</div>
</template>

<style>
.img-fluid{
    width: 300px;
}
.container,.fw-normal{
    font-family: 'Poppins', sans-serif;
    font-family: 'Thasadith', sans-serif;
}
</style>