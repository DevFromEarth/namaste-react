import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { Header } from "./src/component/Header";
import AppBody from "./src/component/AppBody";
import About from "./src/component/About";
// import Contact from "./src/component/Contact";
import ErrorPage from "./src/component/ErrorPage";
import RestaurantMenu from "./src/component/RestaurantMenu";
import UserContext from "./src/utils/UserContext";

const Contact = lazy(() => import("./src/component/Contact"));

const App = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    setUserName("Utkarsh");
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="applayout">
        <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
          <Header />
        </UserContext.Provider>
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
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
