<script setup lang="ts">
import HomeBanner from './components/HomeBanner.vue';
import HomeContegory from './components/HomeContegory.vue';
import HomeHot from './components/HomeHot.vue';
import HomeNew from './components/HomeNew.vue';
import HomeProduct from './components/HomeProduct.vue';

</script>

<template>
  <div class="container">
  <HomeContegory/>
  <HomeBanner/>
  </div>

  <HomeNew/>
  <HomeHot/>
  <HomeProduct/>

</template>
