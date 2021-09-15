import { withNestedView } from '@/router/routerUtils'
import { resolveComponent } from 'vue'
import { h } from 'vue'

const loadView = withNestedView('useful-patterns')

const usefulPatternsRoutes = [
  {
    name: 'UsefulPatterns',
    path: '/useful-patterns',
    component: {
      render: () => <router-view />,
    },
    redirect: '/useful-patterns/styling-child-components',
    children: [
      {
        name: 'StylingChildComponents',
        path: 'styling-child-components',
        component: loadView('styling-child-components/StylingChildComponents'),
      },
      {
        name: 'TemplateLog',
        path: 'template-log',
        component: loadView('template-log/TemplateLog'),
      },
      {
        name: 'RouteControlledPanel',
        path: 'route-controlled-panel',
        component: loadView('route-controlled-panel/RouteControlledPanel'),
        children: [
          {
            name: 'RouteControlledPanelProduct',
            path: ':id',
            component: loadView(
              'route-controlled-panel/views/ViewProductPanel'
            ),
          },
        ],
      },
    ],
  },
]

export default usefulPatternsRoutes
