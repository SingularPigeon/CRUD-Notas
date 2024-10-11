// aqui haremos las peticiones a la API
import axios from 'axios'

// instancia axios de la api
const api = axios.create({
  baseURL: 'https://crudapi.co.uk/api/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
})

// crear nota
export const createNote = async newNote => {
  try {
    const response = await api.post('/notes', [newNote])

    const newNoteData = response.data.items[0]

    return newNoteData
  } catch (error) {
    console.error('Error al crear nota:', error)
  }
}

// leer todas la notas
export const fetchAllNotes = async () => {
  try {
    const response = await api.get('/notes')

    return response.data.items
  } catch (error) {
    console.error('Error al traer todas las notas', error)
  }
}
