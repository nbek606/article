export const state = () => ({
   menu: {
      all: {
         title: "Все статьи",
         icon: "All",
         link: "/articles"
      },
      javascript: {
         title: "Java script",
         icon: "JavaScript",
         link: "/articles/js"
      },
      typescript: {
         title: "Type script",
         icon: "TypeScript",
         link: "/articles/ts"
      }
   },
   adminMenu: {
      users: {
         title: "Пользователи",
         icon: 'Users',
         link: "/users"
      }
   }
})

export const getters = {
   list: (state, getters, rootState, rootGetters) => { 

      if (rootGetters['auth/isAdmin'] == 1) {
         return { ...state.menu, ...state.adminMenu }
      }

      return state.menu
   }
}
