import { useEffect, useState } from "react";

function useCourse(params) {
  const [reg, setReg] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (reg) {
      fetch(`http://localhost:4000/adminreg`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reg),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("token", data.token);
          localStorage.setItem("admin", data.admin);
        })
        .catch((err) => console.log(err));
    }
  }, [reg]);

  if (params === "post") {
    return [setReg];
  }
}

export default useCourse;
