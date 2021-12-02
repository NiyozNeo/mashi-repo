import { createContext, useState, useEffect } from "react";
import { Redirect } from "react-router";

const Context = createContext();

const Provider = ({ children }) => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  useEffect(() => {
    if (token) {
      fetch(`http://localhost:4000/check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (!data || !data.message) {
            <Redirect to="/login" />;
          }
        })
        .catch((err) => {
          console.log(err);
          <Redirect to="/login" />;
        });
    } else {
      <Redirect to="/login" />;
    }
  }, [token]);

  return (
    <>
      <Context.Provider value={{ token, setToken }}>
        {children}
      </Context.Provider>
    </>
  );
};

export { Context, Provider };
