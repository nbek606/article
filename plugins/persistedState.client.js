import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    paths: [
      'auth.user',
      'auth.token',
    ]
  })(store)
}
