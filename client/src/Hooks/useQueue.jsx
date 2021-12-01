import { useEffect, useState } from "react";

function useQueue(params) {
  const [reg, setReg] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (reg) {
      fetch(`http://localhost:4000/queues`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reg),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  }, [reg]);

  if (params === "post") {
    return [setReg];
  }
}

export default useQueue;
