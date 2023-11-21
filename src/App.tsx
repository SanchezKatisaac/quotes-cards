import { Provider } from 'react-redux';

import store from '@/redux/store';

import Header from '@/components/Header';
import { Home } from '@/pages';


function App() {
  return (
    <Provider store={store}>
      <Header />
      <Home />
    </Provider>
  )
}

export default App
