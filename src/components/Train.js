import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Train({ amount, setAmount, isShown, setIsShown }) {
  const [filterFrom, setFilterFrom] = useState("");
  const [filterTo, setFilterTo] = useState("");
  const [filterTravel, setFilterTravel] = useState("");
  const [filterTrainNumber, setFilterTrainNumber] = useState("");
  const [searchAPIdata, setSearchAPIdata] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains"
        );
        const json = await response.json();
        setSearchAPIdata(json);
      } catch (error) {
        console.error("Error problem in Train data fetch", error);
      }
    };
    fetchData();
  }, []);
  //Events handler
  const handleFilterFrom = (e) => {
    setFilterFrom(e.target.value);
  };
  const handleFilterTo = (e) => {
    setFilterTo(e.target.value);
  };
  const handleFilterTravel = (e) => {
    setFilterTravel(e.target.value);
  };
  const handleFilterTrainNumber = (e) => {
    setFilterTrainNumber(e.target.value);
  };

  const searchHandle = () => {
    const filteredData = searchAPIdata.filter((item) => {
      const fromMatch = item.from
        .toLowerCase()
        .includes(filterFrom.toLowerCase());
      const toMatch = item.to.toLowerCase().includes(filterTo.toLowerCase());
      const travelMatch = item.departure.departureDate
        .toLowerCase()
        .includes(filterTravel.toLowerCase());
      const trainNumberMatch = item.train_number
        .toLowerCase()
        .includes(filterTrainNumber.toLowerCase());

      return fromMatch && toMatch && travelMatch && trainNumberMatch;
    });
    setData(filteredData);
    setIsShown(true); //Available ticket-text-line no.140
  };

  return (
    <>
      <div className="container">
        <div className="card mt-5 p-5 bg-info bg-opacity-25 border-2 border-dark-subtle">
          <div className="row">
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="" className="form-label fw-bold">
                  From:
                </label>
                <img
                  src="https://clipground.com/images/train-logo-png-3.jpg"
                  alt="plane-arrival"
                  height="30px"
                  width="35px"
                  className="mx-4 text-danger"
                ></img>
                <input
                  type="text"
                  value={filterFrom}
                  onChange={handleFilterFrom}
                  className="form-control"
                  placeholder="Enter City"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="" className="form-label fw-bold">
                  To:
                </label>
                <img
                  src="https://icon-library.com/images/train-icon-png/train-icon-png-29.jpg"
                  alt="plane-arrival"
                  height="30px"
                  width="35px"
                  className="mx-4 text-danger"
                ></img>
                <input
                  type="text"
                  value={filterTo}
                  onChange={handleFilterTo}
                  className="form-control"
                  placeholder="Enter City"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="" className="form-label fw-bold">
                  Travel Date:
                </label>
                <input
                  type="date"
                  value={filterTravel}
                  onChange={handleFilterTravel}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="" className="form-label fw-bold">
                  Train No.:
                </label>
                <input
                  type="text"
                  value={filterTrainNumber}
                  onChange={handleFilterTrainNumber}
                  className="form-control"
                  placeholder="Enter Train No."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <button
            type="button"
            className="btn btn-success fw-bold"
            onClick={searchHandle}
          >
            Search
          </button>
        </div>
      </div>
      <hr />
      <div className="px-3">
        <div className="text-center">
          <div className="">{isShown && <h4>Available Tickets:</h4>}</div>
          {data.map((item, index) => (
            <div className="card container text-center mb-2 trainCard">
              <div className="row align-items-start card-body" key={index}>
                <div className="col">
                  <div className="">
                    <p>From:</p>
                    <h5>{item.from}</h5>
                  </div>
                  <div className="">
                    <p>To:</p>
                    <h5>{item.to}</h5>
                  </div>
                </div>
                <div className="col">
                  <div className="card-details">
                    <p>Departure:</p>
                    <h5>
                      {item.departure.departureDate} |{" "}
                      {item.departure.departureTime}
                    </h5>
                  </div>
                  <div className="card-details">
                    <p>Train Number:</p>
                    <h5>{item.train_number}</h5>
                  </div>
                </div>
                <div className="col">
                  <div className="card-details">
                    <p>Price:</p>
                    <h5>{item.price}</h5>
                  </div>
                  <div className="card-details">
                    <p>Kilometer:</p>
                    <h5>{item.kilometers}</h5>
                  </div>
                  <div className="card-details">
                    <p>Duration:</p>
                    <h5>{item.duration}</h5>
                  </div>
                </div>
                <Link to="/checkout">
                  <div className="checkoutBtn">
                    <button
                      type="button"
                      className="btn btn-outline-info btn-sm ticketBook fw-bold"
                      onClick={() => {
                        localStorage.setItem("train-Price", item.price);
                        setAmount(
                          localStorage.getItem("train-Price", item.price)
                        );
                      }}
                    >
                      Book
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
