'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Header.css';
import { usePathname } from 'next/navigation';
import useAuth from '../../hooks/useAuth'; // Import useAuth hook
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CgProfile } from 'react-icons/cg';
import { IoLogOutOutline, IoPersonOutline } from 'react-icons/io5';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);
    const { isAuthenticated, logout, user } = useAuth(); // Get authentication state, logout function, and user object

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

    const currentPath = usePathname();
    const links = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/blog', label: 'Blog' },
        { path: '/contact', label: 'Contact' },
    ];


    return (
        <header id="header">
            <nav className="navbar navbar-expand-xl">
                <div className="container">
                    <div className="nav-inside d-flex flex-wrap align-items-center justify-content-between">
                        <Link className="navbar-logo-area d-flex align-items-center" href="/">
                            <div className="navbar-logo"><Image src="/images/logo.png" alt="logo" width={4000} height={4000} quality={100} /></div>
                            <div className="navbar-title">IMAGINE <br /> GROUP</div>
                        </Link>

                        <div className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`} id="mainNav" ref={navbarRef}>
                            <div className="navbar-inside">
                                <ul className="navbar-nav">
                                    {links.map(link => (
                                        <li key={link.path} className={`${link.path === currentPath ? 'active' : ''} nav-item`}>
                                            <Link className="nav-link" href={link.path} onClick={handleLinkClick}>
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="navbar-bottom mt-auto d-xl-none">
                                <ul className="social-links d-flex justify-content-center">
                                    <li><Link href="https://facebook.com/imaginegindia" onClick={handleLinkClick}><FaFacebookF /></Link></li>
                                    <li><Link href="https://twitter.com/imaginegroupig" onClick={handleLinkClick}><FaTwitter /></Link></li>
                                    <li><Link href="https://instagram.com/imaginegroupig" onClick={handleLinkClick}><FaInstagram /></Link></li>
                                    <li><Link href="https://wa.me/+918881888339" onClick={handleLinkClick}><FaWhatsapp /></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="header-right d-flex align-items-center">
                            <ul className="social-links d-none d-xl-flex justify-content-center">
                                <li><Link href="https://facebook.com/imaginegindia" onClick={handleLinkClick}><FaFacebookF /></Link></li>
                                <li><Link href="https://twitter.com/imaginegroupig" onClick={handleLinkClick}><FaTwitter /></Link></li>
                                <li><Link href="https://instagram.com/imaginegroupig" onClick={handleLinkClick}><FaInstagram /></Link></li>
                                <li><Link href="https://wa.me/+918881888339" onClick={handleLinkClick}><FaWhatsapp /></Link></li>
                            </ul>

                            {isAuthenticated ? (
                                <div className="dropdown">
                                    <button className="header-btn d-flex align-items-center justify-content-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <CgProfile />
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item d-flex align-items-center gap-2 lh-1 py-2" href={`/${user?.role !== 'admin' ? user?.username : 'admin'}`}><IoPersonOutline /> Profile</Link></li>
                                        <li><button className="dropdown-item d-flex align-items-center gap-2 lh-1 py-2" onClick={logout}><IoLogOutOutline /> Logout</button></li>
                                    </ul>
                                </div>
                            ) : (
                                <Link href="/signin" className="header-btn d-flex align-items-center justify-content-center" onClick={handleLinkClick}><CgProfile /></Link>
                            )}

                            <button className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse"
                                data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded={isOpen}
                                aria-label="Toggle navigation" onClick={handleButtonClick}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
