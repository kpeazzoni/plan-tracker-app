import React from "react";
import Join from "./Join";
import "./Home.css";
import hero_image from "../../assets/hero_image.png";
// import { motion } from "framer-motion";
import NumberCounter from "number-counter";
// import {Link} from 'react-scroll'

import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
    
  return (
    <div>
      <div className="hero">
        <div className="blur hero-blur"></div>
        <div className="left-h">
          {/* Hero text */}
          <div className="hero-text">
            <div>
              <span className="stroke-text">Trainers </span>
              <span>Meet</span>
            </div>
            <div>
              <span>Your Clients Today</span>
            </div>
            <div>
              <span>
                Trainers are here for you to give you a personalized
                training experience.
              </span>
            </div>
          </div>
          {/* experience figures */}
          <div className="figures">
            <div>
              <span>
                <NumberCounter end={140} start={100} delay={4} preFix="+" />
              </span>
              <span>Trainers</span>
            </div>
            <div>
              <span>
                <NumberCounter end={978} start={878} delay={4} preFix="+" />
              </span>
              <span>Members</span>
            </div>
            <div>
              <span>
                <NumberCounter end={50} delay={2} preFix="+" />
              </span>
              <span>fitness plans</span>
            </div>
          </div>

          {/* hero buttons */}
          <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>
        {/* Right Side */}
        <div className="right-h">
          {/* <button onClick={(event) => navigate('/login')} className='btn'>Login</button>
          <button onClick={(event) => navigate('/register')} className='btn'>Register</button> */}
            {/* <img className="hero-image" src={hero_image} alt="" /> */}
        </div>
      </div>
    {/* Render "Join" banner */}
    <Join />
    </div>
  );
};

export default Home;
