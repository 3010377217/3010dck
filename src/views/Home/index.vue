<script setup lang="ts">
import HomeBanner from './componments/HomeBanner.vue';
import HomeContegory from './componments/HomeContegory.vue';
import HomeHot from './componments/HomeHot.vue';
import HomeNew from './componments/HomeNew.vue';
import HomePanel from './componments/HomePanel.vue';
import HomeProduct from './componments/HomeProduct.vue';

</script>

<template>
  <div class="container">
  <HomeContegory/>
  <HomeBanner/>
  </div>

  <HomeNew/>
  <HomeHot/>
  <HomeProduct/>
  <HomePanel title="新鲜好物" subTitle="新鲜好物，好多商品">

  </HomePanel>
  <HomePanel title="新鲜好物" subTitle="新鲜好物，好多商品">

  </HomePanel>
</template>
