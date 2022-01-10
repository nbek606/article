const state = () => ({
   token: false,
   user: false,
   errors: {}
})

const actions = {
   signUp({ commit, dispatch }, data) {
            this.$api
            .$post('/sign-up', {...data, token_name:'browser'})
            .then(response => {
               commit('token', response.user.api_token) 
               commit('user', response.user)
               commit('redirect')
            }).catch((errors) => { 
               if(!errors.response) return 
               dispatch('notification/error', { type: 'input', data: errors.response.data.errors }, { root: true })
            })
   },

   login({ commit, dispatch }, data) {
            this.$api
            .$post('/login', {...data, token_name:'browser'})
            .then(response => {
               commit('token', response.user.api_token)  
               commit('user', response.user)
               commit('redirect')
            }).catch((errors) => { 
               if(!errors.response) return 
               dispatch('notification/error', { type: 'component', data: 'Неправильный логин или пароль' }, { root: true })
            })
   },
   logout({ commit }) {
      commit('token', false);
      commit('user', false);
   }
}

const getters = {
   token: state => state.token,
   user: state => state.user,
   errors: state => state.errors,
   isAdmin: state => state.user.is_admin,
}

const mutations = {
   token: (state, data) => { state.token = data; },
   user: (state, data) => { state.user = data; },
   errors: (state, data) => { state.errors = data; },
   redirect () {
      this.$router.push ({ name: 'articles' })
   }
}

export {
   state,
   actions,
   getters,
   mutations
}