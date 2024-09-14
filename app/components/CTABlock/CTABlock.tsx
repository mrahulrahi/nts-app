import React from 'react'
import './CTABlock.css'

const CTABlock = () => {
    return (
        <div className="content-container full-width-cta-container bg-pattern-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bg-dark-grey p-5 rounded-5">
                            <div className="row">
                                <div className="col-lg-8 mx-auto">
                                    <div className="heading d-flex flex-column">
                                        <h3>Book on Call / Whatsapp</h3>
                                        <p className="mt-4">Discover seamless travel with our tour and travel services, offering a range of comfortable vehicles to suit your journey. Whether it &apos s a local rental, airport transfer, or an outstation trip, we provide reliable and affordable solutions for all your travel needs. Book now and experience a hassle-free ride with professional drivers and 24/7 support!</p>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="row justify-content-lg-center fw-cta-list">
                                        <div className="col-lg-4 fw-cta-item">
                                            <div className="full-width-cta-box w-100 h-100 d-flex">
                                                <div className="full-width-cta-icon has-img-contain d-none d-md-block"><img
                                                    src="/images/cta-icon-1.svg" alt="" /></div>
                                                <div className="full-width-cta-content d-flex flex-column flex-grow-1">
                                                    <div className="fwc-icon-label d-flex align-items-center">
                                                        <div className="full-width-cta-icon has-img-contain d-md-none"><img
                                                            src="/images/cta-icon-1.svg" alt="" /></div>
                                                        <h3>Book on call</h3>
                                                    </div>
                                                    <p>Our advisors are just a phone call away. On average, we answer calls <strong>within 90
                                                        seconds.</strong> Lines open 24/7.</p>

                                                    <div className="full-width-cta-link mt-auto d-none d-lg-block">Call: 
                                                        <a href="#!" className="ms-2"> +91 8881 888339</a>
                                                    </div>

                                                    <a href="#!" className="btn btn-default mt-auto d-lg-none">+91 8881 888339</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 fw-cta-item">
                                            <div className="full-width-cta-box w-100 h-100 d-flex">
                                                <div className="full-width-cta-icon has-img-contain d-none d-md-block"><img
                                                    src="/images/cta-icon-2.svg" alt="" /></div>
                                                <div className="full-width-cta-content d-flex flex-column flex-grow-1">
                                                    <div className="fwc-icon-label d-flex align-items-center">
                                                        <div className="full-width-cta-icon has-img-contain d-md-none"><img
                                                            src="/images/cta-icon-2.svg" alt="" /></div>
                                                        <h3>Book on whatsapp</h3>
                                                    </div>
                                                    <p>Book your ride easily on WhatsApp! Just send us your details, and we &apos ll arrange your vehicle in no time. Fast, simple, and convenient – your next journey is just a message away!</p>

                                                    <a href="#!" className="btn btn-default mt-auto btn-block">Start chat
                                                        <span className="btn-icon"><i className="fa-solid fa-chevron-right"></i></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTABlock