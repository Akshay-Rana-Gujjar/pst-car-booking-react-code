import React from 'react';
import bg from '../images/bg-5.png';


export default function WhyChooseUs() {
    return (
        <section className="bg-white">
            <div className="py-5" style={{backgroundImage: `url(${bg})`}}></div>
            <div className="" style={{backgroundColor: "#e6f8f9"}}>



                <div className="container">

                    <h2>Why PST Car Booking?</h2>
                    <div className="row">
                        <div className="col-sm-4" data-aos="zoom-in-down">
                            <div className="mb-3 p-5 shadow transition why-container rounded">
                                <div className="h5"> 100% Delivery & Pickup <i className="fa fa-chevron-circle-down"></i></div>

                                <div className="hidden-why transition small">For every booking, every car model. With
                                industry
                                leading on-time performance. We love to make things easy for you!</div>
                            </div>

                        </div>
                        <div className="col-sm-4" data-aos="zoom-in-down">
                            <div className="mb-3 p-5 shadow transition why-container rounded">
                                <div className="h5"> No Limits <i className="fa fa-chevron-circle-down"></i></div>
                                <div className="hidden-why transition small">Drive as much as you want with unlimited kms.
                                Just
                                like your own car!</div>
                            </div>

                        </div>
                        <div className="col-sm-4" data-aos="zoom-in-down">
                            <div className="mb-3 p-5 shadow transition why-container rounded">
                                <div className="h5">New Fleet <i className="fa fa-chevron-circle-down"></i></div>
                                <div className="hidden-why transition small">Our fleet addition process ensures that
                                majority of
                                our cars are only a few months old at any time. Say goodbye to bad cars!</div>
                            </div>

                        </div>
                        <div className="col-sm-4" data-aos="zoom-in-down">
                            <div className="mb-3 p-5 shadow transition why-container rounded">
                                <div className="h5">0 Hidden Charges <i className="fa fa-chevron-circle-down"></i></div>
                                <div className="hidden-why transition small">Our tariffs include taxes & insurance. And
                                since
                                our tariffs do NOT include fuel, it means you pay for only as much fuel as you use!
                            </div>
                            </div>

                        </div>
                        <div className="col-sm-4" data-aos="zoom-in-down">
                            <div className="mb-3 p-5 shadow transition why-container rounded">
                                <div className="h5">Limited Liability <i className="fa fa-chevron-circle-down"></i></div>
                                <div className="hidden-why transition small">Enjoy complete peace of mind with your
                                liability
                                limited to Rs. 10000. In case of any unfortunate incident, our insurance cover will
                                take
                                care of the rest!</div>
                            </div>

                        </div>
                        <div className="col-sm-4" data-aos="zoom-in-down">
                            <div className="mb-3 p-5 shadow transition why-container rounded">
                                <div className="h5">Booking in 2 Minutes <i className="fa fa-chevron-circle-down"></i></div>
                                <div className="hidden-why transition small">No hassle of uploading your driving license and
                                waiting for its approval. Easy enough!</div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="py-5" style={{backgroundImage: `url(${bg})`, transform: "rotate(180deg)"}}></div>

        </section>
    )
}
