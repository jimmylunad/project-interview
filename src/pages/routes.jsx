import Home from './Home';
import Users from './Users';
import Login from './Login';
import UserDetail from './UserDetail';

const routes = [
  {
    path: '/',
    name: 'Inicio',
    showNav: true,
    element: <Home />,
  },
  {
    path: '/login',
    name: 'Login',
    showNav: true,
    element: <Login />,
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
