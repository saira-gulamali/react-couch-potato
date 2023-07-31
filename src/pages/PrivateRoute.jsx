import React from "react";
// react router 5
// import { Route, Redirect } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// will remove later
// import { useUserContext } from "../context/user_context";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth0();
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

// React router 5
// const PrivateRoute = ({ children, ...rest }) => {
//   const { user } = useAuth0();
//   return (
//     <Route
//       {...rest}
//       render={() => {
//         return user ? children : <Redirect to="/" />;
//       }}
//     ></Route>
//   );
// };
export default PrivateRoute;
