import React from 'react';
import logo from "../images/logo-min.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="bg-dark ">
            <div className="container">

                <div className="p-3 p-md-5 row">

                    <div className="col-sm-3">
                        <img src={logo} alt="PST Car Service" srcSet="" />
                        <h5 className="font-weight-bold text-white">PST Car Booking</h5>
                        <small className="text-light">Cheapest and Best Car Rental</small>
                    </div>

                    <div className="col-sm-3">
                        <h5 className="font-weight-bold text-white mb-3">Location</h5>
                        <div className="">

                            <a className="d-block text-light mt-2" href="tel:+918604742501">Car Rent for Delhi</a>
                            <a className="d-block text-light mt-2" href="tel:+916390704550">Car Rent for Banglore</a>
                            <a className="d-block text-light mt-2" href="tel:+918604742501">Car Rent for Punjab</a>
                            <a className="d-block text-light mt-2" href="tel:+916390704550">Car Rent for Haryana</a>
                            <a className="d-block text-light mt-2" href="tel:+918604742501">Car Rent for Hyderabad</a>
                            <a className="d-block text-light mt-2" href="tel:+916390704550">Car Rent for All India</a>
                        </div>


                    </div>
                    <div className="col-sm-3">
                        <h5 className="font-weight-bold text-white">Quick Links</h5>
                        <div className="">

                            <a className="d-block text-light mt-2" href="#book-car">Book Car</a>
                            <a className="d-block text-light mt-2" href="#book-drivers">Book Driver</a>
                            <a className="d-block text-light mt-2" href="tel:+918604742501">About us</a>
                            <a className="d-block text-light mt-2" href="#how-it-works">How it works</a>
                            <a className="d-block text-light mt-2" href="tel:+916390704550">FAQs </a>
                        </div>

                    </div>
                    <div className="col-sm-3">
                        <h5 className="font-weight-bold text-white">Book Now</h5>
                        <small className="text-white">Call us now for booking.</small>
                        <a href="tel:+918604742501" className="btn btn-main-outline shadow font-weight-bold d-block mt-3">Call
                        Now</a>

                        <div className=" mt-3 text-white small">Connect with us:</div>
                        <div className="d-flex justify-content-around mt-2">

                            <span><a href="https://instagram.com/pst_car_booking"><i className="text-main h3">
                                <FontAwesomeIcon icon={faInstagram} /></i></a></span>
                            <span><a href="https://www.facebook.com/pg/Pushpendra-Singh-800138720174432/about/"><i className="text-main h3">
                                <FontAwesomeIcon icon={faFacebook} /></i></a></span>
                            <span><a href="https://www.youtube.com/channel/UC0E4qJ8Ob1b13Z6eBKzG49Q"><i className="text-main h3">
                                <FontAwesomeIcon icon={faYoutube} /></i></a></span>

                        </div>
                    </div>
                </div>



            </div>
            <div className="text-center mt-5 bg-secondary">
                <p className="text-white m-0 small">
                    Copyright &copy; 2020 | All Right Reserved | PST Car Booking
            </p>
            </div>
        </footer>
    )
}
