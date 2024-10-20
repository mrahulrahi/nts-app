'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import './Footer.css'
import { FaFacebookF, FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
    const links = [
        { 'path': '/', 'label': 'Home' },
        { 'path': '/about', 'label': 'About' },
        { 'path': '/tour-travels', 'label': 'Blog' },
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
                                <div className="footer-title">IMAGINE GROUP</div>
                                <ul className="social-links d-flex justify-content-center">
                                    <li><a href="https://facebook.com/imaginegindia"><FaFacebookF /></a></li>
                                    <li><a href="https://twitter.com/imaginegroupig"><FaXTwitter /></a></li>
                                    <li><a href="https://instagram.com/imaginegroupig"><FaInstagram /></a></li>
                                    <li><a href="https://wa.me/+918881888339"><FaWhatsapp /></a></li>
                                </ul>
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