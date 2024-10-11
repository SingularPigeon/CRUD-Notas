<script setup>
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/App/AppNavBar.vue'
import AppFooter from '@/components/App/AppFooter.vue'
import { useNotesStore } from '@/stores/notesStore'
import { onMounted } from 'vue'

const notesStore = useNotesStore()
onMounted(() => {
  notesStore.getNotes()
})
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
