import React, { useState } from "react";
import Input from "./Input";
import "./Login.css";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signinAuthUserWithEmailAndPassword,
} from "./firebase";

const Login = ({ showSignUp, redirectToHome }) => {
  const [contact, setContact] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await signinAuthUserWithEmailAndPassword(contact.email, contact.password);
      alert("Login successful!");
      redirectToHome();
    } catch (error) {
      alert("Invalid email or password.");
    } finally {
      setIsLoading(false);
    }
  };

  const logGoogleUser = async () => {
    setIsLoading(true);

    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocFromAuth(user);
      alert("Login successful using Google!");
      redirectToHome();
    } catch (error) {
      alert("Google Sign-In failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <Input name="email" type="email" placeholder="Email" onChange={handleChange} value={contact.email} required />
          <Input name="password" type="password" placeholder="Password" onChange={handleChange} value={contact.password} required />
          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? "Loading..." : "Sign In"}
          </button>
        </form>
        <button onClick={logGoogleUser} className="google-login-btn" disabled={isLoading}>
          {isLoading ? "Loading..." : "Sign In with Google"}
        </button>
        <p>
          Don’t have an account?{" "}
          <span onClick={showSignUp} className="signup-link">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
