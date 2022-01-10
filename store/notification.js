
const state = () => ({
   errors: {
      input: false,  
      component: false
   }
})

const actions = {
   error({ commit }, data) {
      commit(data.type, data.data)
   },
   clear({ commit }) {
      commit('clear')
   }
}

const getters = {
   errors: state => state.errors
}

const mutations = {
   input: (state, data) => { state.errors.input = data; console.log(data)},
   component: (state, data) => { state.errors.component = data; console.log(data)},
   clear: (state) => {
      state.errors.input = false,
      state.errors.component = false
   }
}

export {
   state,
   actions,
   mutations,
   getters
}