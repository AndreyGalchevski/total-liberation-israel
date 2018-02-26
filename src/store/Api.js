import axios from 'axios'

let axiosInstance

if (process.env.NODE_ENV === 'production') {
  axiosInstance = axios.create({ baseURL: `https://www.alf-israel.com/` })
} else {
  axiosInstance = axios.create({ baseURL: `http://localhost:3000` })
}

export const Api = axiosInstance
