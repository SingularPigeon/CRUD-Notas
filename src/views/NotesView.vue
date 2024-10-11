<script setup>
import NoteList from '@/components/Notes/NoteList.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <h1>Notas view</h1>
    <RouterLink class="btn btn-success" :to="{ name: 'nueva-nota' }"
      >Agregar nueva nota</RouterLink
    >
    <NoteList />
  </div>
</template>
