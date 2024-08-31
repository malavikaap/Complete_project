// // import { createBrowserRouter} from "react-router-dom";
// // import Main from "../layout/Main";
// // import Home from "../pages/home/Home";
// // import Signup from "../components/Signup";
// // import Cart from "../pages/Cart";

// // const router = createBrowserRouter([
// //     {
// //       path: "/",
// //       element: <Main/>,
// //       children: [ {
// //         path : '/',
// //         element: <Home/>
// //       }]
// //     },
// //     {
// //       path:'/signup',
// //       element: <Signup/>
// //     },
// //     {
// //       path:'/cart',
// //       element: <Cart/>,
// //     }
// //   ]);
// //   export default router

// import { createBrowserRouter } from "react-router-dom";
// import Main from "../layout/Main";
// import Home from "../pages/home/Home";
// import Signup from "../components/Signup";
// import Cart from "../pages/Cart";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,  // Main layout containing Navbar and Footer
//     children: [
//       {
//         path: '/',
//         element: <Home />
//       },
//       {
//         path: '/cart',
//         element: <Cart />,  // Cart page nested under Main layout
//       },
//     ]
//   },
//   {
//     path: '/signup',
//     element: <Signup />
//   },
// ]);

// export default router;


import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Signup from "../components/Signup";
import Cart from "../pages/Cart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,  // Main layout containing Navbar and Footer
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/cart',
        element: <Cart/>
      },
    ]
  },
  {
    path: '/signup',
    element: <Signup />
  },
]);

export default router;
