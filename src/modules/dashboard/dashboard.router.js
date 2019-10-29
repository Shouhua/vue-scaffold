export default [
  {
    path: '/dashboard',
    component: () => import(/* webpackChunkName: 'dashboard' */ './pages/index')
  }
]
