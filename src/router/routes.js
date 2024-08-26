export default [
  {
    title: 'Home',
    path: '/',
    component: () => import('@/pages/home')
  },
  {
    title: 'Home',
    path: '*',
    component: () => import('@/pages/home')
  },
]