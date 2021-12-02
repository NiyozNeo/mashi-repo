import { useEffect, useState } from "react";

function AdminUsers() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/admin/users")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <>
      <div className="home-wrapper">
        <div className="main">
          <div className="profile__name-wrapper">
            <ul>
              {items.map((user) => {
                return (
                  <li>
                    <h3>{user.user_name}</h3>
                    <p>{user.user_id}</p>
                    <p>{user.user_phone}</p>
                    {user.is_admin ? (
                      <p>
                        <i>Admin</i>
                      </p>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminUsers;
