/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router-dom';

const SubRoutes = ({ route, index }) => {
  return (
    <Route
      key={`${route.path}_${index}`}
      path={route.path}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
};

export default SubRoutes;
