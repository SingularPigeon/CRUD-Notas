<script setup>
import { ref } from 'vue'
import { useNotesStore } from '@/stores/notesStore'
import { useRouter } from 'vue-router'
const router = useRouter()
const notesStore = useNotesStore()
const noteData = ref({
  title: '',
  content: '',
})

async function handleSubmit() {
  const inputsAreValid =
    noteData.value.title.trim() && noteData.value.content.trim()
  if (!inputsAreValid) {
    /* validación básica de campos */
    alert('Todos los campos son requeridos')
    return
  }
  const response = await notesStore.addNote(noteData.value)

  if (response) {
    router.push({ name: 'notas' })
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <!-- título -->
    <div class="mb-3">
      <label for="title">Título</label>
      <input
        class="form-control"
        type="text"
        id="title"
        placeholder="Título de la nota"
        required
        v-model="noteData.title"
      />
    </div>
    <div class="mb-3">
      <label for="content">Contenido</label>
      <textarea
        class="form-control"
        id="content"
        placeholder="Contenido de la nota"
        required
        v-model="noteData.content"
      ></textarea>
    </div>

    <button class="btn btn-info" type="submit">Guardar nota</button>
  </form>
</template>
