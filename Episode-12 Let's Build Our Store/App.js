import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { Header } from "./src/component/Header";
import AppBody from "./src/component/AppBody";
import About from "./src/component/About";
import Cart from "./src/component/Cart";
// import Contact from "./src/component/Contact";
import ErrorPage from "./src/component/ErrorPage";
import RestaurantMenu from "./src/component/RestaurantMenu";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";

const Contact = lazy(() => import("./src/component/Contact"));

const App = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    setUserName("Utkarsh");
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="applayout">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
      {
        path: "cart",
        element: <Cart />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
