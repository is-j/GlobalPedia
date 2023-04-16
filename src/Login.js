import React, { useState } from "react";
import './Login.css';

function Login(){
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleUsernameChange = (event) =>{

        setUsername(event.target.value);

    };

    const handlePasswordChange = (event) =>{

        setPassword(event.target.value);

    };

    const handleSubmit = (event) =>{

        event.preventDefault();

    };

return(

    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input type="username" value={username} onChange={handleUsernameChange} required/>
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );



}

export default Login;
