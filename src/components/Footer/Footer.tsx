'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import './Footer.css'
import { FaFacebookF, FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
    const links = [
        { 'path': '/', 'label': 'Home' },
        { 'path': '/about', 'label': 'About' },
        { 'path': '/car', 'label': 'Car' },
        { 'path': '/tour', 'label': 'Tour' },
        { 'path': '/contact', 'label': 'Contact' },
    ]

    const currentPath = usePathname();
    // Check if the current path is '/login' or '/signup'
    const isAuthPage = currentPath === '/login' || currentPath === '/signup';

    return (<>
        {!isAuthPage && (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-content d-flex flex-column flex-sm-row align-items-center justify-content-between">
                                <div className="footer-content-left">
                                    <div className="footer-title">NTS</div>
                                    <p>NTS is your one-stop solution for car rentals and exciting tour packages. Explore the world with us!</p>
                                </div>

                                <div className="footer-content-right">
                                    <h6 className="fw-bold text-uppercase mb-2">Contact Us</h6>
                                    <ul className="d-flex flex-column gap-1 mb-2">
                                        <li><p>123 Travel Street, Cityville, Country</p></li>
                                        <li><p> Phone: <a href="">+1 234 567 890</a></p></li>
                                        <li><p>Email: <a href="">info@travelwheels.com</a></p></li>
                                    </ul>

                                    <ul className="social-links d-flex">
                                        <li><a href="https://facebook.com/imaginegindia"><FaFacebookF /></a></li>
                                        <li><a href="https://twitter.com/imaginegroupig"><FaXTwitter /></a></li>
                                        <li><a href="https://instagram.com/imaginegroupig"><FaInstagram /></a></li>
                                        <li><a href="https://wa.me/+918881888339"><FaWhatsapp /></a></li>
                                    </ul>
                                </div>

                            </div>

                            <div className="footer-nav">
                                <div className="footer-nav-list d-flex flex-wrap align-items-center justify-content-sm-between">
                                    {links.map(link => <span key={link.path} className="footer-nav-item"><Link href={link.path}>{link.label}</Link></span>)}
                                </div>
                            </div>

                            <div className="footer-copyright-row d-flex flex-column flex-sm-row align-items-center justify-content-md-between">
                                <div className="copyright">&copy;2024 Imagine Group. All rights reserved.</div>
                                <div className="made-by">Made with ❤️ by <a href="https://mrahulrahi.github.io/mrahulrahi/" target="_blank">mrahulrahi.</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )}
    </>
    )
}

export default Footer