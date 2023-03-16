import React from "react";
// import Join from "./Join";
import "./Home.css";
import dashboard from "../../assets/DashboardSS.png"
import singleClientSS from "../../assets/SingleClientSS.png"
import allClientsSS from "../../assets/AllClientsSS.png"
import scheduleSS from "../../assets/ScheduleSS.png"
// import hero_image from "../../assets/hero_image.png";
// import { motion } from "framer-motion";
// import NumberCounter from "number-counter";
// import {Link} from 'react-scroll'

// import { useState } from 'react';
// import { Link,  useNavigate } from 'react-router-dom';


const Home = () => {


  return (
    <div>
      <div className="hero">
        <div className="blur hero-blur"></div>
        <div className="left-h">
          {/* Hero text */}
          <div className="hero-text">
            <div>
              <span>Plan | schedule | track <br></br>all in one place</span>
              <h2>Elevate your client tracking </h2>
            </div>
            <div>

            </div>
            <div>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <h3>What is Plan Tracker?</h3>
                    <p>
                      Plan Tracker is a web-based client management platform for personal trainers. This is an all-in-one space to track clients, schedule appointments, and build workout plans. The efficient layout allows for quick and easy navigation for the busy personal trainer.
                    </p>
                  </div>
                  <div className="col">
                    <img src={dashboard}></img>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <h3>Tracking with Ease</h3>
                    
                      <p>Take the thought out of picking exercises for the day. Exercises are preloaded to choose from based on the muscle group the client is focusing on. </p>
                      <br></br>

                      <p>Utilize the dashboard which will show a summary of your day with all scheduled appointments and clients.</p>
                      <br></br>
                      <p>On each client page you will be able to edit demographics (such as goals, injury history, weight, etc.), schedule a new appointment, and create a workout plan for each scheduled appointment. </p>
                    
                    
                  </div>
                  <div className="col">
                    {/* <div className="">
                      <img src={allClientsSS}/>
                    </div> */}
                    <div className = "row"></div>
                    <div className="row">
                      <img src={scheduleSS}/>
                    </div>
                    {/* <div className="row">
                      <img src={singleClientSS}/>
                    </div> */}

                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* experience figures */}
          {/* <div className="figures">
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
          </div> */}

          {/* hero buttons */}
          {/* <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div> */}
        </div>
        {/* Right Side */}
      </div>
      {/* Render "Join" banner */}
      {/* <Join /> */}
    </div>
  );
};

export default Home;
