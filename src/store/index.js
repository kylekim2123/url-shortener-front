import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router";

import axios from 'axios'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

const SERVER_BASE_URL = process.env.VUE_APP_SERVER_BASE_URL

export default new Vuex.Store({
  state: {
    url: {},
  },
  getters: {
    getUrl(state) {
      return state.url
    }
  },
  mutations: {
    'SET_SHORT_URL'(state, data) {
      state.url = data
    }
  },
  actions: {
    createShortUrl(context, data) {
      axios({
        method: 'post',
        url: `${SERVER_BASE_URL}/api/short-urls`,
        data: data,
      })
        .then(response => router.push({ name: 'UrlDetailView', params: { shortUrlKey: response.data.shortUrlKey } }))
    },
    findShortUrlByKey({ commit }, { shortUrlKey }) {
      axios({
        method: 'get',
        url: `${SERVER_BASE_URL}/api/short-urls/${shortUrlKey}`,
      })
        .then(response => commit('SET_SHORT_URL', response.data))
    }
  },
  modules: {
    plugins: [
      createPersistedState()
    ]
  }
})
