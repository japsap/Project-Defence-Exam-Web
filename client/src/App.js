// react components
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Components
import MainPage from "./Routes/MainPage";
import DashBoard from "./Routes/DashBoard";
import Login from "./Routes/Login";
import Error from "./Routes/Error";

//custom hooks
import fire from "./auth/fire";

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const navigate = useNavigate();

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const LogInHandler = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
        }
      });
    navigate("/dashboard");
  };

  const handleSignUp = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
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
    navigate("/dashboard");
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const AuthListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    AuthListener();
  }, []);

  return (
    <>
      <Routes>
        //checking if the user is logged in
        {user ? (
          <Route
            path="/dashboard"
            element={<DashBoard handleLogout={handleLogout} />}
          />
        ) : (
          <Route path="/dashboard" element={<Error />} />
        )}
        <Route path="/" element={<MainPage />} />
        <Route
          path="/login"
          element={
            <Login
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              emailError={emailError}
              passwordError={passwordError}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
              handleSignUp={handleSignUp}
              LogInHandler={LogInHandler}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
