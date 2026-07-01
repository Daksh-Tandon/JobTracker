

import React from "react";
import {Link} from "react-router-dom"
import Register from "../pages/Register";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow">
      <div className="container">

        <h3 className="text-center text-5xl  text-blue-400 px-3 py-4">JobPortal</h3>

        <ul className="flex bg-white p-2 justify-between rounded-2xl border-0 ">
          <li>Home</li>
          <li>Jobs</li>
          <li>Companies</li>
          <li>Sign In</li>
          <li><Link to={"/register"}>Register</Link></li>
        </ul>

      </div>
    </nav>



  )
}

export default NavBar