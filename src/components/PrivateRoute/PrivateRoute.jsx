import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoggedIn } from "../../features/userSlice.js";

const PrivateRoute = (props) => {
  const { children } = props;
  const isLoggedIn = useSelector(selectLoggedIn);
  const location = useLocation();

  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <Navigate
      replace={true}
      to="/sign-in"
      state={{ from: `${location.pathname}${location.search}` }}
    />
  );
};

export default PrivateRoute;
