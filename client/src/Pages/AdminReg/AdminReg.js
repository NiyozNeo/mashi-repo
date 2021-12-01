import { useEffect, useState } from "react";
import useReg from "../../Hooks/useAdminReg";

function AdminReg() {
  const [setReg] = useReg("post");
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll(".input");
    const select = document.querySelector("select");
    let course = {
      username: inputs[0].value,
      password: inputs[1].value,
      phone: inputs[2].value,
      select: select.value,
    };
    setReg(course);
  };
  useEffect(() => {
    fetch("http://localhost:4000/clinics")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="home-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="username"
            placeholder="username"
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <input
            className="input"
            type="text"
            name="phone"
            placeholder="number"
            required
          />
          <select>
            {data?.map((el) => (
              <option key={el.clinic_id} value={el.clinic_id}>
                {el.clinic_name}
              </option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default AdminReg;
