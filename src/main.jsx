import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import Bag from "./routes/Bag.jsx"
import './index.css'
import Home from './routes/Home.jsx';
import myntraStore from './store/index.js';
import {Provider} from "react-redux"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
