import axios from 'axios'

let baseURL = 'http://localhost:8080'

if (process.env.NODE_ENV === 'production') {
	baseURL = 'https://total-liberation-israel-api.herokuapp.com'
}

const Api = axios.create({ baseURL })

export default Api
