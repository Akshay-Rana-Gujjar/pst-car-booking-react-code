import React from 'react';
import logo from "../images/logo-min.png";

export default function Header() {
    return (
        <header>

            <div className="container-fluid  bg-white">
                <div className="container bg-white">


                    <nav className="navbar navbar-expand-lg navbar-light bg-white">
                        <a className="navbar-brand" href="/">
                            <img src={logo} alt="PST Car Booking"  className="img-fluid" style={{background: "burlywood"}} />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#book-car">Book Car</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#book-drivers">Book Driver</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">About us</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link " href="#how-it-works">
                                        How it works
                            </a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#faq">FAQs</a>
                                </li>
                            </ul>
                            <div className="form-inline my-2 my-lg-0 d-md-block d-none">
                                <span className="mr-3">Check Availability & Book Fast. </span>
                                <a href="tel:6390704550" className="btn btn-main-outline shadow font-weight-bold">Call Now</a>

                            </div>
                        </div>
                    </nav>

                </div>
            </div>

        </header>
    )
}
