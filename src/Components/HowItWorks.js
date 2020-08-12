import React from 'react';
import bg from '../images/bg.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function HowItWorks({ cardArray }) {
    return (
        <section className="p-4 p-sm-5 " style={{ backgroundImage: `url(${bg})` }} id="how-it-works">

            <div className="container">
                <h2 className="font-weight-bold text-center text-white">How it works</h2>

                <div className="row">

                    {cardArray.map(card => (
                        <div className="col-md-3" data-aos="zoom-in-up">
                            <div className=" card p-5 shadow-lg text-center mt-3">
                                <i className="my-2 how-it-works-icon">
                                    <FontAwesomeIcon icon={card.icon} />
                                </i>

                                <p className="h5">{card.title}</p>
                                <small>
                                    {card.content}
                                </small>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
