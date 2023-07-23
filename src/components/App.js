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

function App() {
  const [amount, setAmount] = useState([]);
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/flight"
          element={
            <Flight
              amount={amount}
              setAmount={setAmount}
              isShown={isShown}
              setIsShown={setIsShown}
            />
          }
        />
        <Route
          path="/hotel"
          element={
            <Hotel
              amount={amount}
              setAmount={setAmount}
              isShown={isShown}
              setIsShown={setIsShown}
            />
          }
        />
        <Route
          path="/train"
          element={
            <Train
              amount={amount}
              setAmount={setAmount}
              isShown={isShown}
              setIsShown={setIsShown}
            />
          }
        />
        <Route path="/checkout" element={<Checkout amount={amount} />} />
        <Route
          path="/payment"
          element={<Payment amount={amount} setAmount={setAmount} />}
        />
      </Routes>
    </div>
  );
}

export default App;
