import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { auth } from "../Hooks/fire";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const { currentUser } = getAuth();

  const navigate = useNavigate();

  const clearErrors = () => {
    setPasswordError("");
    setEmailError("");
  };

  const handleLogin = () => {
    clearErrors();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/dashboard");
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
        navigate("/dashboard");
    })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  return (
    <>
      <div className="logIn__position">
        {hasAccount ? (
          <div className="logIn">
            {/* sign in text */}
            <h1>
              Login <span className="pink"> :P</span>
            </h1>
            <p className="mb-5">Login into our newest platform</p>
            {/* sign in text */}

            <div className="logIn__group">
              <input
                className="logIn__input"
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="logIn__highlight"></span>
              <span className="logIn__bar"></span>
              <label className="logIn__label">Email</label>
            </div>
            <p className="err__msg">{emailError}</p>

            {/* password */}
            <div className="logIn__group">
              <input
                className="logIn__input"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="logIn__highlight"></span>
              <span className="logIn__bar"></span>
              <label className="logIn__label">Password</label>
            </div>
            <p className="err__msg">{passwordError}</p>
            {/* password */}
            <div className="d-flex justify-content-between">
              <button className="signIn__btn" onClick={handleLogin}>
                Log in
              </button>
              <p>
                New user?{" "}
                <span
                  className="pink cursor-pointer"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Sign Up
                </span>
              </p>
            </div>
          </div>
        ) : (
          /// email
          <div className="signIn">
            {/* sign in text */}
            <h1>
              Sign Up<span className="pink"> :e</span>
            </h1>
            <p className="mb-5">Create an account at our newest platform</p>
            {/* sign in text */}
            <div className="logIn__group">
              <input
                className="logIn__input"
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="logIn__highlight"></span>
              <span className="logIn__bar"></span>
              <label className="logIn__label">Email</label>
            </div>
            <p className="err__msg">{emailError}</p>

            {/* password */}
            <div className="logIn__group">
              <input
                className="logIn__input"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="logIn__highlight"></span>
              <span className="logIn__bar"></span>
              <label className="logIn__label">Password</label>
            </div>

            <p className="err__msg">{passwordError}</p>
            {/* password */}

            <div className="d-flex justify-content-between">
              <button className="signIn__btn" onClick={handleSignup}>
                Sign up
              </button>
              <p>
                Have an account?{" "}
                <span
                  className="pink cursor-pointer"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Log in
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
