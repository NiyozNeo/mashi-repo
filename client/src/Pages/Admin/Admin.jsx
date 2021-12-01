import { useEffect, useState } from "react";
import { Redirect } from "react-router";

function Admin() {
  const [items, setItems] = useState([]);

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
        console.log(data);
        setItems(data);
      });
  }, []);

  async function handleClick(e) {
    e.target.disabled = true;
    console.log(e.target.dataset.id);

    fetch("http://localhost:4000/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: e.target.dataset.id,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          <Redirect to="/admins" />;
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
              {items.data?.map((item) => {
                console.log(item);
                if (item.is_verified) {
                  return (
                    <li key={item.queue_id}>
                      <p>user: {item.queue_user}</p>
                      <p>clinic: {item.queue_clinic}</p>
                      <button data-id={item.queue_id} onClick={handleClick}>
                        o'chirish
                      </button>
                    </li>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
