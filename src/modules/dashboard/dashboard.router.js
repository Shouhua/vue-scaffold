const component = (r) => require.ensure([], (require) => r(require('./pages/index')), 'dashboard');

export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    // component: () => import(/* webpackChunkName: 'dashboard' */ './pages/index')
    component
  }
];
