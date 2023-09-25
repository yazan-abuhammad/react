import React from 'react';
import ReactDOM from 'react-dom';

import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import FormExample from './pages/FormExample';
import Counter from './pages/Counter';
import SignupForm from './pages/SignupForm';
import Calculator from './pages/Calculator';


import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement : <ErrorPage />
  },
  {
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path: "/Calculator",
    element: <Calculator/>,
  },
  {
    path: "/Counter",
    element: <Counter/>,
  },
  {
    path: "/contact",
    element: <ContactPage/>
  },
  {
    path: "/Signup",
    element: <SignupForm/>
  },
  {
    path: "/form",
    element: <FormExample/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);



// ReactDOM.render(document.getElementById('root'));
