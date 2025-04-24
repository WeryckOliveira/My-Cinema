import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from './routes/ErrorPage';
import MoviePlayer from './routes/MoviePlayer';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
d
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: "movieplayer/:id",
    element: <MoviePlayer />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
