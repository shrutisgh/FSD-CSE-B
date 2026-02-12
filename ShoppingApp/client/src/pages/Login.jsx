import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (email === "admin" && password === "manager") {
      console.log("Logging in as admin");
      navigate('/');
    } 
    else if (email === "user@gmail.com" && password === "abes") {
      console.log("Logging in as user");
      navigate('/');
    } 
    else {
      setError("Email or password is incorrect");
    }
  }

  return (
    <div className="card">
      <h1>Login</h1>

      {error && <div className="error">{error}</div>}

      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input 
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />

        <label htmlFor="password">Password:</label>
        <input 
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required 
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
