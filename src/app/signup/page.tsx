import Link from 'next/link';
import '../login/Login.css'
import type { Metadata } from "next";
import { IoAt, IoLockClosedOutline, IoPersonOutline } from 'react-icons/io5';

export const metadata: Metadata = {
  title: "IG - Signup",
  description: "Signup Page",
};

const SignupPage = () => {
  return (
    <>
      <div className="login-register-container content-container position-relative d-flex align-items-center">
        <div className="login-register-bg"><img src="images/swiper-img-1.jpg" alt="" /></div>
        <div className="container position-relative z-3">
          <div className="row" data-aos="fade-up">
            <div className="col-md-12">
              <div className="login-register-content-box d-flex flex-column justify-content-center bg-glass mx-auto position-relative">

                <div className="login-register-head d-flex align-items-end justify-content-between mb-4">
                  <h3>Register</h3>
                  <div className="img-container flex-shrink-0">
                    <img src="images/user.svg" alt="profile" className="profile" />
                  </div>
                </div>

                <form className="login-register-form">
                  <div className="login-input-box">
                    <span className="img-icon d-flex align-items-center justify-content-center"><IoPersonOutline /></span>
                    <input type="text" required />
                    <label htmlFor="">Full Name</label>
                  </div>
                  <div className="login-input-box">
                    <span className="img-icon d-flex align-items-center justify-content-center"><IoAt /></span>
                    <input type="email" required />
                    <label htmlFor="">Email</label>
                  </div>
                  <div className="login-input-box">
                    <span className="img-icon d-flex align-items-center justify-content-center"><IoLockClosedOutline /></span>
                    <input type="password" required />
                    <label htmlFor="">Password</label>
                  </div>
                  <div className="login-forget d-flex justify-content-between">
                    <label htmlFor="agree-terms"><input type="checkbox" id="agree-terms" /><a href="#">Agree to Terms &amp; Conditions</a></label>
                  </div>
                  <input type="submit" value="Register" className="button" />
                  <div className="login-register">
                    <p>Already have a account ? <Link href="/login">Login</Link></p>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupPage
