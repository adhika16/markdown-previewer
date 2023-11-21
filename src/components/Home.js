import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configs/firebaseConfig";
import { useNavigate } from "react-router-dom";
import Application from './Application';

const Home = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      setIsLogin(true);
    } else {
      // User is signed out
      setIsLogin(false);
      navigate("/login");
    }
  });

  return <div>{isLogin ? <Application /> : <></>}</div>;
};

export default Home;
