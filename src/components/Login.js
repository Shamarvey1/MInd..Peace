import React from 'react';
import './Login.css'; 

function Login() {
  const handleSubmit = () => {
    alert('Login submitted!');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password:</label>
        <input type="password" placeholder="Enter your password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
