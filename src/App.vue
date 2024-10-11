<script setup>
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/AppNavBar.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="min-vh-100 d-flex flex-column">
    <AppNavbar />

    <main class="flex-fill py-2">
      <RouterView class="container" />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped></style>
