import { store } from './store';
import { cakeActions } from './features/cake/cakeSlice';
import { icecreamActions } from './features/icecream/icecreamSlice';

const App = () => {
  console.log('Initial state', store.getState());

  const unsubscribe = store.subscribe(() =>
    console.log('Updated state', store.getState())
  );

  store.dispatch(cakeActions.ordered());
  store.dispatch(cakeActions.ordered());
  store.dispatch(cakeActions.ordered());
  store.dispatch(cakeActions.ordered());
  store.dispatch(cakeActions.restocked(20));

  store.dispatch(icecreamActions.ordered());
  store.dispatch(icecreamActions.ordered());
  store.dispatch(icecreamActions.ordered());
  store.dispatch(icecreamActions.ordered());
  store.dispatch(icecreamActions.restock(39));

  return <div>App</div>;
};

export default App;
