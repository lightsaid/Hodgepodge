import { withNestedView } from '@/router/routerUtils'

const loadView = withNestedView('testing')

const testingRoutes = [
  {
    name: 'Testing',
    component: {
      render: () => <RouterView />,
    },
    path: '/testing',
    redirect: '/testing/components',
    children: [
      {
        name: 'TestingExample',
        path: 'components',
        component: loadView('TestingExample'),
      },
    ],
  },
]

export default testingRoutes
