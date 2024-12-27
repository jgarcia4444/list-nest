import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './screens/Home';
import Landing from './screens/Landing';
import Housemates from "./screens/Housemates";
import Settings from "./screens/Settings";

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
    {
      path: '/housemates',
      element: <Housemates />
    },
    {
      path: '/user/settings',
      element: <Settings />
    }
  ]);


  return (
    <div className="App relative bg-nude-color w-screen h-screen text-primary-green">
      <RouterProvider router={router} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
      uid: state.UserInfo.userInfo.uid,
  }
}

export default App;
