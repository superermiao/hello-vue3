import axios from 'axios'
// 创建axios
const service = axios.create({
  baseURL: '/',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true'
  }
})

// 添加请求拦截器
service.interceptors.request.use(function (config: any) {
  // 在发送请求之前做些什么
  // todo loading
  const clearNull = function (obj: any) {
    for (const key in obj) {
      if (obj[key] === null || key === 'isNotLoading') {
        delete obj[key]
      } else if (typeof obj === 'object') {
        clearNull(obj[key])
      }
    }
    return obj
  }
  if (['get', 'delete', 'GET', 'DELETE'].includes(config.method)) {
    config.params = clearNull(config.params || config.data)
  }
  if (config.method === 'post') {
    config.data = clearNull(config.data || config.params)
  }
  return config
}, function (error: Error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function (response: any) {
  // 对响应数据做点什么
  const res = response.data
  // todo 全局loading
  if ([200, 201, 204].includes(response.status)) {
    // code不为0 抛出错误信息
    if (res.code && res.code !== 0) {
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({ msg: res.msg })
      //  错误数据对接sentry
    } else {
      return res
    }
  }
  return response
}, function (error: any) {
  // 对响应错误做点什么
  // todo 全局loading
  return Promise.reject(error)
})

export default service
