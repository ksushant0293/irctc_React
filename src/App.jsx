import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginSignupPage from "./components/loginSignupPage/LoginSignupPage";
import "./App.css";
import Home from "./components/home/Home";
import PassengerForm from "./components/passengerForm/PassengerForm";
import TrainList from "./components/trainList/TrainList";
import TrainList1 from "./components/trainList/TrainList1";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/passengerForm",
      element: <PassengerForm />,
    },
    {
      path: "/loginSignupPage",
      element: <LoginSignupPage />,
    },
    {
      path: "/TrainList",
      element: <TrainList />,
    },
    {
      path: "/TrainList1",
      element: <TrainList1 />,
    },
  ]);

  return (
    <div className="appDiv">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
