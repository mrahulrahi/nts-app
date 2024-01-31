import './Header.css'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa6";

const Header = () => {
    return (
        <header id="header">
            <nav className="navbar navbar-expand-xl">
                <div className="container">
                    <div className="nav-inside d-flex flex-wrap align-items-center justify-content-between">
                        <a className="navbar-brand" href="index.html"><img src="./images/logo.png" alt="logo" /></a>
                        <a className="navbar-title" href="#">IMAGINE GROUP</a>
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                     
                        <div className="header-right d-none d-xl-block">
                            <ul className="social-links d-flex justify-content-center">
                                <li><a href="https://facebook.com/imaginegrouplko"><FaFacebook /></a></li>
                                <li><a href="https://twitter.com/imaginegroupig"><FaTwitter /></a></li>
                                <li><a href="https://instagram.com/imaginegroupig"><FaInstagram /></a></li>
                                <li><a href="https://wa.me/+918881888339"><FaWhatsapp /></a></li>
                            </ul>
                        </div>

                        <div className="collapse navbar-collapse justify-content-center" id="mainNav">
                            <div className="navbar-inside">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><a className="nav-link" href="#!">Home</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#!">About us</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#!">Our Services</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#!">Available Cars</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#!">Contact Us</a></li>
                                    <li className="nav-item header-btn">
                                        <a href="tel:888-188-8339" className="btn btn-default"><FaPhone /> Call Us</a>
                                    </li>
                                </ul>
                                <div className="navbar-bottom mt-auto d-xl-none">
                                    <ul className="social-links d-flex justify-content-center">
                                        <li><a href="https://facebook.com/imaginegrouplko"><FaFacebook /></a></li>
                                        <li><a href="https://twitter.com/imaginegroupig"><FaTwitter /></a></li>
                                        <li><a href="https://instagram.com/imaginegroupig"><FaInstagram /></a></li>
                                        <li><a href="https://wa.me/+918881888339"><FaWhatsapp /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header