<script setup>
import NavBar from './component/NavBar.vue';

</script>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-8KXBS81PZS"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8KXBS81PZS');
</script>
<template>
  <NavBar />
  <router-view />
</template>

<style scoped></style>
