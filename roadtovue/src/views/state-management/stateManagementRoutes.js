import { withNestedView } from '@/router/routerUtils'

const loadView = withNestedView('state-management')

const stateManagementRoutes = [
  {
    name: 'StateManagement',
    path: '/state-management',
    component: {
      render: () => <RouterView />,
    },
    redirect: '/state-management/lifting-state',
    children: [
      {
        name: 'LiftingState',
        path: 'lifting-state',
        component: loadView('lifting-state/LiftingStateExample'),
      },
      {
        name: 'StatefulServices',
        path: 'stateful-services',
        component: loadView('stateful-services/StatefulServicesExample'),
      },
      {
        name: 'ComposablesStateProvider',
        path: 'composables-state-provider',
        component: loadView(
          'composables-state-provider/ComposableStateProviderExample'
        ),
      },
    ],
  },
]

export default stateManagementRoutes
