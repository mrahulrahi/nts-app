import './Signup.css'

const SignupForm = () => {
    return (

        <div className="content-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content-box d-flex flex-wrap">
                            <div className="login-container position-relative bg-glass p-5 mx-auto">
                                <div className="img-container">
                                    <img src="images/user.svg" alt="profile" className="profile" />
                                </div>
                                <div>
                                    <div className="login-input-box">
                                        <img src="images/person.svg" alt="username" className="user-name" />
                                        <input type="text" placeholder="Full Name" className="name input" />
                                    </div>
                                    <div className="login-input-box">
                                        <img src="images/person.svg" alt="username" className="user-name" />
                                        <input type="text" placeholder="Username" className="name input" />
                                    </div>
                                    <div className="login-input-box">
                                        <img src="images/lock.svg" alt="pass" className="pass" />
                                        <input type="password" placeholder="Email" className="name input" />
                                    </div>
                                    <div className="login-input-box">
                                        <img src="images/lock.svg" alt="pass" className="pass" />
                                        <input type="password" placeholder="Password" className="name input" />
                                    </div>
                                    <div className="login-input-box">
                                        <img src="images/lock.svg" alt="pass" className="pass" />
                                        <input type="password" placeholder="Password" className="name input" />
                                    </div>
                                    <div className="link d-flex justify-content-between">
                                        <span>
                                            <input type="checkbox" id="agree-terms" required />
                                            <label htmlFor="agree-terms"><a href="#">Agree to Terms &amp; Conditions</a>
                                            </label>
                                        </span>
                                        <a href="google.com">Forgot Password?</a>
                                    </div>
                                </div>
                                <button className="btn btn-default btn-login">
                                    SIGNUP
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupForm