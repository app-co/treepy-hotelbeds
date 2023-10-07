import axios from 'axios'

const api = axios.create({
  baseURL: 'https://treepy-server.appcom.dev',
})

export { api }
