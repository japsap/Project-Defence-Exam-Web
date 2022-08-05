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
import MoviesInfo from "./Components/Movies/MoviesInfo";
import Navbar from "./Components/Navbar/Navbar";
import Blog from "./Routes/BlogPage";
import MovieBuyInfo from "./Components/Blog/MovieBuyInfo";
import Cart from './Components/Navbar/Cart';

//ffirebase cfg
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./Hooks/fire";


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
  const navigate = useNavigate()

  //loginout the user
  const handleSignout = () => {
    signOut(auth);
  };


  //setting the user with the global variable
  const [user, setUser] = useState("");


  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);



  return (
    <>
      <Navbar/>
      <Routes>
        //checking if the user is logged in
        {user ? (
          <Route
            path="/dashboard"
            element={<DashBoard handleSignout={handleSignout} />}
          />
        ) : (
          <Route path="/dashboard" element={<Error />} />
        )}
        <Route path="/" element={<MainPage />} />

        <Route path="/login" element={<Login />} />
      
        <Route path='/moviesBuy' element={<Blog/>}/>
        <Route path="/moviesBuy/:movesInfoId" element={<MovieBuyInfo/>}/>
        <Route path='/cart' element={<Cart/>}/>

        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:moviesId" element={<MoviesInfo/>} />
      </Routes>
    </>
  );
};

export default App;
