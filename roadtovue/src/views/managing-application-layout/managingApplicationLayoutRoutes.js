import { withNestedView } from '@/router/routerUtils'

const loadView = withNestedView('managing-application-layout')

const ManagingApplicationLayout = loadView(
  'application-layout/ManagingApplicationLayout'
)

const managingApplicationLayoutRoutes = [
  {
    name: 'ManagingApplicationLayout',
    component: {
      render: () => <router-view />,
    },
    path: '/managing-application-layout',
    redirect: '/managing-application-layout/layout',
    children: [
      {
        name: 'ApplicationLayout',
        path: 'layout',
        component: ManagingApplicationLayout,
      },
      {
        name: 'ApplicationLayout-Standard',
        path: 'layout-standard',
        component: ManagingApplicationLayout,
        meta: {
          layout: 'standard',
        },
      },
      {
        name: 'ApplicationLayout-Auth',
        path: 'layout-auth',
        component: ManagingApplicationLayout,
        meta: {
          layout: 'auth',
        },
      },
      {
        name: 'ApplicationLayout-StandardReverse',
        path: 'layout-standard-reverse',
        component: ManagingApplicationLayout,
        meta: {
          layout: 'standardReverse',
        },
      },
    ],
  },
]

export default managingApplicationLayoutRoutes
