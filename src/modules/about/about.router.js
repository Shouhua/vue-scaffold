// import about from './pages/index';

export default [
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: 'about' */ './pages/index')
    // component: about
  }
];
