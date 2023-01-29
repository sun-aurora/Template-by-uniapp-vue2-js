import request from '@/utils/request'


export function getBanner() {
  return {}
  return request({
    url: '/home/banner',
    method: 'get'
  })
}

export function getCategory() {
  return {}
  return request({
    url: '/home/category',
    method: 'get'
  })
}

export function getList(data) {
  return {}
  return request({
    url: '/home/list',
    method: 'post',
    data
  })
}
