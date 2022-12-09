class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
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
      
      <nav class="navbar">
          <div class="container">
              <button class="navbar-toggler" type="button">
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
                          <a href="components.html" class="btn">Signup</a>
                      </li>
                      <li class="nav-item">
                          <a href="components.html" class="btn">Login</a>
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
    <footer class="page-footer">
    <div class="container">
        <div class="row align-items-center">
            <div class="">
                <img src="assets/imgs/logo.svg" alt="" class="logo">
            </div>
            <div class="col-md-9 text-center text-md-right">
                <div class="socials">
                    <a href="javascript:void(0)" class="font-weight-bold "><i class="fab fa-facebook"></i> 123,345</a>
                    <a href="javascript:void(0)" class="font-weight-bold "><i class="fab fa-twitter"></i> 321,534</a>
                    <a href="javascript:void(0)" class="font-weight-bold "><i class="fab fa-instagram"></i> 123,023</a>
                    <a href="javascript:void(0)" class="font-weight-bold "><i class="fab fa-youtube"></i> 231,043</a>
                </div>
            </div>  
        </div>
        <p class="border">&copy; <script>document.write(new Date().getFullYear())</script>, Imagine Group Created By <a href="https://www.devcrud.com" class="" target="_blank">mrahulrahi.</a>  All rights reserved </p> 
    </div>      
  </footer>
  `;
  }
}
customElements.define("my-footer", MyFooter);
