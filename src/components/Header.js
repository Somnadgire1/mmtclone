import React from "react";
import "../styles/App.css";
import Logo2 from "../images/mmtLogoWhite.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark ">
        <div className="container">
          <Link to="/" className="navbar=brand">
            <img
              src={Logo2}
              className="w-100 logo"
              style={{ height: "60px" }}
              alt="make-my-trip-logo"
            ></img>
          </Link>
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-right" id="navbarNavAltMarkup">
            <ul className="navbar-nav ms-auto me-5">
              <li className="nav-item fs-4 p-2">
                <Link to="/flight" className="nav-link">
                  Flights
                </Link>
              </li>
              <li className="nav-item fs-4 p-2">
                <Link to="/hotel" className="nav-link">
                  Stays
                </Link>
              </li>
              <li className="nav-item fs-4 p-2">
                <Link to="/train" className="nav-link">
                  Trains
                </Link>
              </li>

              {!isAuthenticated ? (
                <li className="nav-item p-2 fs-4">
                  <Link href="/" className="nav-link">
                    <button
                      className="btn btn-link text-white ms-2"
                      onClick={() => loginWithRedirect()}
                    >
                      <i className="fa fa-sign-in" aria-hidden="true"></i>
                    </button>
                    Log In
                  </Link>
                </li>
              ) : (
                <li className="nav-item p-2 fs-4">
                  <Link href="/" className="nav-link">
                    Log Out
                    <button
                      className="btn btn-link text-white ms-2"
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                    >
                      <i className="fa fa-sign-out" aria-hidden="true"></i>
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <div className="me-4" style={{ float: "right" }}>
        {isAuthenticated && (
          <p className="text-danger link-success link-offset-2 link-underline-opacity-100-hover">
            <i
              className="fa fa-user-circle-o px-1 text-primary"
              aria-hidden="true"
            ></i>
            Welcome: <span>{user.name}</span>
          </p>
        )}
      </div>
    </>
  );
}
