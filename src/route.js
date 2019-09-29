import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SubRoutes from './components/SubRoutes';
import Login from './pages/Login';
import Products from './pages/Products';
import AdminHome from './pages/admin/Home';
import AdminProducts from './pages/admin/Products';

const routes = [
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/products',
    component: Products,
  },
  {
    path: '/admin',
    component: AdminHome,
    routes: [
      {
        path: '/admin/products',
        component: AdminProducts,
      },
    ],
  },
];

const RouteConfig = () => {
  return (
    <Router>
      {routes.map((route, index) => (
        <SubRoutes key={index} index={index} route={route} />
      ))}
    </Router>
  );
};

export default RouteConfig;
