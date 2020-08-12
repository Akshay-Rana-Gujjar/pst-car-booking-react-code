import React from 'react';
import audi from '../images/audi.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faRupeeSign, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export default function BestService() {
    return (
        <section className="bg-white p-4 p-sm-5">

            <div className="row">
                <div className="col-md-6" data-aos="fade-left">
                    <img src={audi} alt="" srcSet="" className="img-fluid" />
                </div>

                <div className="col-md-6" data-aos="fade-right">
                    <p className="small text-secondary">Best Service</p>
                    <h3 className="underline">Feel the Best Experience with Our Car Booking Service</h3>

                    <div className="row mt-4">
                        <div className="col-md-2 d-flex justify-content-center">
                            <div className="align-items-center d-flex icon-thumb-style justify-content-center p-2 rounded">

                                <i className="fas fa-tag text-main " style={{ fontSize: "20px" }}>

                                    <FontAwesomeIcon icon={faTag} />
                                </i>
                            </div>
                        </div>
                        <div className="col-md-10 mt-3 mt-md-0">
                            <h4>Deals For Every Budget</h4>
                            <small>Incredible Price on luxury cars all over India.</small>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-2 d-flex justify-content-center">
                            <div className="align-items-center d-flex icon-thumb-style justify-content-center p-2 rounded">

                                <i className="fas fa-rupee-sign text-main " style={{ fontSize: "20px" }}>
                                <FontAwesomeIcon icon={faRupeeSign}/>
                                </i>
                            </div>
                        </div>
                        <div className="col-md-10 mt-3 mt-md-0">
                            <h4>Best Price Guaranteed</h4>
                            <small>Find a low price? We'll refund you 100% of the difference.</small>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-2 d-flex justify-content-center">
                            <div className="align-items-center d-flex icon-thumb-style justify-content-center p-2 rounded">

                                <i className="fas fa-question-circle text-main " style={{ fontSize: "20px" }}>
                                <FontAwesomeIcon icon={faQuestionCircle}/>
                                </i>
                            </div>
                        </div>
                        <div className="col-md-10 mt-3 mt-md-0">
                            <h4>Support 24/7</h4>
                            <small>We are here to listen you all the time.</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
