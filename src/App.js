import React from 'react';

import './App.css';
import Header from './Components/Header';
import Alert from './Components/Alert';
import SanitiseSection from './Components/SanitiseSection';
import BookCar from './Components/BookCar';
import HowItWorks from './Components/HowItWorks';
import BestService from './Components/BestService';
import WhyChooseUs from './Components/WhyChooseUs';
import HaveQuery from './Components/HaveQuery';
import HappyCustomers from './Components/HappyCustomers';
import Footer from './Components/Footer';
import BookService from './Components/BookService';
import AOS from "aos";
import longTour from './images/long-tour.jpg';
import localTour from "./images/local-tour.jpg";
import dailyWagesDriverImage from "./images/daily-wages-driver-crop.jpg";
import permanentDriverImage from "./images/permanent-crop.jpg";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { faCar, faRedo } from "@fortawesome/free-solid-svg-icons";


function App() {
  AOS.init();

  let bookYourCarArray = [{
    img: longTour,
    alt: "car group png",
    heading: "Book Car for Long Tour",
    subheading: "Book Car for either long trip or outstation tour. We covered all the requirement of yours.",
    mobileNumber: "+916390704550"
  },
  {
    img: localTour,
    alt: "car group png",
    heading: "Book Car for Local Tour",
    subheading: "Planning to go near city or near by? Just call us and we have all the facility.",
    mobileNumber: "+918604742501"
  }];

  let bookDriversArray = [{
    img: dailyWagesDriverImage,
    alt: "car group png",
    heading: "Book Driver on Daily Wages",
    subheading: "We have the facility to book drivers on daily wages as per your convenience.",
    mobileNumber: "+916390704550"
  },
  {
    img: permanentDriverImage,
    alt: "car group png",
    heading: "Book Driver on Permanent",
    subheading: "We have the facility to book drivers on permanent basis as per your convenience.",
    mobileNumber: "+918604742501"
  }];

  let howItWorksCardArray = [{
    icon: faCreditCard,
    title: "Book & Pay",
    content: "Pick your favourite car, time and place"

  }, {
    icon: faCar,
    title: "Receive",
    content: "We will deliver the car to your doorstep"

  }, {
    icon: faCreditCard,
    title: "Drive",
    content: "Enjoy your PST Car Service"

  }, {
    icon: faRedo,
    title: "Return",
    content: "Get the car back to your preferred return location"

  },
  ];

  return (
    <div className="App">
      <Alert strongText="Attention!" alert="This Car Booking Service Only Available for Lakhimpur (Uttar Pardesh) Citizens." buttonText="Okay" />
      <Header />
      <SanitiseSection />
      <BookCar />
      <BookService mainHeading={"Book Your Car"} contentArray={bookYourCarArray} />
      <BookService mainHeading={"Book Drivers"} contentArray={bookDriversArray} bgColor={null} />
      <HowItWorks cardArray={howItWorksCardArray} />
      <BestService />
      <WhyChooseUs />
      <HaveQuery />
      <HappyCustomers />
      <Footer />

    </div>
  );
}

export default App;
