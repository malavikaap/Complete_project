// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { RouterProvider } from "react-router-dom"
// import router from './router/Router.jsx'
// import CartProvider from './context/CartProvider';

// createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// )

import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import router from './router/Router.jsx';
import CartProvider from './context/CartProvider';
import React from 'react'; 

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
  