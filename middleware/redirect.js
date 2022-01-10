export default function({ store, redirect, route }) {
  if (route.name === null)
    return redirect({ name: 'articles' })
}