

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