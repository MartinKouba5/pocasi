import React from "react";
import './Login.css';


const LoginPage = ({ onLogin }) => {
  return (
    <div class="login">
      <h1>Login</h1>
      <form>
        {/* Email input */}
        <div class="form-outline mb-4">
        <label class="form-label" for="form2Example1">Uživatel</label>

          <input type="email" id="form2Example1" class="form-control" />
        </div>

        {/* Password input */}
        <div class="form-outline mb-4">
        <label class="form-label" for="form2Example2">Heslo</label>
          <input type="password" id="form2Example2" class="form-control" />
        </div>


        {/* Submit button */}
        <button type="button" class="btn btn-info btn-block mb-4" onClick={onLogin}>Sign in</button>
    
      </form>
    </div>
  );
};

export default LoginPage;
