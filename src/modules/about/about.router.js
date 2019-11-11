// import about from './pages/index';
const component = (r) => require.ensure([], () => r(require('./pages/index')), 'about');

export default [
  {
    path: '/about',
    name: 'about',
    // component: () => import(/* webpackChunkName: 'about' */ './pages/index')
    component
  }
];
