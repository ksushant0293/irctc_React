import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginSignupPage from "./components/loginSignupPage/LoginSignupPage";
import "./App.css";
import Home from "./components/home/Home";
import PassengerForm from "./components/passengerForm/PassengerForm";
import TrainList from "./components/trainList/TrainList";
import Flight from "./components/Flight/Flight";
import Finalbooking from "./Finalbooking/Finalbooking";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginSignupPage />,
    },
    {
      path: "/passengerForm",
      element: <PassengerForm />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/TrainList",
      element: <TrainList />,
    },
    {
      path: "/Flight",
      element: <Flight/>,
    },
    {
      path: "/Finalbooking",
      element: <Finalbooking/>,
    },
  ]);

  return (
    <div className="appDiv">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
