import { useEffect, useState } from "react";
import { Redirect } from "react-router";

function Order() {
  const [queue, setqueue] = useState([]);
  const [all, setAll] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("admin");
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

  async function handleClick(e) {
    e.target.disabled = true;

    fetch("http://localhost:4000/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: e.target.dataset.id,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          <Redirect to="/admins/order" />;
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="home-wrapper">
        <div className="main">
          <div className="profile__name-wrapper">
            <div>
              {queue.allData?.map((el) => {
                return (
                  <li key={queue.queue_id}>
                    <p>klinika {el.queue_clinic}</p>
                    <p>kategoriyasi {el.queue_category}</p>
                    <p>odam {el.queue_user}</p>
                    <button onClick={handleClick} data-id={el.queue_id}>
                      verifikatsiya qilish
                    </button>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Order;
