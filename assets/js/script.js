class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
          <div class="navbar-first">
              <a class="navbar-brand" href="#">
                  <img src="assets/imgs/logo.png" alt="">
              </a>
              <a class="navbar-title" href="#">
                  <h1>IMAGINE GROUP</h1>
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
          <div class="navbar-second">
            <ul class="navbar-nav">                     
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index.html#about">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="car.html">Car Rental</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="property.html">Properties</a>    
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index.html#contact">Contact Us</a>    
                </li>
            </ul>
            <div class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a href="tel:888-188-8339" class="btn"><i class="fa fa-phone"></i> +918881888339</a>
                </li>
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
    <div class="container-footer">
        <div class="row-footer">
            <div class="navbar-title">
                <h1>IMAGINE GROUP</h1>
            </div>
            <div class="socials">
                <a href="javascript:void(0)"><i class="fab fa-twitter"></i>Twitter</a>
                <a href="javascript:void(0)"><i class="fab fa-facebook"></i>Facebook</a>
                <a href="javascript:void(0)"><i class="fab fa-youtube"></i>Youtube</a>
                <a href="javascript:void(0)"><i class="fab fa-instagram"></i>Instagram</a>
            </div>  
        </div>
        <p class="border">&copy;Imagine Group Created By <a href="https://mrahulrahi.github.io/mrahulrahi/" class="" target="_blank">mrahulrahi.</a>  All rights reserved </p> 
    </div>      
  </footer>
  `;
  }
}
customElements.define("my-footer", MyFooter);
