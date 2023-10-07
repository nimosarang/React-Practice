import { Outlet } from "react-router-dom";
import Login from "../pages/Login";

function AuthRouter() {
  const isLogined = false;

  return isLogined ? <Outlet /> : <Login />;
}

export default AuthRouter;
