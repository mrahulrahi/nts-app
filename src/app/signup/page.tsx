'use client'; // Required for client-side rendering
import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import '../signin/Signin.css';
import { IoAt, IoLockClosedOutline, IoPersonOutline } from 'react-icons/io5';

// export const metadata: Metadata = {
//   title: 'IG - Signup',
//   description: 'Signup Page',
// };

const SignupPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAgree, setIsAgree] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!fullName || !email || !password || !isAgree) {
      alert('Please fill in all fields and agree to terms and conditions.');
      return;
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      if (response.ok) {
        alert('Registration successful! You can now log in.');
      } else {
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('An error occurred during registration:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="login-register-container content-container position-relative d-flex align-items-center">
        <div className="login-register-bg">
          <Image src="/images/swiper-img-1.jpg" alt="background" width={4000} height={4000} quality={100} />
        </div>
        <div className="container position-relative z-3">
          <div className="row" data-aos="fade-up">
            <div className="col-md-12">
              <div className="login-register-content-box d-flex flex-column justify-content-center bg-glass mx-auto position-relative">
                <div className="login-register-head d-flex align-items-end justify-content-between mb-4">
                  <h3>Register</h3>
                  <div className="img-container flex-shrink-0">
                    <Image src="images/user.svg" alt="profile" className="profile" width={4000} height={4000} quality={100} />
                  </div>
                </div>

                <form className="login-register-form" onSubmit={handleSubmit}>
                  <div className="login-input-box">
                    <span className="img-icon d-flex align-items-center justify-content-center">
                      <IoPersonOutline />
                    </span>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    <label>Full Name</label>
                  </div>
                  <div className="login-input-box">
                    <span className="img-icon d-flex align-items-center justify-content-center">
                      <IoAt />
                    </span>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Email</label>
                  </div>
                  <div className="login-input-box">
                    <span className="img-icon d-flex align-items-center justify-content-center">
                      <IoLockClosedOutline />
                    </span>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label>Password</label>
                  </div>
                  <div className="login-forget d-flex justify-content-between">
                    <label htmlFor="agree-terms">
                      <input
                        type="checkbox"
                        id="agree-terms"
                        checked={isAgree}
                        onChange={(e) => setIsAgree(e.target.checked)}
                      />
                      <span> Agree to </span>
                      <a href="#">Terms &amp; Conditions</a>
                    </label>
                  </div>
                  <input type="submit" value="Register" className="button" />
                  <div className="login-register">
                    <p>
                      Already have an account?{' '}
                      <Link href="/signin">Login</Link>
                    </p>
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

export default SignupPage;