import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const SERVER_BASE_URL = process.env.VUE_APP_SERVER_BASE_URL

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    createShortUrl(context, {originalUrl}) {
      axios({
        method: 'post',
        url: `${SERVER_BASE_URL}/api/short-urls`,
        data: {originalUrl: originalUrl},
      })
      .then(response => console.log(response))
    },
    
  },
  modules: {
  }
})
