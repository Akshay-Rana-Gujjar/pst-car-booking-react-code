import React from 'react';
import carGroup from "../images/car-group.png";

export default function BookCar() {
    return (
        <section className="container1">
            <div className="container">
                <div className="align-items-center d-flex justify-content-around row">
                    <div className="col-md-6 order-md-2" data-aos="fade-left">
                        <img src={carGroup} alt="car group png" className="img-fluid" />
                    </div>
                    <div className="col-md-6  order-md-1" data-aos="fade-right">
                        <h2 className="font-weight-bold">
                            Get Luxury Car on Rent
                    </h2>
                        <div className="small">
                            Cheapest Price Guaranteed
                    </div>
                        <div className="text-center text-md-left">
                            <a href="tel:+918604742501" className=" text-uppercase btn btn-main px-5 py-3 shadow-lg my-5">Book a
                            car
                            now</a>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
