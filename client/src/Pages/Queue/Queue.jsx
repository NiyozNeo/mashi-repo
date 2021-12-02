import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import useQueue from "../../Hooks/useQueue";

function Queue() {
  const [data, setData] = useState([]);
  const [ctg, setctg] = useState([]);
  const [queue, setqueue] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/clinics")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:4000/queues", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: JSON.stringify({ token }),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setqueue(data);
      });
  }, []);

  useEffect(() => {
    let cli = document.querySelector(".clinic").value;
    fetch(`http://localhost:4000/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cli }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setctg(data);
      })
      .catch((err) => console.log(err));
  }, [data]);

  const [setReg] = useQueue("post");
  const handleSubmit = (e) => {
    e.preventDefault();
    let button = document.querySelector("button")
    button.disabled = true
    const selects = document.querySelectorAll("select");
    let token = localStorage.getItem("token");
    let course = {
      clinic: selects[0].value,
      category: selects[1].value,
      token,
    };
    <Redirect to="/queue"/>
    setReg(course);
  };

  return (
    <>
      <div className="home-wrapper">
        <div className="main">
          <div className="profile__name-wrapper">
            <div>
              {queue.data?.length >= 1 ? (
                <ul>
                  {queue.data.map((q) => {
                    return (
                      <li key={q.queue_id}>
                        <p>clinic : {q.queue_clinic}</p>
                        <p>category : {q.queue_category}</p>
                      </li>
                    );
                  })}

                  <h1>
                    ochratingiz{" "}
                    {queue.data[0].is_verified
                      ? queue.allData.length
                      : "sizning so'rovingiz tekshirilmoqda ..."}
                  </h1>
                </ul>
              ) : (
                <form onSubmit={handleSubmit}>
                  <select className="clinic">
                    {data?.map((el) => (
                      <option key={el.clinic_id} value={el.clinic_id}>
                        {el.clinic_name}
                      </option>
                    ))}
                  </select>
                  <select name="" id="">
                    {ctg.map((el) => {
                      return (
                        <option key={el.category_id} value={el.category_id}>
                          {el.category_name}
                        </option>
                      );
                    })}
                  </select>
                  <button type="submit">Ochrad olish</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Queue;
