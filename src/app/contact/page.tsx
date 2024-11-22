import type { Metadata } from "next";
import './Contact.css'
import { FaClock } from 'react-icons/fa6';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export const metadata: Metadata = {
    title: "IG - Contact",
    description: "Get in touch",
};

const ContactPage = () => {
    return (
        <>
            <div className="contact-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mx-auto">
                            <div className="contact-head" data-aos="fade-up">
                                <h3>CONTACT</h3>
                                <h1>GET IN TOUCH</h1>
                            </div>
                            <div className="contact-body d-flex flex-wrap justify-content-between">
                                <div className="contact-body-left d-flex align-items-end" data-aos="fade-up">
                                    <form className="contact-form">
                                        <div className="row g-3">
                                            <div className="col-6">
                                                <input type="text" className="form-control" placeholder="First name" aria-label="First name" required />
                                            </div>
                                            <div className="col-6">
                                                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" required />
                                            </div>
                                            <div className="col-12">
                                                <input type="tel" className="form-control" placeholder="Phone No." aria-label="Phone No." required />
                                            </div>
                                            <div className="col-12">
                                                <input type="email" className="form-control" placeholder="Email ID" aria-label="Email ID" required />
                                            </div>
                                            <div className="col-12">
                                                <textarea className="form-control" placeholder="Message" aria-label="Message" required></textarea>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn btn-default w-100 fw-bold" id="button">Send Email</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div className="contact-body-right" data-aos="fade-up">
                                    <div className="contact-details-box">
                                        <h4>Let&apos;s talk!</h4>
                                        <div className="contact-details-row d-flex">
                                            <div className="cd-icon d-flex align-items-center justify-content-center flex-shrink-0"><FaPhoneAlt /></div>
                                            <div className="cd-text">
                                                <h5>Phone</h5>
                                                <p>+91 8881 888339</p>
                                            </div>
                                        </div>
                                        <div className="contact-details-row d-flex">
                                            <div className="cd-icon d-flex align-items-center justify-content-center flex-shrink-0"><FaEnvelope /></div>
                                            <div className="cd-text">
                                                <h5>Email</h5>
                                                <p>support@imaginegroup.com</p>
                                            </div>
                                        </div>
                                        <div className="contact-details-row d-flex">
                                            <div className="cd-icon d-flex align-items-center justify-content-center flex-shrink-0"><FaMapMarkerAlt /></div>
                                            <div className="cd-text">
                                                <h5>Address</h5>
                                                <address>
                                                    102, Om Plaza Apartment,<br />sector 19, Indira Nagar,<br />Lucknow, UP, India
                                                </address>
                                            </div>
                                        </div>
                                        <div className="contact-details-row d-flex">
                                            <div className="cd-icon d-flex align-items-center justify-content-center flex-shrink-0"><FaClock /></div>
                                            <div className="cd-text">
                                                <h5>Timing</h5>
                                                <p>10am - 6pm | Monday - Friday</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact-gmap-canvas" data-aos="fade-in">
                                <iframe width="100%" height="300" id="gmap_canvas"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.4519880543903!2d80.98884681531288!3d26.889146967576703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399959205b897b3b%3A0x385a5519bc060254!2sImagine%20group!5e0!3m2!1sen!2sin!4v1676302436631!5m2!1sen!2sin"
                                    loading="lazy" referrerPolicy="no-referrer-when-downgrade" frameBorder="0" scrolling="no" marginHeight={0}
                                    marginWidth={0}></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage