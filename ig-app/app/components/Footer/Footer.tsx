import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-content d-flex align-items-center justify-content-between">
                            <div className="footer-title">IMAGINE GROUP</div>
                            <ul className="social-links d-flex justify-content-center">
                                <li><a href="https://facebook.com/imaginegrouplko"><FaFacebook /></a></li>
                                <li><a href="https://twitter.com/imaginegroupig"><FaTwitter /></a></li>
                                <li><a href="https://instagram.com/imaginegroupig"><FaInstagram /></a></li>
                                <li><a href="https://wa.me/+918881888339"><FaWhatsapp /></a></li>
                            </ul>
                        </div>

                        <div className="copyright pt-4">&copy;Imagine Group Created By <a href="https://mrahulrahi.github.io/mrahulrahi/" className="" target="_blank">mrahulrahi.</a>  All rights reserved </div>
                    </div>
                </div>

            </div>

        </footer>
    )
}

export default Footer