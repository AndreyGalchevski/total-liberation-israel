import axios from 'axios'

let baseURL = 'http://localhost:8081'

if (process.env.NODE_ENV === 'production') {
	baseURL = 'https://api.totalliberationisrael.com'
}

const Api = axios.create({ baseURL })

export default Api
