'use client';
import Link from 'next/link';
import './Header.css';
import React, { useState, useEffect, useRef } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Header = () => {
    const [scrollClass, setScrollClass] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const scrollThreshold = 10;

        if (scrollY > scrollThreshold) {
            document.body.classList.add('fixed');
        } else {
            document.body.classList.remove('fixed');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('menu-open', 'overflow-hidden');
        } else {
            document.body.classList.remove('menu-open', 'overflow-hidden');
        }
    }, [isOpen]);

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    return (
        <header id="header">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="nav-inside d-flex flex-wrap align-items-center justify-content-between">
                        <Link className="navbar-brand" href="/"><img src="images/logo.png" alt="logo" /></Link>
                        <Link className="navbar-title" href="/">IMAGINE GROUP</Link>
                        <button className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse"
                            data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded={isOpen}
                            aria-label="Toggle navigation" onClick={handleButtonClick}>
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="header-right d-none d-lg-block">
                            <ul className="social-links d-flex justify-content-center">
                                <li><Link href="https://facebook.com/imaginegindia" onClick={handleLinkClick}><FaFacebookF /></Link></li>
                                <li><Link href="https://twitter.com/imaginegroupig" onClick={handleLinkClick}><FaTwitter /></Link></li>
                                <li><Link href="https://instagram.com/imaginegroupig" onClick={handleLinkClick}><FaInstagram /></Link></li>
                                <li><Link href="https://wa.me/+918881888339" onClick={handleLinkClick}><FaWhatsapp /></Link></li>
                            </ul>
                        </div>

                        <div className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`} id="mainNav" ref={navbarRef}>
                            <div className="navbar-inside">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><Link className="nav-link" href="/" onClick={handleLinkClick}>Home</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="/about" onClick={handleLinkClick}>About</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="/tour-travels" onClick={handleLinkClick}>Tour & Travels</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="/properties" onClick={handleLinkClick}>Properties</Link></li>
                                    <li className="nav-item"><Link className="nav-link" href="/contact" onClick={handleLinkClick}>Contact</Link></li>
                                    <li className="header-btn d-flex align-items-center">
                                        <Link href="/login" className="btn btn-default" onClick={handleLinkClick}>Login</Link>
                                    </li>
                                </ul>
                                <div className="navbar-bottom mt-auto d-lg-none">
                                    <ul className="social-links d-flex justify-content-center">
                                        <li><Link href="https://facebook.com/imaginegindia" onClick={handleLinkClick}><FaFacebookF /></Link></li>
                                        <li><Link href="https://twitter.com/imaginegroupig" onClick={handleLinkClick}><FaTwitter /></Link></li>
                                        <li><Link href="https://instagram.com/imaginegroupig" onClick={handleLinkClick}><FaInstagram /></Link></li>
                                        <li><Link href="https://wa.me/+918881888339" onClick={handleLinkClick}><FaWhatsapp /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
