import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home/Homepage';
import Forecastpage from '../pages/Forecastpage/Forecastpage';

export const router =createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path:"/forecast/:cityid",
        element:<Forecastpage/>
    }
])