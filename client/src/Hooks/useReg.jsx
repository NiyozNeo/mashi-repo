import { useEffect, useState } from "react";

function useCourse(params) {
  const [reg, setReg] = useState([]);
  const [data, setData] = useState([]);
  // useEffect(()=> {
  //     fetch(`http://localhost:4000/reg`)
  //         .then(res => res.json())
  //         .then(data => setCourse(data))
  //         .catch(err => console.log(err))
  // },[])

  useEffect(() => {
    if (reg) {
      fetch(`http://localhost:4000/reg`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reg),
      })
        .then((res) => res.json())
        .then((data) => localStorage.setItem("token", data.token))
        .catch((err) => console.log(err));
    }
  }, [reg]);
  // useEffect(() => {
  //     if (courseDelete) {
  //         fetch(`${url}course/${courseDelete}`, {
  //             method: "delete",
  //         })
  //         .catch(err => console.log(err))
  //         .finally(() => setCourseDelete([]))
  //     }
  // }, [courseDelete])

  // if (params === 'get') {
  //     return course
  // }
  if (params === "post") {
    return [setReg];
  }
  // if (params === 'delete') {
  //     return [setCourseDelete]
  // }
}

export default useCourse;
