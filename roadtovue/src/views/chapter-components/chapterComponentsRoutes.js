import { withNestedView } from '@/router/routerUtils'

const loadView = withNestedView('chapter-components')

const chapterComponentsRoutes = [
  {
    name: 'ChapterComponents',
    component: {
      render: () => <router-view />,
    },
    path: '/components',
    redirect: '/components/base-components',
    children: [
      {
        name: 'BaseComponents',
        path: 'base-components',
        component: loadView('base-components/BaseComponents'),
      },
      {
        name: 'RenderlessComponents',
        path: 'renderless-components',
        component: loadView('renderless-components/RenderlessComponents'),
      },
    ],
  },
]

export default chapterComponentsRoutes
