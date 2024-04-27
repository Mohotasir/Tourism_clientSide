import React from 'react'
import ReactDOM from 'react-dom/client'
// import 'aos/dist/aos.css'; // Import AOS CSS
// import AOS from 'aos';
//AOS.init();
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root.jsx';
import Error from './Components/ErrorPage/Error.jsx';
import Home from './Components/Home.jsx';
import AuthProvider from './Components/AuthProvider/AuthProvider.jsx';
import Login from './Components/Form/Login.jsx';
import Register from './Components/Form/Register.jsx';
import MyList from './Components/MyList/MyList.jsx';
import AddSpot from './Components/AddTouristSpot/AddSpot.jsx';
import PrivateRoute from './Components/privateRoute/PrivateRoute.jsx';
import Spots from './Components/showspots/Spots.jsx';
import FrontPage from './Components/Common/FrontPage.jsx';
import AllTouristSpots from './Components/showspots/AllTouristSpots.jsx';
import ViewDetails from './Components/showspots/ViewDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
        {
          path:"/",
          element: <FrontPage></FrontPage>,
          loader:()=>fetch('http://localhost:5000/spots')
        },
        {
          path:"/tspots",
          element: <AllTouristSpots></AllTouristSpots>,
          loader:()=>fetch('http://localhost:5000/spots')
        },
        {
          path:"/login",
          element: <Login></Login>
        },
        {
          path:"/register",
          element: <Register></Register>
        },
        {
          path:`/viewdetails/:id`,
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          
        },
        {
          path:"/mylist",
          element: <PrivateRoute><MyList></MyList></PrivateRoute> 
        },
        {
          path: "/addspot",
          element: <PrivateRoute><AddSpot></AddSpot></PrivateRoute> 
        }
    ]
  },
]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
         <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
