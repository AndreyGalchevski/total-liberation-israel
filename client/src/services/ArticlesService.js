import {Api} from '@/services/Api'

export default {
  fetchArticles () {
    return Api.get('api/articles')
  },
  addArticle (params) {
    return Api.post('api/articles', params, { headers: { Authorization: localStorage.getItem('token') } })
  },
  updateArticle (params) {
    return Api.put(`api/articles/${params.id}`, params, { headers: { Authorization: localStorage.getItem('token') } })
  },
  uploadArticleImage (params) {
    let form = new FormData()

    form.append('articleImg', params.image)

    return Api.patch(`api/articles/${params.id}/image`, form, { headers: { Authorization: localStorage.getItem('token') } })
  },
  getArticle (params) {
    return Api.get(`api/article/${params.id}`)
  },
  deleteArticle (id) {
    return Api.delete(`api/articles/${id}`, { headers: { Authorization: localStorage.getItem('token') } })
  }
}
