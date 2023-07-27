import React from "react";
import "../styles/App.css";

export default function Footer() {
  return (
    <div>
      <footer className="bg-dark text-center text-white mt-auto footer">
        <div className="container-fluid p-4 pb-0">
          <section className="mb-4">
          <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/in/somnath-nadgire-570386142/"
              role="button"
            >
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://github.com/Somnadgire1"
              role="button"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://mail.google.com/mail/u/0/#inbox"
              role="button"
            >
              <i className="fa fa-google-plus" aria-hidden="true"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </section>
        </div>

        <div className="text-center p-3 bg-secondary copyright">
          © 2023 Copyright : 
          <a className="text-white mx-2" href="/">
            Somnath Nadgire
          </a>
        </div>
      </footer>
    </div>
  );
}
