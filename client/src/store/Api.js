import axios from 'axios'

// var axiosInstance = axios.create({
//   baseURL: `http://localhost:8081`
// })

// var axiosInstance = axios.create({
//   baseURL: `https://warm-tundra-37915.herokuapp.com/`
// })

var axiosInstance = axios.create({
  baseURL: `https://www.alf-israel.com/`
})

export const Api = axiosInstance
