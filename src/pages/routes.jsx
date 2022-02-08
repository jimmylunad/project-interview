import Home from './Home';
import Users from './Users';
import UserDetail from './UserDetail';

const routes = [
  {
    path: '/',
    name: 'Inicio',
    showNav: true,
    element: <Home />,
  },
  {
    path: '/users',
    name: 'Usuarios',
    showNav: true,
    element: <Users />,
  },
  {
    path: '/user/:id',
    name: 'Usuario',
    showNav: false,
    element: <UserDetail />,
  },
];

export default routes;
