import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { Header } from "./src/component/Header";
import AppBody from "./src/component/AppBody";
import About from "./src/component/About";
// import Contact from "./src/component/Contact";
import ErrorPage from "./src/component/ErrorPage";
import RestaurantMenu from "./src/component/RestaurantMenu";

const Contact = lazy(() => import("./src/component/Contact"));

console.log(Contact);
console.log(import("./src/component/Contact"));

const App = () => {
  return (
    <div className="applayout">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AppBody />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<h1>Loading........</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "resturants/:id",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
