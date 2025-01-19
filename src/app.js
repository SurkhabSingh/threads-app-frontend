import React from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import SignUpForm from "./components/signupForm";
import LandingPage from "./components/landingPage";
import Navbar from "./components/navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/signup", element: <SignUpForm /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
