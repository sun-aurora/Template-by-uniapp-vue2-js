import request from '@/utils/request'


export function signup(data) {
  return request({
    url: '/user/signup',
    method: 'post',
    data
  })
}

export function signin(data) {
  return request({
    url: '/open/auth/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/user/current',
    method: 'get'
  })
}
