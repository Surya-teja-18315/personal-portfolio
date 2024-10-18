import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom'; // Import RouterProvider
import reportWebVitals from './reportWebVitals';
import { router } from './App'; // Import the router from App.js

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* Use RouterProvider to pass the router configuration */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
