import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./Routes/Home.jsx";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import { store } from "./Store/store.js";
import AddEmployee from "./Routes/AddEmployee.jsx";
import SignIn from "./Routes/SignIn.jsx";
import Editdetail from "./Routes/Editdetail.jsx";
import Signup from "./Routes/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/addemployee", element: <AddEmployee /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <Signup /> },
      { path: "/edit/:id", element: <Editdetail /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
