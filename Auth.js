import React, { useState } from 'react';
import { auth } from './firebaseConfig';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('User signed up:', userCredential.user);
      })
      .catch(error => {
        console.error('Error signing up:', error);
      });
  };

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('User logged in:', userCredential.user);
      })
      .catch(error => {
        console.error('Error logging in:', error);
      });
  };

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        console.log('User logged out');
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <div>
      <h2>Authentication</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignup}>Sign Up</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Auth;
