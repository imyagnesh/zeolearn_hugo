/* eslint-disable react/prop-types */
import React from 'react';
import SubRoutes from '../../components/SubRoutes';

const Home = ({ routes }) => {
  return (
    <div>
      <h1>Admin Home Page</h1>
      {routes.map((route, index) => (
        <SubRoutes key={index} index={index} route={route} />
      ))}
    </div>
  );
};

export default Home;
