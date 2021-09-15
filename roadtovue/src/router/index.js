import { createRouter, createWebHistory } from 'vue-router'
import { checkPermission } from '@/components/common'
import { loadView } from './routerUtils'

import Home from '../views/Home.vue'
import chapterComponentsRoutes from '@/views/chapter-components/chapterComponentsRoutes'
import apiLayerRoutes from '@/views/api-layer/apiLayerRoutes'
import performanceOptimisationRoutes from '@/views/performance-optimisation/performanceOptimisationRoutes'
import managingApplicationLayoutRoutes from '@/views/managing-application-layout/managingApplicationLayoutRoutes'
import usefulPatternsRoutes from '@/views/useful-patterns/usefulPatternsRoutes'
import securityRoutes from '@/views/security/securityRoutes'
import testingRoutes from '@/views/testing/testingRoutes'
import stateManagementRoutes from '@/views/state-management/stateManagementRoutes'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  ...chapterComponentsRoutes,
  ...apiLayerRoutes,
  ...performanceOptimisationRoutes,
  ...managingApplicationLayoutRoutes,
  ...usefulPatternsRoutes,
  ...securityRoutes,
  ...testingRoutes,
  ...stateManagementRoutes,
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: loadView('NotFound'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  // If there are no permissions to check then proceed
  if (!to.meta.permission) return next()

  const { roles = [], config = {} } = to.meta.permission

  if (!roles.length) return next()

  const hasAccess = checkPermission(roles, config)
  console.log('has access???', hasAccess)
  if (hasAccess) {
    return next()
  }
  // No access!
  next(to.meta.permission?.noAccessRedirect || '/forbidden')
})

export default router
