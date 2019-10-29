export default [
  {
    path: '/about',
    component: () => import(/* webpackChunkName: 'about' */ './pages/index')
  }
]
