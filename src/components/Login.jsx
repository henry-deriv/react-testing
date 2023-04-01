import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [password, setPassword] = useState("");
  const [loginId, setLoginId] = useState("");
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/1");
      setUser(data);
    } catch {
      setError(true);
    }
  }

  return (
    <div>
      <div>{user.name}</div>
      <label htmlFor="loginId">Login ID</label>
      <input
        type="text"
        placeholder="Enter your login id..."
        onChange={e => setLoginId(e.target.value)}
        name="loginId"
        value={loginId}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Enter your password..."
        onChange={e => setPassword(e.target.value)}
        name="password"
        value={password}
      />
      <button disabled={!loginId && !password} onClick={handleClick} >Login</button>
      <span style={{ visibility: error ? "visible" : "hidden" }}>
        Something went wrong!
      </span>
    </div>
  );
}

export default Login;
