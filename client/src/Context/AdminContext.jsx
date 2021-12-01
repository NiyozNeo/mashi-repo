import { createContext, useState, useEffect } from "react";
import { Redirect } from "react-router";

const Context = createContext();

const Provider = ({ children }) => {
  
  const [admin, setAdmin] = useState(localStorage.getItem("admin"));
  useEffect(() => {
    if (admin) {
      fetch(`http://localhost:4000/check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ admin }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.message && data.token) {
            setAdmin(data.token);
            localStorage.setItem("admin", data.token);
          } else {
            setAdmin(null);
          }
        })
        .catch((err) => console.log(err));
    } else {
      <Redirect to="/" />;
    }
  }, [admin]);

  return (
    <>
      <Context.Provider value={{ admin, setAdmin }}>
        {children}
      </Context.Provider>
    </>
  );
};

export { Context, Provider };
