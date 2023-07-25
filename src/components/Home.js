import React from "react";
import "../styles/Home.css";
import bgImg from "../images/hero-img.jpg";

export default function Home() {
  return (
    <div className="hero-img container-fluid mt-0">
      <img className="img-fluid w-100 h-100" src={bgImg} alt="bg"></img>
      <div className="text-adjust">
        <h1 className="text-warning">
          Welcome to <span className="text-danger">Make-My-Trip</span> Clone
        </h1>
        <h3 className="mx-5 text-white">Be a Smart Traveler</h3>
      </div>
      <h3 className="mx-2 text-danger-emphasis">Traveling Destinations-</h3>

      <div className="dest img-fluid">
        <div className="gallery">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://en.wikipedia.org/wiki/Taj_Mahal"
          >
            <img
              src="https://www.tourmyindia.com/socialimg/top-india-destinations.jpg"
              alt="Taj-mahal"
              width="600"
              height="400"
            />
          </a>
          <div className="desc">
            The Taj Mahal is an ivory-white marble mausoleum on the right bank
            of the river Yamuna in Agra, Uttar Pradesh, India.
          </div>
        </div>
      </div>

      <div className="dest img-fluid">
        <div className="gallery">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://en.wikipedia.org/wiki/Konark_Sun_Temple"
          >
            <img
              src="https://th.bing.com/th/id/R.070ff14397cd2008d74e421c944e0d8c?rik=L%2f9gMLiTVgCaow&riu=http%3a%2f%2fwww.ancient-origins.net%2fsites%2fdefault%2ffiles%2ffield%2fimage%2fthe-Konark-Sun-Temple-Revealed.jpg&ehk=7ZzS1QE4000rKKxe%2f1pn%2fH9vAtmEvdmj0RhzQ7QFfAU%3d&risl=&pid=ImgRaw&r=0"
              alt="Sun temple"
              width="600"
              height="400"
            />
          </a>
          <div className="desc">
            Konark Sun Temple is a 13th-century CE (year 1250) Sun temple at
            Konark about 35 kilometres (22 mi) northeast from Puri city on the
            coastline in Puri district, Odisha, India.
          </div>
        </div>
      </div>

      <div className="dest img-fluid">
        <div className="gallery">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://en.wikipedia.org/wiki/India_Gate"
          >
            <img
              src="https://www.revv.co.in/blogs/wp-content/uploads/2019/11/self-drive-car-rental-delhi-gurgaon-noida_revv-blog.jpg"
              alt="India gate"
              width="600"
              height="400"
            />
          </a>
          <div className="desc">
            For the dead of the Indian Armies who fell during World War I and
            the Third Afghan War
          </div>
        </div>
      </div>

      <div className="dest img-fluid">
        <div className="gallery">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://en.wikipedia.org/wiki/Charminar"
          >
            <img
              src="https://i.pinimg.com/originals/7d/0c/ff/7d0cff5b6a1954b54ab4187042e6612d.jpg"
              alt="4-minar"
              width="600"
              height="400"
            />
          </a>
          <div className="desc">
            The Charminar (lit. 'four minarets') is a monument located in
            Hyderabad, Telangana, India. Constructed in 1591, the landmark is a
            symbol of Hyderabad and officially incorporated in the emblem of
            Telangana.
          </div>
        </div>
      </div>
    </div>
  );
}
