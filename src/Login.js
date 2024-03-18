import React, { useState } from "react";
import './Login.css';
import Navbar from './navbar'; 
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const auth = getAuth();

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      onLogin();
    } catch (error) {
      setErrorMessage('Špatné heslo nebo email');
      console.error(error);
    }
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      onLogin();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setErrorMessage('Tento uživatel již existuje');
      } else if (error.code === 'auth/weak-password'){
        setErrorMessage('Slabé heslo');
      } else {
        setErrorMessage('Chybné údaje');

      }
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div class="login">
        <h1>Login</h1>
        <form>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example1">Email</label>
            <input type="email" id="form2Example1" class="form-control" onChange={e => setEmail(e.target.value)} />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example2">Heslo</label>
            <input type="password" id="form2Example2" class="form-control" onChange={e => setPassword(e.target.value)} />
            {errorMessage && <a style={{ color: 'red' }}>{"*"+errorMessage}</a>}

          </div>

          <button type="button" class="btn btn-info btn-block mb-4" onClick={handleSignIn}>Sign in</button>
          <button type="button" class="btn btn-link btn-block mb-4" onClick={handleSignUp}>Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
