export default function({ store, redirect, route }) {
    
    const authRoutes = ['login', 'sign-up']
    
    if (!store.getters['auth/token'] && !authRoutes.includes(route.name)) {
        return redirect({ name: 'login' })
    } else if (store.getters['auth/token'] && authRoutes.includes(route.name)) {
        return redirect({ name: 'articles' })
    }
}