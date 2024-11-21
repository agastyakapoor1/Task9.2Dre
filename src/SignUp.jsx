import React, { useState } from 'react';
import Input from './Input';
import './SignUp.css';
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from './firebase';

const SignUp = ({ showLogin }) => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [contact, setContact] = useState(initialState);

  const { name, email, password, confirmPassword } = contact;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      if (user) {
        await createUserDocFromAuth(user, { name });
        alert('Sign-up successful! Redirecting to the login page...');
        showLogin();
      }
    } catch (error) {
      alert('Error during sign-up. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account</h2>
        <p>Sign up to get started with your account</p>

        <form onSubmit={handleSubmit}>
          <Input
            name="name"
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
            value={name}
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            value={email}
            required
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={password}
            required
          />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={confirmPassword}
            required
          />
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        <p>
          Already have an account?{' '}
          <span onClick={showLogin} className="login-link">
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
