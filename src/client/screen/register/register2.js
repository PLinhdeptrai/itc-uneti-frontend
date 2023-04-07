import React, { useState } from "react";
import axios from "axios";
function Register2() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  async function RegisterApp() {
    const data = axios
      .post("http://localhost:8080/api/auth/register", {
        username,
        password,
        email,
      })
      .then(function (data) {
        console.log(data);
        console.log(data.data);
        alert("thanh cong");
      })
      .catch(function (error) {
        console.log(error);
        alert("loi roi");
      });
  }
  const handleSubmit = () => {
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit()}>
        <div>
          <label>Username</label>
          <input
            autoComplete="off"
            name="username"
            placeholder="Nhập username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            autoComplete="off"
            name="password"
            placeholder="Nhập username"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            autoComplete="off"
            name="email"
            placeholder="Nhập email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <button type="button" onClick={RegisterApp}>
          Dang nhap
        </button>
      </form>
    </div>
  );
}

export default Register2;
