import React from "react";
import { Link } from "react-router-dom";

export default function Checkout({ amount, setAmount }) {
  return (
    <div>
      <div className="container">
        <div className="card w-75 h-100 m-5">
          <div className="card-header text-bg-secondary text-white text-center">
            <h1>Fare Summary</h1>
          </div>
          <div className="card-body p-2 fs-5 text-center">
            <table className="table">
              <thead>
                <tr className="table-primary p-2">
                  <th scope="col">SUMMARY</th>
                  <th scope="col">AMOUNT (INR)</th>
                </tr>
              </thead>
              <tbody className="f-4">
                <tr className="table-secondary p-2">
                  <td>Base Fare :</td>
                  <td>
                    <i>{amount}</i>
                  </td>
                </tr>
                <tr className="table-secondary p-2">
                  <td>Fee and Surcharges :</td>
                  <td>
                    <i>{(amount / 100) * 18}</i>
                  </td>
                </tr>
                <tr className="table-success p-2">
                  <td>Total Amount :</td>
                  <td>
                    <i className="text-danger fw-bold">
                      {parseInt(amount) + (amount / 100) * 18}
                    </i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* payment section */}
          <div className="container text-center">
            <p>
              <Link
                className="btn btn-primary"
                data-bs-toggle="collapse"
                to="/payment"
              >
                Click to Payment
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
