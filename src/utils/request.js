import service from './axios'


const request =  Promise => {
  return new Promise((resolve, reject) => {
    service.request.then(
      res => {
        resolve(res.data)
      },
      err => {
        switch (err?.code) {
          case 401:
            uni.showToast({
              title: '登录失效',
              duration: 2000
            })
            uni.navigateTo({
              url: '/pages/login/signin' // TODO 配置成自己的登录页路径
            })
            break
          default:
            uni.showToast({
              title: '网络错误',
              duration: 2000,
              icon: 'none'
            })
            break
        }
        reject(err)
      }
    )
  })
}

export default request
