'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation'; // Import usePathname
import Link from 'next/link';
import Image from 'next/image';
import '../../styles/Member.css';
import useAuth from '../../hooks/useAuth';
import { IoLockClosedOutline, IoLockOpenOutline, IoPersonOutline } from 'react-icons/io5';

const SigninPage = () => {
    const { login, isAuthenticated, user } = useAuth();
    const router = useRouter();
    const pathname = usePathname(); // Get the current path
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true); // Add a loading state
    const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State to track password visibility

    // Use an effect to handle redirection based on authentication state
    useEffect(() => {
        if (isAuthenticated && user) {
            const redirectPath = user.role === 'admin' ? `/admin` : `/${user.username}`;
            if (pathname !== redirectPath) { // Use pathname instead of router.asPath
                router.push(redirectPath);
            }
        }
        setLoading(false);
    }, [isAuthenticated, user, router, pathname]);

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(username, password);
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    // Show a loading message until the state is settled
    if (loading) return <div>Loading...</div>;

    return (
        <>
            <div className="member-container content-container position-relative d-flex align-items-center">
                <Link className="member-logo-area d-flex align-items-center" href="/">
                    <div className="member-logo"><Image src="/images/logo.png" alt="logo" width={4000} height={4000} quality={100} /></div>
                    <div className="member-title">IMAGINE <br /> GROUP</div>
                </Link>
                <div className="member-bg">
                    <Image src="/images/swiper-img-1.jpg" alt="" width={4000} height={4000} quality={100} />
                </div>
                <div className="container position-relative z-3">
                    <div className="row" data-aos="fade-up">
                        <div className="col-md-12">
                            <div className="member-content-box d-flex flex-column justify-content-center bg-glass mx-auto position-relative">
                                <div className="member-head d-flex align-items-end justify-content-between mb-4">
                                    <h3>Login</h3>
                                    <div className="img-container flex-shrink-0">
                                        <Image src="images/user.svg" alt="profile" className="profile" width={4000} height={4000} quality={100} />
                                    </div>
                                </div>

                                <form className="member-form" onSubmit={handleSubmit}>
                                    <div className="member-input-box">
                                        <span className="img-icon d-flex align-items-center justify-content-center"><IoPersonOutline /></span>
                                        <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} />
                                        <label>Username</label>
                                    </div>
                                    <div className="member-input-box">
                                        <span className="img-icon d-flex align-items-center justify-content-center" onClick={togglePasswordVisibility}>
                                            {isPasswordVisible ? <IoLockOpenOutline /> : <IoLockClosedOutline />}
                                        </span>
                                        <input type={isPasswordVisible ? 'text' : 'password'} required value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <label>Password</label>
                                    </div>
                                    <div className="member-forget">
                                        <label><input type="checkbox" /> Remember Me</label>
                                        <a href="#">Forget Password?</a>
                                    </div>
                                    <input type="submit" value="Log in" className="btn-white" />
                                    <div className="member-bottom">
                                        <p>Don&apos;t have an account? <Link href="/signup">Register</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SigninPage;