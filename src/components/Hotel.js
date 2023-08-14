import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Hotel({ setSelectedService }) {
  const [filterCity, setFilterCity] = useState("");
  const [filterCheckIn, setFilterCheckIn] = useState("");
  const [filterCheckOut, setFilterCheckOut] = useState("");
  const [filterGuests, setFilterGuests] = useState("");
  const [searchAPIdata, setSearchAPIdata] = useState([]);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels"
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
  const handleFilterCity = (e) => {
    setFilterCity(e.target.value);
  };
  const handleFilterCheckIn = (e) => {
    setFilterCheckIn(e.target.value);
  };
  const handleFilterCheckOut = (e) => {
    setFilterCheckOut(e.target.value);
  };
  const handleFilterGuests = (e) => {
    setFilterGuests(e.target.value);
  };

  const searchHandle = () => {
    const filteredData = searchAPIdata.filter((item) => {
      const cityMatch = item.city
        .toLowerCase()
        .includes(filterCity.toLowerCase());
      const checkInMatch = item.check_in
        .toLowerCase()
        .includes(filterCheckIn.toLowerCase());
      const checkOutMatch = item.check_out
        .toLowerCase()
        .includes(filterCheckOut.toLowerCase());
      const guestMatch = item.guests
        .toLowerCase()
        .includes(filterGuests.toLowerCase());

      return cityMatch && checkInMatch && checkOutMatch && guestMatch;
    });
    setData(filteredData);
  };
  const bookHotel = (hotel) => {
    setSelectedService(hotel);
};
  return (
    <>
      <div className="container">
        <div className="card mt-5 p-5 bg-warning bg-opacity-25 border-2 border-dark-subtle">
          <div className="row">
            <div className="col-md-2">
              <div className="mb-3">
                <label htmlFor="" className="form-label fw-bold">
                  Room Type:
                </label>
                <img
                  src="https://thumb.silhouette-ac.com/t/67/67922a74f3204a08e46598c6c47f4751_t.jpeg"
                  alt="plane-arrival"
                  height="22px"
                  width="28px"
                  className="mx-2"
                ></img>
                <select className="form-select">
                  <option value={1}>Single</option>
                  <option value={2}>Double</option>
                  <option value={3}>King</option>
                </select>
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="" className="form-label fw-bold">
                  City/Location:
                </label>
                <img
                  src="https://www.pinclipart.com/picdir/middle/579-5790258_location-logo-png-hd-images-location-logo-png.png"
                  alt="plane-arrival"
                  height="22px"
                  width="28px"
                  className="mx-4 text-danger"
                ></img>
                <input
                  type="text"
                  value={filterCity}
                  onChange={handleFilterCity}
                  className="form-control"
                  placeholder="Enter City"
                />
              </div>
            </div>
            <div className="col-md-2">
              <div className="mb-3">
                <label htmlFor="" className="form-label fw-bold">
                  Check-In:
                </label>
                <img
                  src="https://icon-library.com/images/checkin-icon/checkin-icon-7.jpg"
                  alt="plane-arrival"
                  height="22px"
                  width="28px"
                  className="mx-2 text-danger"
                ></img>
                <input
                  type="date"
                  value={filterCheckIn}
                  onChange={handleFilterCheckIn}
                  className="form-control"
                  placeholder="Enter City"
                />
              </div>
            </div>
            <div className="col-md-2">
              <div className="mb-3">
                <label htmlFor="" className="form-label fw-bold">
                  Check-Out:
                </label>
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/checkout-35-501661.png"
                  alt="plane-arrival"
                  height="22px"
                  width="28px"
                  className="mx-2 text-danger"
                ></img>
                <input
                  type="date"
                  value={filterCheckOut}
                  onChange={handleFilterCheckOut}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="mb-3">
                <label htmlFor="" className="form-label fw-bold">
                  Guests:
                </label>
                <i className="fa fa-users h-25 w-25 mx-4" aria-hidden="true"></i>
                <input
                  type="text"
                  value={filterGuests}
                  onChange={handleFilterGuests}
                  className="form-control"
                  placeholder="Enter No. of Guests"
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
      <div className="alert alert-info" role="alert">
   Click on "Book" to reserve your room!
</div>
        <div className="text-center">
          <div className=""><h4>Available Tickets:</h4></div>
          {data.map((item, index) => (
            <div className="card container text-center mb-2 hotelCard">
              <div className="row align-items-start card-body" key={index}>
                <div className="col">
                  <div className="">
                    <p>Hotel:</p>
                    <h5>{item.hotel_name}</h5>
                  </div>
                  <div className="">
                    <p>City:</p>
                    <h5>{item.city}</h5>
                  </div>
                  <div className="">
                    <p>Rating:</p>
                    <h5>{item.rating}</h5>
                  </div>
                </div>
                <div className="col">
                  <div className="card-details">
                    <p>Check-IN:</p>
                    <h5>{item.check_in}</h5>
                  </div>
                  <div className="card-details">
                    <p>Check-OUT:</p>
                    <h5>{item.check_out}</h5>
                  </div>
                </div>
                <div className="col">
                  <div className="card-details">
                    <p>Price_per_Night:</p>
                    <h5>{item.price_per_night}</h5>
                  </div>
                  <div className="card-details">
                    <p>Room_Type:</p>
                    <h5>{item.room_type}</h5>
                  </div>
                  <div className="card-details">
                    <p>Guests:</p>
                    <h5>{item.guests}</h5>
                  </div>
                </div>
                <Link to="/checkout">
                  <div className="checkoutBtn">
                    <button
                      type="button"
                      className="btn btn-outline-info btn-sm ticketBook fw-bold"
                      onClick={() => bookHotel(item)}
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
