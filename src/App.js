import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
    <div className="App relative">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
