import React from 'react'

export default function BookService({ mainHeading, contentArray, bgColor = "bg-white" }) {



    return (
        <section className={bgColor} id="book-car">

            <div className="container p-4">
                <h2 className="font-weight-bold text-center text-dark">{mainHeading}</h2>

                {contentArray.map((content, index) => (
                    <div className={`align-items-center d-flex justify-content-around row ${(index + 1) % 2 === 0 ? "mt-2" : ""}`}>
                        <div className={`col-md-6 ${(index + 1) % 2 === 0 ? "order-md-2 text-center" : ""}`} data-aos="fade-right">

                            <img src={content.img} alt={content.alt ? content.alt : "car group image"} className="img-fluid rounded shadow" />

                        </div>

                        <div className="col-md-6" data-aos="fade-left">

                            <h3 className="mt-2">{content.heading}</h3>
                            <p>
                                {content.subheading}
                            </p>

                            <a href={`tel:${content.mobileNumber}`} className="btn btn-main-outline shadow font-weight-bold mt-3 mb-5">Contact
                            Now
                        </a>

                        </div>
                    </div>

                ))}
            </div>
        </section>

    )
}
