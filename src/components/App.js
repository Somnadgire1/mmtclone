import React, { useState } from "react";
import "../components/App.js";
import { Routes, Route } from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import Flight from "./Flight.js";
import Hotel from "./Hotel.js";
import Train from "./Train.js";
import Checkout from "./Checkout.js";
import Payment from "./Payment.js";
import Footer from "./Footer.js";

function App() {
  // eslint-disable-next-line no-unused-vars
const [amount, setAmount] = useState([]);

  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/flight"
          element={
            <Flight
            setSelectedService={setSelectedService}
            
            />
          }
        />
        <Route
          path="/hotel"
          element={
            <Hotel
            setSelectedService={setSelectedService}
          
            />
          }
        />
        <Route
          path="/train"
          element={
            <Train
            setSelectedService={setSelectedService}
           
            />
          }
        />
        <Route path="/checkout" element={<Checkout selectedService={selectedService} setAmount={setAmount} />} />
        <Route
          path="/payment"
          element={<Payment selectedService={selectedService}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;