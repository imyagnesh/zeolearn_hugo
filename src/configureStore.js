import { createStore, compose } from 'redux';
import rootReducer from './reducers';

export default () => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    }) || compose;

  const store = createStore(rootReducer, composeEnhancers());

  store.dispatch({
    type: 'ADD_ITEM',
    payload: {
      name: 'mobile',
      price: 100,
      quantity: 1,
    },
  });
  return store;
};
