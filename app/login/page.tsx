import './Login.css'

const LoginPage = () => {
  return (
    <div className="login-container content-container position-relative">
      <div className="login-bg"><img src="images/swiper-img-1.jpg" alt="" /></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="content-box d-flex align-items-center justify-content-center section bg-glass mx-auto">
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
                  <p>Don&apos;t have a account <a href="#">Register</a></p>
                </div>
              </form>
            </div>
          </div>
        </div></div>
    </div>

  )
}

export default LoginPage
