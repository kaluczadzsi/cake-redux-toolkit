import { fetchUsers } from './features/user/userSlice';
import { store } from './store';
// import { cakeActions } from './features/cake/cakeSlice';
// import { icecreamActions } from './features/icecream/icecreamSlice';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchUsers());

const App = () => {
  return <div>App</div>;
};

export default App;
