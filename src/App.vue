<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from "./components/Navbar.vue";
</script>

<template>
  
<NavBar />
  <!-- <header>

    <div class="wrapper">
      
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
  <!-- <router-view></router-view> -->
</template>

<style scoped>

</style>
