import React, { createContext } from 'react';

export const { Provider, Consumer } = createContext();

// eslint-disable-next-line react/prop-types
const localeContext = ({ children }) => {
  return (
    <Provider
      value={{
        name: 'yagnesh',
        gender: 'male',
      }}
    >
      {children}
    </Provider>
  );
};

export default localeContext;
