import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignupPage from './pages/SignupPage';
import MissionStatement from './pages/MissionStatement';
import Investigations from './pages/Investigations';
import Opinions from './pages/Opinions';
import Stories from './pages/Stories';
import './custom.scss';
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "signup",
    element: <SignupPage/>,
  },
  {
    path: "missionstatement",
    element: <MissionStatement/>,
  },
  {
    path: "investigations",
    element: <Investigations/>,
  },
  {
    path: "opinions",
    element: <Opinions/>,
  },
  {
    path: "stories",
    element: <Stories/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
);