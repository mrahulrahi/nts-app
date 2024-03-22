import './Login.css'

const LoginPage = () => {
  return (
    <>
      <div className="login-register-container content-container position-relative">
        <div className="login-register-bg"><img src="images/swiper-img-1.jpg" alt="" /></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="login-register-content-box d-flex flex-column justify-content-center bg-glass mx-auto position-relative">
                <div className="img-container mb-5 mx-auto">
                  <img src="images/user.svg" alt="profile" className="profile" />
                </div>
                <ul className="lrc-nav nav" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true">Login</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="register-tab" data-bs-toggle="tab" data-bs-target="#register" type="button" role="tab" aria-controls="register" aria-selected="false">Register</button>
                  </li>
                </ul>


                <div className="tab-content">
                  <div className="tab-pane active" id="login" role="tabpanel" aria-labelledby="login-tab">
                    <form>
                      <div className="login-input-box">
                        <input type="email" required />
                        <label htmlFor="">Email</label>
                      </div>
                      <div className="login-input-box">
                      <img src="images/person.svg" alt="username" className="user-name" />
                        <input type="password" required />
                        <label htmlFor="">Password</label>
                      </div>
                      <div className="login-forget">
                        <label htmlFor=""><input type="checkbox" />Remember Me</label>
                        <a href="#">Forget Password</a>
                      </div>
                      <button>Log in</button>
                      <div className="login-register">
                        <p>Don&apos;t have a account <a href="#" id="register-tab" data-bs-toggle="tab" data-bs-target="#register" type="button" role="tab" aria-controls="register" aria-selected="false">Register</a></p>
                      </div>
                    </form>
                  </div>
                  <div className="tab-pane" id="register" role="tabpanel" aria-labelledby="register-tab">
                    <div className="register mx-auto">
                      <div>
                        <div className="login-input-box">
                          <img src="images/person.svg" alt="username" className="user-name" />
                          <input type="text" className="name input" />
                          <label htmlFor="">Full Name</label>
                        </div>
                        <div className="login-input-box">
                          <img src="images/person.svg" alt="username" className="user-name" />
                          <input type="text" className="name input" />
                          <label htmlFor="">Username</label>
                        </div>
                        <div className="login-input-box">
                          <img src="images/lock.svg" alt="pass" className="pass" />
                          <input type="password" className="name input" />
                          <label htmlFor="">Email</label>
                        </div>
                        <div className="login-input-box">
                          <img src="images/lock.svg" alt="pass" className="pass" />
                          <input type="password" className="name input" />
                          <label htmlFor="">Password</label>
                        </div>
                        <div className="login-input-box">
                          <img src="images/lock.svg" alt="pass" className="pass" />
                          <input type="password" className="name input" />
                          <label htmlFor="">Password</label>
                        </div>
                        <div className="link d-flex justify-content-between">
                          <span>
                            <input type="checkbox" id="agree-terms" required />
                            <label htmlFor="agree-terms"><a href="#">Agree to Terms &amp; Conditions</a>
                            </label>
                          </span>
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
