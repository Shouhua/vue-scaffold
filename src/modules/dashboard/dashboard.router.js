export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: 'dashboard' */ './pages/index')
  }
];
