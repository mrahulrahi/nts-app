'use client';
import Link from 'next/link';
import './Login.css';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth'; // Import the useAuth hook
import { IoAt, IoLockClosedOutline } from 'react-icons/io5';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth(); // Get the login function from useAuth

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(email, password); // Use login function from useAuth
    };

    return (
        <div className="login-register-container content-container position-relative d-flex align-items-center">
            <div className="login-register-bg">
                <img src="images/swiper-img-1.jpg" alt="" />
            </div>
            <div className="container position-relative z-3">
                <div className="row" data-aos="fade-up">
                    <div className="col-md-12">
                        <div className="login-register-content-box d-flex flex-column justify-content-center bg-glass mx-auto position-relative">

                            <div className="login-register-head d-flex align-items-end justify-content-between mb-4">
                                <h3>Login</h3>
                                <div className="img-container flex-shrink-0">
                                    <img src="images/user.svg" alt="profile" className="profile" />
                                </div>
                            </div>

                            <form className="login-register-form" onSubmit={handleSubmit}>
                                <div className="login-input-box">
                                    <span className="img-icon d-flex align-items-center justify-content-center"><IoAt /></span>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label>Email</label>
                                </div>
                                <div className="login-input-box">
                                    <span className="img-icon d-flex align-items-center justify-content-center"><IoLockClosedOutline /></span>
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label>Password</label>
                                </div>
                                <div className="login-forget">
                                    <label><input type="checkbox" /> Remember Me</label>
                                    <a href="#">Forget Password?</a>
                                </div>
                                <input type="submit" value="Log in" className="button" />
                                <div className="login-register">
                                    <p>Don&apos;t have an account? <Link href="/signup">Register</Link></p>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
