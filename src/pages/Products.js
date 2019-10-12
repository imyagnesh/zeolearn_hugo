import React from 'react';
import { Consumer } from '../context/localeContext';

const Products = () => {
  return (
    <div>
      <Consumer>
        {value => {
          return <div>{value.name}</div>;
        }}
      </Consumer>
      Products Page
    </div>
  );
};

export default Products;
