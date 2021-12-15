import service from '../plugins/http'
import { DATA_TABLE } from '../views/host/conf'
const api = {
  host: '/api/list'
}
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const getHostList = (params?: unknown) => {
  return service({
    url: api.host,
    method: 'get',
    params: params
  })
}

const getHostDetail = (params?: unknown) => {
  return service({
    url: api.host,
    method: 'get',
    params: params
  })
}

const delHost = (params: {id: number}) => {
  return service({
    url: api.host,
    method: 'delete',
    params: params
  })
}

const createHost = (data: DATA_TABLE) => {
  return service({
    url: api.host,
    method: 'post',
    data
  })
}

const updateHost = (data: DATA_TABLE) => {
  return service({
    url: api.host,
    method: 'put',
    data
  })
}

export {
  getHostList,
  getHostDetail,
  delHost,
  createHost,
  updateHost
}
