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
import Cart from "./Components/Navbar/Cart";
import Footer from "./Components/footer/Footer";
import ContactMe from "./Routes/ContactMe";

//ffirebase cfg
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./Hooks/fire";




/*
  1. better ui for the movie buy poster
  2. Contact Us page with emailJs frameWork.
  3. cart span color (number's color is going to be white the background is going to be circle and pink color)
*/

/* 
   also could've used a "Redux" or useContext to keep the App.js cleaner but,
   i did it that way because for now it helps me do things up faster later on ill be
   putting in in a different file  
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
  const navigate = useNavigate();

  //loginout the user
  const handleSignout = () => {
    if(window.confirm("Are you sure you want to log out?")){
      signOut(auth);
    }
  };

  //setting the user with the global variable
  const [user, setUser] = useState("");

  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);


  //contasts
  const [moviesCart, setMoviesCart] = useState([]);
  const [message, setMessage] = useState('')
  const [items, setItems] = useState(0);
  const [ okayStatus, setOkayStatus ] = useState(false)


  //pushing the items into a simple array
  const handleChange = (item) => {
    moviesCart.push(item);
    //we dont need to watch this state or any [ items, setItems ] states :( 
    setItems((prev) => prev + 1);
    setOkayStatus(true)
  };

  
  
  return (
    <>
      <Navbar items={items} />
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
        <Route path="/moviesBuy" element={<Blog />} />
        <Route
          path="/moviesBuy/:movesInfoId"
          element={<MovieBuyInfo handleChange={handleChange} okayStatus={okayStatus} setOkayStatus={setOkayStatus}/>}
        />
        <Route
          path="/cart"
          element={
            <Cart
              moviesCart={moviesCart}
              setMoviesCart={setMoviesCart}
              setItems={setItems}
              items={items}
            />
          }
        />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:moviesId" element={<MoviesInfo message={message}/>} />
        <Route path='/contact' element={<ContactMe/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="/movies/:moviesId/*" element={<Error/>}/>
        <Route path="/moviesBuy/:movesInfoId/*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
