<script setup>
import NoteItem from '@/components/Notes/NoteItem.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <h1>Notas view</h1>
    <RouterLink class="btn btn-success" :to="{ name: 'nueva-nota' }"
      >Agregar nueva nota</RouterLink
    >
    <NoteItem
      :note="{
        title: 'nota de prueba',
        content: 'contenido de la nota de prueba',
      }"
    />
  </div>
</template>
