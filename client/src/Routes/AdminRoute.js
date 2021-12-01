import { Redirect, Route } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

function AdminRoute(props) {
  const [admin] = useAdmin(true);

  if (admin) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/" />;
  }
}

export default AdminRoute;
