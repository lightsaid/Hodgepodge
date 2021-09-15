import { withNestedView } from '@/router/routerUtils'

const loadView = withNestedView('security/permission')

const securityRoutes = [
  {
    name: 'security',
    component: {
      render: () => <RouterView />,
    },
    path: '/security',
    redirect: '/security/permission',
    children: [
      {
        name: 'PermissionExample',
        path: 'permission',
        component: loadView('PermissionExample'),
        children: [
          {
            name: 'Moderator',
            path: 'moderator',
            component: loadView('views/ModeratorView'),
            meta: {
              permission: {
                roles: ['moderator', 'admin'],
                noAccessRedirect: '/security/permission/forbidden',
              },
            },
          },
          {
            name: 'Admin',
            path: 'admin',
            component: loadView('views/AdminView'),
            meta: {
              permission: {
                roles: ['admin'],
                noAccessRedirect: '/security/permission/forbidden',
              },
            },
          },
          {
            name: 'PermissionForbidden',
            path: 'forbidden',
            component: loadView(`views/Forbidden`),
          },
        ],
      },
    ],
  },
]

export default securityRoutes
