import request from '@/utils/request'


export function getCaptcha(params) {
  return request({
    url: '/public/captcha',
    method: 'get',
    params
  })
}

export function initCsrfToken() {
  return request({
    url: '/public/csrf-token',
    method: 'get'
  })
}
