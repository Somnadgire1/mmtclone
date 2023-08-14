import React, { useState, useRef } from "react";
import { jsPDF } from 'jspdf';
import "../styles/App.css";

function Payment({ selectedService }) {
  const [ticket, setTicket] = useState(null);
  const formRef = useRef(null);

  // const amount = selectedService ? selectedService.price : 0;
  const amount = (selectedService && selectedService.price) ? selectedService.price : 0;

  const calculatedAmount = parseInt(amount) + (amount / 100) * 18;
//   console.log("Amount:", amount);
// console.log("Calculated Amount:", calculatedAmount);
// console.log(selectedService);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted. Integrate with payment gateway.");

    // Simulated payment processing
    setTimeout(() => {
      // Assuming payment is successful, generate a simulated ticket
      const generatedTicket = {
        id: Math.floor(Math.random() * 1000000),
        amountPaid: parseInt(amount) + (amount / 100) * 18,
        date: new Date().toLocaleString(),
        userName: formRef.current['nameOnCard'].value,
  journeyDetails: selectedService ? `${selectedService.from} to ${selectedService.to} via ${selectedService.airlineName}` : 'N/A',
  journeyDate: selectedService ? selectedService.departure.departureDate : 'N/A',
  journeyTime: selectedService ? selectedService.departure.departureTime : 'N/A'
      };

      setTicket(generatedTicket);
     // Reset the form
      if (formRef.current) {
        formRef.current.reset();  // Reset the form here
      }

    }, 1000);
  };
  const downloadTicket = () => {
    const doc = new jsPDF();

    // Set the title
    doc.setFontSize(22);
    doc.text('Ticket Details', 50, 10);

    // Add ticket details
    doc.setFontSize(14);
    doc.text(`User: ${ticket.userName}`, 10, 30);
    doc.text(`Ticket ID: ${ticket.id}`, 10, 40);
    doc.text(`Journey: ${ticket.journeyDetails}`, 10, 50);
    doc.text(`Date: ${ticket.journeyDate}`, 10, 60);
    doc.text(`Time: ${ticket.journeyTime}`, 10, 70);
    doc.text(`Amount Paid: ${ticket.amountPaid} Rupees`, 10, 80);
    doc.text('Ticket Status : Successfully Booked...', 10, 90);
    // Save the PDF
    doc.save(`Ticket ${ticket.id}.pdf`);
  };
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
               
                  <p className="mb-1">
                    <span className="fw-bold">Price:</span>
                    <span className="c-green mx-2">
                      <span className="mx-2">{calculatedAmount} Rupees only.</span>
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
                  <form action="" onSubmit={handleSubmit} ref={formRef} className="form">
                    <div className="row">
                      <div className="col-12">
                        <div className="form__div">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Card Number" required
                          />
                         
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form__div">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="MM / YY" required
                          />
                        
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form__div">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="cvv code" required
                          />
                          
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form__div">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name on the card"
                            name="nameOnCard" required
                          />
                          
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100">Make Payment</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {ticket && (
         <div className="col-12 mt-4 mb-4">
         <div className="card border-primary shadow">
           <div className="card-header bg-danger text-white fw-bolder text-center">
             Ticket Details
           </div>
           <div className="card-body">
           <p className="text-muted mb-4">
          Follow the instructions below to ensure a smooth journey. Keep your ticket handy for verification purposes.
        </p>
             <div className="row mb-2">
               <div className="col-md-6">
                 <strong>User:</strong> {ticket.userName}
               </div>
               <div className="col-md-6">
                 <strong>Ticket ID:</strong> {ticket.id}
               </div>
             </div>
             <div className="row mb-2">
               <div className="col-md-6">
                 <strong>Journey:</strong> {ticket.journeyDetails}
               </div>
               <div className="col-md-6">
                 <strong>Date:</strong> {ticket.journeyDate}
               </div>
             </div>
             <div className="row mb-2">
               <div className="col-md-6">
                 <strong>Time:</strong> {ticket.journeyTime}
               </div>
               <div className="col-md-6">
                 <strong>Amount Paid:</strong> {ticket.amountPaid} Rupees
               </div>
             </div>
             <div className="col-md-6 text-muted">
                 <p>Booking Successful....</p>
               </div>
           </div>
           <div className="card-footer text-muted text-center">
             Purchase Date: {ticket.date}
             <button className="btn btn-outline-success ms-4" onClick={downloadTicket}>
              Download Ticket
            </button>
           </div>
         </div>
       </div>
      )}
    </div>
  );
}

export default Payment;