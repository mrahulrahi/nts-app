// header

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
            <div class="hamburger">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
            <div class="socials">
              <a href="https://facebook.com/imaginegrouplko"><i class="fab fa-facebook"></i></a>
              <a href="https://twitter.com/imaginegroupig"><i class="fab fa-twitter"></i></a>
              <a href="https://instagram.com/imaginegroupig"><i class="fab fa-instagram"></i></a>
              <a href="https://wa.me/+918881888339"><i class="fab fa-whatsapp"></i></a>
            </div>     
        </div>

        <div class="nav-menu">                     
          <div class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </div>
          <div class="nav-item">
            <a class="nav-link" href="index.html#services">Our Services</a>
          </div>
          <div class="nav-item">
            <a class="nav-link" href="index.html#cars">Available Cars</a>
          </div>
          <div class="nav-item">
            <a class="nav-link" href="index.html#contact">Contact Us</a>    
          </div>
          <div class="nav-item">
            <a href="tel:888-188-8339" class="btn"><i class="fa fa-phone"></i> Call Us</a>
          </div>
        </div>
        
    </nav>
      
      `;
  }
}
customElements.define("my-header", MyHeader);

// hamburger menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// footer

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <footer class="page-footer">
    <div class="container-footer">
      <div class="footer-title">
        <h1>IMAGINE GROUP</h1>
      </div>
      <div class="socials">
        <a href="https://facebook.com/imaginegrouplko"><i class="fab fa-facebook"></i></a>
        <a href="https://twitter.com/imaginegroupig"><i class="fab fa-twitter"></i></a>
        <a href="https://instagram.com/imaginegroupig"><i class="fab fa-instagram"></i></a>
        <a href="https://wa.me/+918881888339"><i class="fab fa-whatsapp"></i></a>
      </div> 
    </div>
    <p class="border">&copy;Imagine Group Created By <a href="https://mrahulrahi.github.io/mrahulrahi/" class="" target="_blank">mrahulrahi.</a>  All rights reserved </p>
  </footer>
  `;
  }
}
customElements.define("my-footer", MyFooter);
