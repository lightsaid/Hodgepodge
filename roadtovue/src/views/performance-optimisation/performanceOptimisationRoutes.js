import { withNestedView } from '@/router/routerUtils'

const loadView = withNestedView('performance-optimisation')

const performanceOptimisationRoutes = [
  {
    name: 'PerformanceOptimisation',
    component: {
      render: () => <RouterView />,
    },
    path: '/performance-optimisation',
    redirect: '/performance-optimisation/lazy-load-components',
    children: [
      {
        name: 'LazyLoadComponents',
        path: 'lazy-load-components',
        component: loadView('lazy-load-components/LazyLoadComponents'),
      },
    ],
  },
]

export default performanceOptimisationRoutes
