import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-dark text-center text-white mt-5 footer">
        <div className="container-fluid p-4 pb-0">
          <section className="mb-4">
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
              href="#!"
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

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </section>
        </div>

        <div className="text-center p-3 bg-secondary">
          © 2023 Copyright:
          <a className="text-white" href="/">
            Somnath Nadgire
          </a>
        </div>
      </footer>
    </div>
  );
}
