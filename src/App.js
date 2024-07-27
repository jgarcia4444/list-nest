import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Provider } from 'react-redux';

import store from './redux/store';

import Home from './screens/Home';
import Landing from './screens/Landing';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    },
    {

      path: '/home',
      element: <Home />
    },
  ]);

  return (
    <div className="App relative bg-nude-color w-screen h-screen text-primary-green">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
