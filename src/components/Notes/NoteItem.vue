<script setup>
const { note } = defineProps({
  note: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="card h-100">
    <div class="card-header" data-test="note-title">{{ note.title }}</div>
    <div class="card-body">
      <p class="card-text" data-test="note-content">
        {{ note.content }}
      </p>
    </div>
  </div>
</template>
