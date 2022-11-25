import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    
    <nav className=" navbar navbar-expand-lg navbar-dark bg-dark p-1 test">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav  mx-auto mb-2 mb-lg-0 ">
              <Link className="navbar-brand   mx-4 fs-4 " to="/">
                Redux-Toolkit
              </Link>
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/counter">
                  Counter
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/redux">
                  CounterRedux
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/employee">
                  Employee
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active fs-5" to="/userlist">
                  Userlist
                </Link>
              </li>
              
              
              
            </ul>

            
          </div>
        </div>
      </nav>

    
      
    </>
  );
};

export default Navbar;
