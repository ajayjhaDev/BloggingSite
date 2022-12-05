import App from "./App";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Confirmation from "./pages/Confirmation";
import ProtectedRoute from "./components/ProtectedRoute";

const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/confirm",
    element: <Confirmation />,
  },
];

export default routes;
