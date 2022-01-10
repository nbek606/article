const state = () => ({
   list: [],
})

const actions = {
   async list ({ commit }, data) {
      return await this.$api
         .$post('/users', {...data, token_name:'browser'})
         .then(response => {
            commit('list', response.data);
         }).catch((errors) => { 
            if(!errors.response) return 
         })
   },

   async detail ({ commit }, id) {
      return await this.$api
            .$get('/users/' + id, {token_name:'browser'})
            .then(response => {
               return response.data
            }).catch((errors) => {
               if(!errors.response) return
               dispatch('notification/error', { type: 'component', data: 'Такого пользователя нет' }, { root: true })
            })
   },

   async update ({ commit }, data) {
      return await this.$api
            .$post('/users/update', {...data, token_name:'browser'})
            .then((response) => {
               return response
            }).catch((errors) => {
               if(!errors.response) return
               dispatch('notification/error', { type: 'input', data: errors.response.data.errors }, { root: true })
            })
   }
}

const getters = {
   getList: state => state.list
}

const mutations = {
   list: (state, data) => { state.list = data }
}

export {
   state,
   actions,
   getters,
   mutations
}