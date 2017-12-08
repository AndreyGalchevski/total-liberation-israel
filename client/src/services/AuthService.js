import {Api} from '@/services/Api'

export default {
  authenticateUser (params) {
    return Api.post('api/authenticate', params)
  }
}
