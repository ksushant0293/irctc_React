import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginSignupPage from "./components/loginSignupPage/LoginSignupPage";
import "./App.css";
import Home from "./components/home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/loginSignupPage",
      element: <LoginSignupPage />,
    },
  ]);

  return (
    <div className="appDiv">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
