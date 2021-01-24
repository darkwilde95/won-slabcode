import axios from 'axios'

const back_url = 'https://www.wonapp.co/'

const headers_auth = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${ localStorage.getItem('token') }`
})

const post = (url, data) => {
  return axios({
    url,
    method: 'post',
    baseURL: back_url,
    headers: { 'Content-Type': 'application/json' },
    data
  })
}

const auth_get = (url, params = {}) => { 
  return axios({
    url,
    method: 'get',
    baseURL: back_url,
    headers: headers_auth(),
    params
  })
}

const auth_post = (url, data) => {
  return axios({
    url,
    method: 'post',
    baseURL: back_url,
    headers: headers_auth(),
    data
  })
}

export { 
  post,
  auth_get,
  auth_post
}