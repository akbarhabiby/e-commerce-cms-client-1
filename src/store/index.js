import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accessToken: '',
    currentAdmin: '',
    products: [],
    currentProduct: {}
  },
  mutations: {
    setAccessToken (state, payload) {
      state.accessToken = payload
    },
    setProducts (state, payload) {
      state.products = payload
    },
    setCurrentAdmin (state, payload) {
      state.currentAdmin = payload
    },
    setCurrentProduct (state, payload) {
      state.currentProduct = payload
    }
  },
  actions: {
    login (context, payload) {
      const { email, password } = payload
      return axios({
        method: 'POST',
        url: '/cms-admin',
        data: {
          email: email,
          password: password
        }
      })
    },
    addProduct (context, payload) {
      return axios({
        method: 'POST',
        url: '/product',
        headers: {
          access_token: payload.access_token
        },
        data: payload.data
      })
    },
    editProduct (context, payload) {
      return axios({
        method: 'PUT',
        url: '/product/' + payload.id,
        headers: {
          access_token: payload.access_token
        },
        data: payload.data
      })
    },
    fetchProducts (context) {
      axios({
        method: 'GET',
        url: '/product',
        headers: {
          acccess_token: context.state.accessToken
        }
      })
        .then(({ data }) => {
          context.commit('setProducts', data.products)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteProduct (context, payload) {
      return axios({
        method: 'DELETE',
        url: '/product/' + payload,
        headers: {
          access_token: context.state.accessToken
        }
      })
    }
  },
  modules: {
  }
})
