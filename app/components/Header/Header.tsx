'use client'
import './Header.css'
import React,{ useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa6";

const Header = () => {

    const [scrollClass, setScrollClass] = useState('');
    const handleScroll = () => {
        // Get the scroll position
        const scrollY = window.scrollY;

        // Define a threshold value to determine when to add the class
        const scrollThreshold = 10;

        // Update the state based on the scroll position
        if (scrollY > scrollThreshold) {
            setScrollClass('fixed');
        } else {
            setScrollClass('');
        }
    };
    useEffect(() => {


        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className={`${scrollClass}`}>
            <header id="header">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <div className="nav-inside d-flex flex-wrap align-items-center justify-content-between">
                            <a className="navbar-brand" href="/"><img src="images/logo.png" alt="logo" /></a>
                            <a className="navbar-title" href="/">IMAGINE GROUP</a>
                            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="header-right d-none d-lg-block">
                                <ul className="social-links d-flex justify-content-center">
                                    <li><a href="https://facebook.com/imaginegrouplko"><FaFacebook /></a></li>
                                    <li><a href="https://twitter.com/imaginegroupig"><FaTwitter /></a></li>
                                    <li><a href="https://instagram.com/imaginegroupig"><FaInstagram /></a></li>
                                    <li><a href="https://wa.me/+918881888339"><FaWhatsapp /></a></li>
                                </ul>
                            </div>

                            <div className="collapse navbar-collapse align-items-center justify-content-center" id="mainNav">
                                <div className="navbar-inside">
                                    <ul className="navbar-nav">
                                        <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/tour-travels">Tour & Travels</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/property">Property</a></li>
                                        <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                                        <li className="header-btn d-flex align-items-center">
                                            <a href="/login" className="btn btn-default d-flex align-items-center justify-content-center gap-3">Login</a>
                                            <a href="/signup" className="btn btn-default d-flex align-items-center justify-content-center gap-3">Sign up</a>
                                        </li>
                                        
                                    </ul>
                                    <div className="navbar-bottom mt-auto d-lg-none">
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
        </section>

    )
}

export default Header