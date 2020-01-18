/* eslint-disable promise/param-names */
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT, AUTH_LOGIN, AUTH_REGISTRATION} from '../actions/auth'
import { USER_REQUEST } from '../actions/user'
import { apiService } from "@/common/api.service.js";

const state = {
    token: localStorage.getItem('user-token') || false,
    status: '',
    hasLoadedOnce: false,
    error: null
}

const getters = {
   isAuthenticated: state => state.token!=false,
   authStatus: state => state.status,
   error: state => state.error,
}

const actions = {

  [AUTH_LOGIN]: ({commit, dispatch}, data) => {
      commit(AUTH_REQUEST)
      return new Promise((resolve, reject) => {
        apiService('/api/rest-auth/login/', 'POST', data)
        .then(resp => {
          if (resp.key){
              localStorage.setItem('user-token', resp.key)
              commit(AUTH_SUCCESS, resp)
              dispatch(USER_REQUEST)
              resolve(resp)
          }
          else {
              commit(AUTH_ERROR, resp)
              localStorage.removeItem('user-token')
              reject(resp)
          }
        })
      })
  },

  [AUTH_REGISTRATION]: ({commit, dispatch}, data) => {
      commit(AUTH_REQUEST)
      return new Promise((resolve, reject) => {
        apiService('/api/rest-auth/registration/', 'POST', data)
        .then(resp => {
          if (resp.key){
              localStorage.setItem('user-token', resp.key)
              commit(AUTH_SUCCESS, resp)
              dispatch(USER_REQUEST)
              resolve(resp)
          }
          else {
              commit(AUTH_ERROR, resp)
              localStorage.removeItem('user-token')
              reject(resp)
          }
        })
      })
  },

  [AUTH_LOGOUT]: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      apiService('/api/rest-auth/logout/', 'POST')
      //apiService('/accounts/logout/')

      commit(AUTH_LOGOUT)
      localStorage.removeItem('user-token')

      resolve()
    })
  }
}

const mutations = {
  [AUTH_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [AUTH_SUCCESS]: (state, resp) => {
    state.status = 'success'
    state.token = resp.key
    console.log(state.token)
    state.hasLoadedOnce = true
    state.error = null
  },
  [AUTH_ERROR]: (state, err) => {
    state.status = 'error'
    state.hasLoadedOnce = true
    state.error = err
  },
  [AUTH_LOGOUT]: (state) => {
    state.token = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}


/*
  [AUTH_REQUEST]: ({commit, dispatch}, payload) => {
    let data = payload.data
    let endpoint = payload.endpoint
    console.log(payload)

    return new Promise((resolve, reject) => {
      apiService(endpoint, 'POST', data)
      .then(resp => {
        console.log(resp)
        if (resp.key){
            commit(AUTH_REQUEST)
            localStorage.setItem('user-token', resp.key)
            commit(AUTH_SUCCESS, resp)
            dispatch(USER_REQUEST)
            resolve(resp)
        }
        else {
            commit(AUTH_ERROR, resp)
            localStorage.removeItem('user-token')
            reject(resp)
        }
      })
      .catch(err => {
        commit(AUTH_ERROR, err)
        localStorage.removeItem('user-token')
        reject(err)

      })
    })
},
*/
