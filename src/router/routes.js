
const routes = [
  {
    path: '/',
    component: () => import('layouts/GameLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/single-player',
    component: () => import('layouts/GameLayout.vue'),
    children: [
      { path: '', component: () => import('pages/SinglePlayer.vue') }
    ]
  },
  {
    path: '/multi-player',
    component: () => import('layouts/GameLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MultiPlayer.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
