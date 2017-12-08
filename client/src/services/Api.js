import axios from 'axios'

var axiosInstance = axios.create({
  baseURL: `http://localhost:8081`
})

export const Api = axiosInstance
