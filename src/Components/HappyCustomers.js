import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmileBeam, faMapMarkedAlt, faTachometerAlt, faStar } from "@fortawesome/free-solid-svg-icons";

export default function HappyCustomers() {
    return (
        <section>

            <div className="container p-5">
                <div className="row">
                    <div className="col-sm-3 text-center mb-5">
                        <div>
                            <i className="fas fa-smile-beam text-main h11 display-4">
                            <FontAwesomeIcon icon={faSmileBeam}/>
                            </i>
                        </div>
                        <div className="h5 font-weight-bold mt-3 mb-0">
                            1000+
                        </div>
                        <div className=" text-muted small">Happy Customers</div>


                    </div>
                    <div className="col-sm-3 text-center mb-5">
                        <div>
                            <i className="fas fa-map-marker-alt text-main h11 display-4">
                            <FontAwesomeIcon icon={faMapMarkedAlt}/>
                            </i>
                        </div>
                        <div className="h5 font-weight-bold mt-3 mb-0">
                            22+ Cities
                        </div>
                        <div className=" text-muted small">Across India</div>

                    </div>
                    <div className="col-sm-3 text-center mb-5">
                        <div>
                            <i className="fas fa-tachometer-alt text-main h11 display-4">
                                <FontAwesomeIcon icon={faTachometerAlt}/>
                            </i>
                        </div>
                        <div className="h5 font-weight-bold mt-3 mb-0">
                            550,000+
                        </div>
                        <div className=" text-muted small">KMs Covered</div>

                    </div>
                    <div className="col-sm-3 text-center mb-5">
                        <div>
                            <i className="fas fa-star text-main h11 display-4">
                                <FontAwesomeIcon icon={faStar}/>
                            </i>
                        </div>
                        <div className="h5 font-weight-bold mt-3 mb-0">
                            4.8/5
                        </div>
                        <div className=" text-muted small">800+ Reviews</div>
                    </div>

                </div>
            </div>

        </section>
    )
}
