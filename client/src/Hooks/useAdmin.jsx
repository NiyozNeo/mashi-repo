import { useContext } from "react";
import { Context } from "../Context/AdminContext";

const useAdmin = (settrOnly) => {
  const { admin, setAdmin } = useContext(Context);
  return settrOnly ? [admin, setAdmin] : [admin];
};

export default useAdmin;
