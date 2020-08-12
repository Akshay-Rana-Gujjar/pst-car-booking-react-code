import React from 'react';
import longTour from '../images/long-tour.jpg';
import localTour from "../images/local-tour.jpg";

export default function BookYourCar() {
    return (
        <section className=" bg-white" id="book-car">

            <div className="container p-4">
                <h2 className="font-weight-bold text-center text-dark">Book Your Car</h2>

                <div className="align-items-center d-flex justify-content-around row">
                    <div className="col-md-6" data-aos="fade-right">

                        <img src={longTour} alt="car group png" className="img-fluid rounded shadow" />

                    </div>

                    <div className="col-md-6" data-aos="fade-left">

                        <h3 className="mt-2">Book Car for Long Tour</h3>
                        <p>
                            Book Car for either long trip or outstation tour. We covered all the requirement of yours.
            </p>

                        <a href="tel:+916390704550" className="btn btn-main-outline shadow font-weight-bold mt-3 mb-5">Contact
                Now</a>

                    </div>
                </div>

                <div className="align-items-center d-flex justify-content-around row mt-2">

                    <div className="col-md-6 order-md-2 text-center" data-aos="fade-right">

                        <img src={localTour} alt="car group png" className="img-fluid rounded shadow" />

                    </div>

                    <div className="col-md-6" data-aos="fade-left">

                        <h3 className="mt-2">Book Car for Local Tour</h3>
                        <p>
                            Planning to go near city or near by? Just call us and we have all the facility.
            </p>

                        <a href="tel:+918604742501" className="btn btn-main-outline shadow font-weight-bold mt-3 mb-5">Contact
                Now</a>

                    </div>

                </div>

            </div>
        </section>

    )
}
