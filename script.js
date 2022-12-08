class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-light bg-light">
          <div class="container">
              <a class="navbar-brand" href="#">
                  <img src="assets/imgs/logo.png" alt="">
              </a>
              <div class="socials">
                  <a href="javascript:void(0)"><i class="fab fa-facebook"></i></a>
                  <a href="javascript:void(0)"><i class="fab fa-twitter"></i></a>
                  <a href="javascript:void(0)"><i class="fab fa-instagram"></i></a>
                  <a href="javascript:void(0)"><i class="fab fa-youtube"></i></a>
              </div>
          </div>
      </nav>
      
      <nav class="navbar custom-navbar navbar-expand-md navbar-light bg-primary sticky-top">
          <div class="container">
              <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav">                     
                      <li class="nav-item">
                          <a class="nav-link" href="index.html">Home</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="about.html">About Us</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="car.html">Car Rental</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="property.html">
                              Properties
                          </a>    
                      </li>
                  </ul>
                  <div class="navbar-nav ml-auto">
                      <li class="nav-item">
                          <a href="components.html" class="ml-4 btn btn-dark mt-1 btn-sm">Signup</a>
                      </li>
                      <li class="nav-item">
                          <a href="components.html" class="ml-4 btn btn-dark mt-1 btn-sm">Login</a>
                      </li>
                  </div>
              </div>
          </div>
      </nav>
      `;
  }
}
customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <footer>
          <span>
            <div class="social-link">
              <ul>
                <li>FACEBOOK</li>
                <li>TWITTER</li>
                <li>INSTAGRAM</li>
              </ul>
              <ul>
                <li>
                  <h5>Subscribe to Our Newsletter</h5>
                </li>
                <li>
                  <input
                    type="email"
                    id="email"
                    name=""
                    id=""
                    aria-describedby="emailHelpId"
                    placeholder="Enter your email here*"
                  />
                  <a id="submit" href="">Subscribe Now</a>
                </li>
              </ul>
            </div>
            <div class="form">
              <ul>
                <li>CONTACT &gt;</li>
                <li>Phone : +91XXXXXXXXXX</li>
                <li>Email : contact@salbwf.com</li>
              </ul>
              <ul>
                <li>© 2023 by SALBWF</li>
                <li>Proudly coded by mrahulrahi</li>
              </ul>
            </div>
          </span>
        </footer>
          `;
  }
}
customElements.define("my-footer", MyFooter);
