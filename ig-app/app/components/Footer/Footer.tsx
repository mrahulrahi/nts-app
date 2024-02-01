import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container-footer">
                <div className="footer-title">
                    <h1>IMAGINE GROUP</h1>
                </div>
                <ul className="social-links d-flex justify-content-center">
                    <li><a href="https://facebook.com/imaginegrouplko"><FaFacebook /></a></li>
                    <li><a href="https://twitter.com/imaginegroupig"><FaTwitter /></a></li>
                    <li><a href="https://instagram.com/imaginegroupig"><FaInstagram /></a></li>
                    <li><a href="https://wa.me/+918881888339"><FaWhatsapp /></a></li>
                </ul>
            </div>
            <p className="border">&copy;Imagine Group Created By <a href="https://mrahulrahi.github.io/mrahulrahi/" className="" target="_blank">mrahulrahi.</a>  All rights reserved </p>
        </footer>
    )
}

export default Footer