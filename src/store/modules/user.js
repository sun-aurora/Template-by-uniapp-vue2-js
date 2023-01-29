import { signIn, getInfo } from '@/api'

import { getToken, setToken, removeToken } from '@/utils/auth'

export const user = {
  namespaced: true,
  state: {
    token: getToken(),
    userInfo: {}
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SING_OUT(state, token) {
      state.token = token
    },
    SET_USER_INFO(state, info) {
      state.userInfo = info
    }
  },
  actions: {
    // 登录
    signIn({ commit }, payload) {
      return new Promise((resolve, reject) => {
        signin(payload)
          .then((res) => {
            const token = res.token
            commit('SET_TOKEN', token)
            setToken(token)
            resolve(token)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    // 登出
    signOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve(undefined)
      })
    },
    // 获取基本用户信息
    getInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo()
          .then(res => {
            commit('SET_USER_INFO', res)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  getters: {
    getUid(state) {
      return state.userInfo.uuid
    },
    getToken(state) {
      return state.token
    }
  }
}
