import axios from 'axios'

const api = axios.create({
  baseURL: 'https://977c-177-47-84-3.ngrok-free.app',
})

export { api }
