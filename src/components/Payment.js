import React from "react";
import "../styles/App.css";

function Payment({ amount, setAmount }) {
  return (
    <div className="container">
      <div className="col-12 mt-5">
        <div className="card p-3">
          <p className="mb-0 mx-2 fw-bold h4">Payment Methods</p>
        </div>
      </div>
      <div className="col-12">
        <div className="card p-3">
          <div className="card-body border p-0">
            <p className="p-2 w-100 h-100 d-flex align-items-center justify-content-between">
              <span className="fw-bold text-warning">Debit Card / Credit Card:</span>
            </p>
            <div className="collapse show p-3 pt-0">
              <div className="row">
                <div className="col-lg-5 mb-lg-0 mb-3">
                  <p className="h4 mb-1">Summary</p>
                  {/* <p className="mb-1"><span className="fw-bold">Traveling Details:</span><span className="c-green"> x to y</span>
                                    </p> */}
                  <p className="mb-1">
                    <span className="fw-bold">Price:</span>
                    <span className="c-green mx-2">
                      {parseInt(amount) + (amount / 100) * 18}{" "}
                      <span className="mx-2">Rupees only.</span>
                    </span>
                  </p>
                  <p className="mb-1 mt-2">
                    Welcome We have added you to our mailing list. You will be
                    among the first people to get all of our special offers,
                    newest updates, and announcements. As an added bonus, click
                    on the button below or use code [FLYMON] to get a [12%]
                    discount off your next purchase. THANK YOU!
                  </p>
                </div>
                <div className="col-lg-7">
                  <form action="" className="form">
                    <div className="row">
                      <div className="col-12">
                        <div className="form__div">
                          <input
                            type="text"
                            className="form-control"
                            placeholder=" "
                          />
                          <label for="" className="form__label">
                            Card Number
                          </label>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form__div">
                          <input
                            type="text"
                            className="form-control"
                            placeholder=" "
                          />
                          <label for="" className="form__label">
                            MM / yy
                          </label>
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form__div">
                          <input
                            type="password"
                            className="form-control"
                            placeholder=" "
                          />
                          <label for="" className="form__label">
                            cvv code
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form__div">
                          <input
                            type="text"
                            className="form-control"
                            placeholder=" "
                          />
                          <label for="" className="form__label">
                            name on the card
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="btn btn-primary w-100">Sumbit</div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="btn btn-danger w-100 fw-bold">Make Payment</div>
      </div>
    </div>
  );
}

export default Payment;
