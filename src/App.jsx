import { store } from './store';
import { ordered, restocked } from './features/cake/cakeSlice';

const App = () => {
  console.log('Initial state', store.getState());

  const unsubscribe = store.subscribe(() =>
    console.log('Updated state', store.getState())
  );

  store.dispatch(ordered());
  store.dispatch(ordered());
  store.dispatch(ordered());
  store.dispatch(ordered());

  return <div>App</div>;
};

export default App;
