import {Api} from '@/services/Api'

export default {
  fetchArticles () {
    return Api.get('api/articles')
  },
  addArticle (params) {
    return Api.post('api/articles', params)
  },
  updateArticle (params) {
    return Api.put(`api/articles/${params.id}`, params)
  },
  uploadArticleImage (params) {
    let form = new FormData()

    form.append('articleImg', params.image)

    return Api.patch(`api/articles/${params.id}/image`, form)
  },
  getArticle (params) {
    return Api.get(`api/article/${params.id}`)
  },
  deleteArticle (id) {
    return Api.delete(`api/articles/${id}`)
  }
}
