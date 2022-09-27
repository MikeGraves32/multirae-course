import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
const activestyle = {
     color: "purple",
};

export default function Header() {
     return (
          <header className='courseHdr'>
               <nav>
                    <section className='CourseIntro'>
                         <h4>Your Track:</h4>
                         <a className='nav-link' href='/pages/LandingPage'>
                              Landing Page
                         </a>
                    </section>
                    <ul className='nav'>
                         <div className='container'>
                              <li className='nav-item row align-items-start'>
                                   <NavLink
                                        activestyle={activestyle}
                                        to='/learningTrack'
                                   >
                                        Novice
                                   </NavLink>
                              </li>
                         </div>
                         <div className='container'>
                              <li className='nav-item'>
                                   <NavLink
                                        activestyle={activestyle}
                                        to='/Intermediate'
                                   >
                                        Intermediate
                                   </NavLink>
                              </li>
                         </div>
                         <div className='container'>
                              <li className='nav-item'>
                                   <NavLink
                                        activestyle={activestyle}
                                        to='/Advanced'
                                   >
                                        Advanced
                                   </NavLink>
                              </li>
                         </div>
                    </ul>
                    {/* <ul>
          <li>
            <Link to="/">
              <img alt="Carved Rock Fitness" src="/images/logo.png" />
            </Link>
          </li>
          <li>
            <NavLink activestyle={activestyle} to="/">
              Shoes
            </NavLink>
          </li>
          <li>
            <NavLink activestyle={activestyle} to="/cart">
              Cart
            </NavLink>
          </li>
        </ul> */}
               </nav>
          </header>
     );
}
