'use client'; // Required for client-side rendering
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import '../../styles/Member.css';
import { IoAt, IoLockClosedOutline, IoLockOpenOutline, IoPersonOutline } from 'react-icons/io5';

// export const metadata: Metadata = {
//   title: 'IG - Signup',
//   description: 'Signup Page',
// };

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAgree, setIsAgree] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State to track password visibility
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password || !isAgree) {
      alert('Please fill in all fields and agree to terms and conditions.');
      return;
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        alert('Registration successful! You can now log in.');
        router.push('/signin'); // Redirect to signin page
      } else {
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('An error occurred during registration:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <div className="member-container content-container position-relative d-flex align-items-center">
        <Link className="member-logo-area d-flex align-items-center" href="/">
          <div className="member-logo"><Image src="/images/logo.png" alt="logo" width={4000} height={4000} quality={100} /></div>
          <div className="member-title">IMAGINE <br /> GROUP</div>
        </Link>
        <div className="member-bg">
          <Image src="/images/swiper-img-1.jpg" alt="background" width={4000} height={4000} quality={100} />
        </div>
        <div className="container position-relative z-3">
          <div className="row" data-aos="fade-up" suppressHydrationWarning>
            <div className="col-md-12">
              <div className="member-content-box d-flex flex-column justify-content-center bg-glass mx-auto position-relative">
                <div className="member-head d-flex align-items-end justify-content-between mb-4">
                  <h3>Register</h3>
                  <div className="img-container flex-shrink-0">
                    <Image src="images/user.svg" alt="profile" className="profile" width={4000} height={4000} quality={100} />
                  </div>
                </div>

                <form className="member-form" onSubmit={handleSubmit}>
                  <div className="member-input-box">
                    <span className="img-icon d-flex align-items-center justify-content-center">
                      <IoPersonOutline />
                    </span>
                    <input
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Username</label>
                  </div>
                  <div className="member-input-box">
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
                  <div className="member-input-box">
                    <span className="img-icon d-flex align-items-center justify-content-center" onClick={togglePasswordVisibility}>
                      {isPasswordVisible ? <IoLockOpenOutline /> : <IoLockClosedOutline />}
                    </span>
                    <input
                      type={isPasswordVisible ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label>Password</label>
                  </div>
                  <div className="member-forget d-flex justify-content-between">
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
                  <input type="submit" value="Register" className="btn-white" />
                  <div className="member-bottom">
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