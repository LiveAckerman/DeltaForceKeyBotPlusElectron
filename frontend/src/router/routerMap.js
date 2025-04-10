/**
 * 基础路由
 * @type { *[] }
 */

const constantRouterMap = [
   {
        path: '/',
        name: 'Home',
        redirect: { name: '首页' },
        component: () => import('@/views/index.vue'),
        children: [
          {
            path: 'home',
            name: '首页',
            component: () => import('@/views/home.vue'),
            meta: {
              icon: 'HomeFilled'
            }
          },
          {
            path: 'config',
            name: '配置',
            component: () => import('@/views/config.vue'),
            meta: {
              icon: 'Setting'
            }
          },
          {
            path: 'run',
            name: '运行',
            component: () => import('@/views/run.vue'),
            meta: {
              icon: 'IconMenu'
            }
          },
        ]
      },
]

export default constantRouterMap