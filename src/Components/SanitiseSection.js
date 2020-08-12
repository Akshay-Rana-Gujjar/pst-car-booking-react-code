import React from 'react';

function SanitiseSection(props) {
    return (
        <section className="container-fluid p-3 mb-2 bg-main-light text-dark sanetize-block">


            <div className="container">
                <h5 className="font-weight-bold">Sanitised cars for your safe travel</h5>
                <div className="d-flex justify-content-around small row">

                    <div className="col-md-4">
                        <li>Operational in all cities except containment zones</li>
                    </div>
                    <div className="col-md-4">
                        <li>Contactless Delivery/Pickup</li>
                    </div>
                    <div className="col-md-4">
                        <li>Delivery/Pickup times will be restricted due to Govt. guidelines on night curfew</li>
                    </div>

                </div>
            </div>

        </section>

    )
}

export default SanitiseSection;

