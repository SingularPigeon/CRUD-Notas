<script setup>
import NoteForm from '@/components/Notes/NoteForm.vue'
import { useNotesStore } from '@/stores/notesStore'
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const note = ref(null)
const route = useRoute()
const router = useRouter()
const notesStore = useNotesStore()
const isEditing = computed(
  () => route.name === 'editar-nota' && route.params.id,
) /* verifica si estamos en ruta de editar o no */

onMounted(async () => {
  if (isEditing.value) {
    const noteData = await notesStore.getNoteById(route.params.id)

    if (noteData) {
      note.value = noteData
    } else {
      router.push({ name: 'not-found' })
    }
  }
})
</script>

<template>
  <div>
    <h1>{{ isEditing ? 'Editar' : 'Crear' }} nota</h1>
    <NoteForm :initialNote="note" />
  </div>
</template>
