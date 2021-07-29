import React from "react";
import "./NavBar.css";
import github from '../../img/github.png'

export default function NavBar() {
  return (
    <div className="navbar">
      
      <ul className="list">
        
        <li >
          <a className="tituloNavBar" href="/">Countries</a>
        </li>
        
        <li className="navbarItem">
          <a  href="/">Home</a>
        </li>

        <li className="navbarItem2">
          <a href="/activities">Activities</a>
        </li>
        <li>
        <a className='iconGithub' href='https://github.com/nicoirigoyen/PI-Countries-FT12'>
              <img src={github} width="20px" height="20px" className='iconImg' alt=''></img>
          </a> 
        </li>
       
      </ul>
           
        
    </div>
  );
}
