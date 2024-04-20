import React, { useState } from 'react';
import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // You can add further logic such as authentication using a backend service
  };
  return (
    <div className="App">
            <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
        <GoogleLogin
  onSuccess={credentialResponse => {
    var decoded=jwtDecode(credentialResponse.credential);
    console.log(decoded);
  }}
  onError={() => {console.log('Login Failed');}}
/>;
      </form>

    </div>
  );
}

export default App;
