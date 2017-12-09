import {Api} from '@/services/Api'
import FormData from 'form-data'

export default {
  fetchEvents () {
    return Api.get('api/events')
  },
  addEvent (params) {
    return Api.post('api/events', params, { headers: { Authorization: localStorage.getItem('token') } })
  },
  updateEvent (params) {
    return Api.put(`api/events/${params.id}`, params, { headers: { Authorization: localStorage.getItem('token') } })
  },
  uploadEventImage (params) {
    let form = new FormData()

    form.append('eventImg', params.image)

    return Api.patch(`api/events/${params.id}/image`, form, { headers: { Authorization: localStorage.getItem('token') } })
  },
  getEvent (params) {
    return Api.get(`api/event/${params.id}`, { headers: { Authorization: localStorage.getItem('token') } })
  },
  deleteEvent (id) {
    return Api.delete(`api/events/${id}`, { headers: { Authorization: localStorage.getItem('token') } })
  }
}
