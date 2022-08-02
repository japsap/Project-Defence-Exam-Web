// react components
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Components
import MainPage from "./Routes/MainPage";
import DashBoard from "./Routes/DashBoard";
import Login from "./Routes/Login";
import Error from "./Routes/Error";
import Movies from "./Routes/Movies";
import MoviesInfo from './Components/Movies/MoviesInfo';


//ffirebase cfg
import fire from "./Hooks/fire";
import CommentUsers from "./Components/Comments/CommentUsers";
import Navbar from "./Components/Navbar/Navbar";

//provider





/* 

 i could've created a log in with local storage and POST request to the 
 sups but, i prefer using firebase for smaller apps just to make it cleaner 

*/


/* 
   also could've used a "Redux" or useContext to keep the App.js cleaner but,
   i did it that way because for now it helps me do things up faster later on ill be
   putting in in a different file  
*/


//todo   main page design, to thing what the functionality of the website be will be?, Login modal

/* 
  auth done 
  ui of log in done 
  navbar done
*/ 



/*
  also i couldve just used the 
  setValues(state => {
    values : ...state,
    [e.target.name] : e.target.values
  })

  but firebase needs hooks as i made them "email" and "password" ,

*/





const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  //contansts
  const navigate = useNavigate();

  //clear the inputs after a login or sign up
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  //clear the errors after a login or sign up
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  //log in hhandler
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
  };

  //sign up handler
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
  };

  //log out handler
  const handleLogout = () => {
    fire.auth().signOut();
  };

  //authenthication listener for each user
  const AuthListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
        navigate("/dashboard");
      } else {
        setUser("");
      }
    });
  };

  //when the page is rendered play the auth func
  useEffect(() => {
    AuthListener();
  }, []);


  return (
    <>
    <Navbar user={user}/>
      <Routes>
        //checking if the user is logged in
        {user ? (
          <Route
            path="/dashboard"
            element={<DashBoard handleLogout={handleLogout} user={user}/>}
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
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:moviesId" element={<MoviesInfo user={user}/>}/>
      </Routes>
    </>
  );
};

export default App;
