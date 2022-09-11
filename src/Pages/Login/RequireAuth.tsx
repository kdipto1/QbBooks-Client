import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";


type LocationProps = {
  state: {
    from: Location;
  };
};
const RequireAuth = ({ children }: any) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation() as unknown as LocationProps;
  // const toast: any = toast("You need to login to visit this page");
  if (loading) {
    return;
  }
  if (!user)
    return (
      <Navigate
        // toast={toast("You need to login to visit this page")}
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  return children;
};

export default RequireAuth;
