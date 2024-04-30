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
import UpdateSpot from './Components/UpdateSpot/UpdateSpot.jsx';
import AddCountry from './Components/AddCountry/AddCountry.jsx';
import ShowCntrySpot from './Components/AddCountry/ShowCntrySpot.jsx';
import { ThemeProvider } from './Components/ThemeSwithcher/ThemeContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
        {
          path:"/",
          element: <FrontPage></FrontPage>,
          loader:()=>fetch('https://tourism-server-9iypyqckm-tahsins-projects-aaa37910.vercel.app/spots'),
          //loader: ()=>fetch('http://localhost:5000/country')
        },
        {
          path:"/tspots",
          element: <AllTouristSpots></AllTouristSpots>,
          loader:()=>fetch('https://tourism-server-9iypyqckm-tahsins-projects-aaa37910.vercel.app/spots')
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
          element: <PrivateRoute><AddSpot></AddSpot></PrivateRoute>,
        },
        {
          path: "/update/:id",
          element: <PrivateRoute><UpdateSpot></UpdateSpot> </PrivateRoute>,
          loader:({params})=>fetch(`https://tourism-server-9iypyqckm-tahsins-projects-aaa37910.vercel.app/spots/${params.id}`)
        },
        {
          path:"/country",
          element: <PrivateRoute> <AddCountry></AddCountry> </PrivateRoute>
        },
        {
          path:"/showspot",
          element: <ShowCntrySpot></ShowCntrySpot>
        }
    ]
  },
]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
        <ThemeProvider>
             <RouterProvider router={router} />
        </ThemeProvider>
   </AuthProvider>
  </React.StrictMode>,
)
