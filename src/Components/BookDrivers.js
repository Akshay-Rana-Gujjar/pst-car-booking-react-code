import React from 'react';
import dailyWagesDriverImage from "../images/daily-wages-driver-crop.jpg";
import permanentDriverImage from "../images/permanent-crop.jpg";

export default function BookDrivers() {
    return (
        <section className=" bg-white1" id="book-drivers">

            <div className="container p-4">


                <div>
                    <h2 className="font-weight-bold text-center text-dark my-5">Book Drivers</h2>
                </div>

                <div className="align-items-center d-flex justify-content-around row">

                    <div className="col-md-6" data-aos="fade-right">

                        <img src={dailyWagesDriverImage} alt="car group png" className="img-fluid rounded shadow" />

                    </div>

                    <div className="col-md-6" data-aos="fade-left">

                        <h3 className="mt-2">Book Driver on Daily Wages</h3>
                        <p>
                            We have the facility to book drivers on daily wages as per your convenience.
                        </p>

                        <a href="tel:+916390704550" className="btn btn-main-outline shadow font-weight-bold mt-3 mb-5">Contact
                Now</a>

                    </div>

                </div>
                <div className="align-items-center d-flex justify-content-around row mt-2">
                    <div className="col-md-6 order-md-2 text-center" data-aos="fade-right">
                        <img src={permanentDriverImage} alt="car group png" className="img-fluid rounded shadow" />
                    </div>
                    <div className="col-md-6" data-aos="fade-left">
                        <h3 className="mt-2">Book Driver on Permanent</h3>
                        <p>
                            We have the facility to book drivers on permanent basis as per your convenience.
                        </p>
                        <a href="tel:+918604742501" className="btn btn-main-outline shadow font-weight-bold mt-3 mb-5">Contact Now</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
