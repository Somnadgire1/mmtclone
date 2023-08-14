import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

export default function Flight({ setSelectedService }) {
  const [filterFrom, setFilterFrom] = useState("");
  const [filterTo, setFilterTo] = useState("");
  const [filterDepart, setFilterDepart] = useState("");
  const [filterReturn, setFilterReturn] = useState("");
  const [searchAPIdata, setSearchAPIdata] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights"
        );
        const json = await response.json();
        setSearchAPIdata(json);
      } catch (error) {
        console.error("Error problem in data fetch", error);
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
  const handleFilterDepart = (e) => {
    setFilterDepart(e.target.value);
  };
  const handleFilterReturn = (e) => {
    setFilterReturn(e.target.value);
  };

  const searchHandle = () => {
    const filteredData = searchAPIdata.filter((item) => {
      const fromMatch = item.from
        .toLowerCase()
        .includes(filterFrom.toLowerCase());
      const toMatch = item.to.toLowerCase().includes(filterTo.toLowerCase());
      const departMatch = item.departure.departureDate
        .toLowerCase()
        .includes(filterDepart.toLowerCase());
      const returnMatch = item.return.returnDate
        .toLowerCase()
        .includes(filterReturn.toLowerCase());

      return fromMatch && toMatch && departMatch && returnMatch;
    });
    setData(filteredData);
    // setIsShown(true); //Available ticket shown-text-line no.140
  };
  const bookFlight = (flight) => {
    setSelectedService(flight);
};

  return (
    <>
      <div className="container">
        <div className="card mt-5 p-5 bg-danger bg-opacity-25 border-2 border-dark-subtle">
          <div className="row">
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="" className="form-label fw-bold">
                  From:
                </label>
                <img
                  src="https://cdn0.iconfinder.com/data/icons/mixed-ui-icons-1/618/Untitled-5-512.png"
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
                  src="https://cdn2.iconfinder.com/data/icons/aviation-1/500/Aviation_Frog_Prince-512.png"
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
                  Departure:
                </label>
                <input
                  type="date"
                  value={filterDepart}
                  onChange={handleFilterDepart}
                  className="form-control"
                  placeholder="Choose Date"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="" className="form-label fw-bold">
                  Return:
                </label>
                <input
                  type="date"
                  value={filterReturn}
                  onChange={handleFilterReturn}
                  className="form-control"
                  placeholder="Choose Date"
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
          <div className=""> <h4>Available Tickets:</h4></div>
          {data.map((item, index) => (
            <div className="card container text-center mb-2 flightCard">
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
                  <div className="">
                    <p>Airline:</p>
                    <h5>{item.airlineName}</h5>
                  </div>
                </div>
                <div className="col">
                  <div className="card-details">
                    <p>Departure:</p>
                    <h5>{item.departure.departureDate}</h5>
                  </div>
                  <div className="card-details">
                    <p>Return:</p>
                    <h5>{item.return.returnDate}</h5>
                  </div>
                </div>
                <div className="col">
                  <div className="card-details">
                    <p>Price:</p>
                    <h5>{item.price}</h5>
                  </div>
                  <div className="card-details">
                    <p>Via:</p>
                    <h5>{item.via}</h5>
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
                      onClick={() => bookFlight(item)}
                      //   localStorage.setItem("flight-Price", item.price);
                      //   setAmount(
                      //     localStorage.getItem("flight-Price", item.price)
                      //   );
                      // }}
                      
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
