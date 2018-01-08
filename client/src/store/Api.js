import axios from 'axios'

// var axiosInstance = axios.create({
//   baseURL: `http://localhost:8081`
// })

var axiosInstance = axios.create({
  baseURL: `https://warm-tundra-37915.herokuapp.com/`
})

export const Api = axiosInstance
