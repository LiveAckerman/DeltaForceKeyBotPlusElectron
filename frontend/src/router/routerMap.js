/**
 * 基础路由
 * @type { *[] }
 */

const constantRouterMap = [
  {
    path: '/',
    name: 'Home',
    redirect: { name: 'home' },
    children: [
      {
        path: '/home',
        name: 'home',
        redirect: { name: 'config' },
        component: () => import('@/views/index.vue'),
        children: [
          {
            path: 'config',
            name: 'config',
            component: () => import('@/views/config.vue')
          },
          {
            path: 'run',
            name: 'run',
            component: () => import('@/views/run.vue')
          },
        ]
      },
    ]
  },
]

export default constantRouterMap