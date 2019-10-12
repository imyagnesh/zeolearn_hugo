import React from 'react';
import './App.css';
import Route from './route';
import LocaleContext from './context/localeContext';

function App() {
  return (
    <LocaleContext>
      <div className="App">
        <Route />
      </div>
    </LocaleContext>
  );
}

export default App;
