import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Private = ({ path, component, exact }) => {
  const [token] = useAuth();

  if (token) {
    console.log("token");
    return <Route path={path} component={component} exact={exact} />;
  }
  return <Redirect to="/login" />;
};
export default Private;
