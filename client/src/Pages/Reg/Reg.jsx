import { useEffect, useState } from "react";
import useReg from "../../Hooks/useReg";

function Home() {
  const [setReg] = useReg("post");

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll(".input");
    let course = {
      username: inputs[0].value,
      password: inputs[1].value,
      phone: inputs[2].value,
    };
    setReg(course);
  };

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
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Home;
