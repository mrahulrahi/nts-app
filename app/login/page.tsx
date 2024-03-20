import './Login.css'

const LoginPage = () => {
  return (
    <>
      <div className="login-register-container content-container position-relative">
        <div className="login-register-bg"><img src="images/swiper-img-1.jpg" alt="" /></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-box d-flex flex-column align-items-center justify-content-center section bg-glass mx-auto position-relative">
                <div className="img-container">
                  <img src="images/user.svg" alt="profile" className="profile" />
                </div>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                  </li>

                </ul>


                <div className="tab-content">
                  <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <form>
                      <h1>Login</h1>
                      <div className="login-inputbox">
                        {/* <ion-icon name="mail-outline"></ion-icon> */}
                        <input type="email" required />
                        <label htmlFor="">Email</label>
                      </div>
                      <div className="login-inputbox">
                        {/* <ion-icon name="lock-closed-outline"></ion-icon> */}
                        <input type="password" required />
                        <label htmlFor="">Password</label>
                      </div>
                      <div className="login-forget">
                        <label htmlFor=""><input type="checkbox" />Remember Me</label>
                        <a href="#">Forget Password</a>
                      </div>
                      <button>Log in</button>
                      <div className="login-register">
                        <p>Don&apos;t have a account <a href="#" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Register</a></p>
                      </div>
                    </form>
                  </div>
                  <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="register mx-auto">
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
        </div>
      </div>
    </>
  )
}

export default LoginPage
