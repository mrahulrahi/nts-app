import Banner from "../components/Banner/Banner"


const TourTravelPage = () => {



  return (
    <>
    <Banner />
     

      <section id="book" className="container container-book">
        <div className="container-title">Book Your Car</div>
        <div className="book-form">
          <div className="field">
            <input type="text" placeholder="Full Name" name="" id="book_name" />
          </div>
          <div className="field">
            <input type="tel" placeholder="Phone No." name="" id="book_phone" />
          </div>
          <div className="field">
            <input type="text" placeholder="Pickup Location" name="" id="book_pickup" />
          </div>
          <div className="field">
            <input type="text" placeholder="Drop Location" name="" id="book_drop" />
          </div>
          <div className="field">
            <input type="datetime-local" placeholder="Pickup Date & Time" name="" id="book_datetime" />
          </div>
          <div className="field">
            <select className="custom-select" id="book_cartype">
              <option selected>Select Car type</option>
              <option value="Luxury">Luxury</option>
              <option value="MPV">MPV</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
            </select>
          </div>
          <div className="field">
            <button className="btn-book" type="button">
              Book Now
            </button>
          </div>
        </div>
      </section>


      <section className="container first d-flex align-items-center justify-content-center gap-4">
    <h2 className="container-title">How We Work ?</h2>
    <ul className="d-flex align-items-center justify-content-center gap-4 main-container">
      <li className="container-1 d-flex align-items-center justify-content-center gap-4">
        <img className="img-container-first" src="images/best-price.png" alt=""/>
        <h3 className="text-2xl m-1 p-2">
          <span className="num-bg">1</span>
          Check Price
        </h3>
        <p className="m-2 p-2">
          Select your car & tell us about its current location, and our
          advanced AI tech will make the perfect price for you.
        </p>
      </li>
      <li className="container-1 d-flex align-items-center justify-content-center gap-4">
        <img className="img-container-first" src="images/book-ride.png" alt=""/>
        <h3 className="text-2xl m-1 p-2">
          <span className="num-bg">2</span>
          Book Ride
        </h3>
        <p className="m-2 p-2">
          Select your car & your pickup location then click on the book
          button, & our service expert will call you and send car to you.
        </p>
      </li>
      <li className="container-1 d-flex align-items-center justify-content-center gap-4">
        <img className="img-container-first" src="images/pickup.png" alt=""/>
        <h3 className="text-2xl m-1 p-2">
          <span className="num-bg">3</span>
          Schedule Pickup
        </h3>
        <p className="m-2 p-2">
          Book a ride and schedule pickup from your home or work or anywhere
          with current loaction best suits your convenience.
        </p>
      </li>
    </ul>
  </section>


  <section className="container container-service d-flex align-items-center justify-content-center gap-4" id="services">
    <div className="container-title">Our Services</div>
    <div className="service-card">
      <div className="service-card-item">
        <img src="images/local.png" className="service-card-img" alt="" />
        <div className="service-card-caption">Local Rentals</div>
      </div>
      <div className="service-card-item">
        <img src="images/oneway.png" className="service-card-img" alt="" />
        <div className="service-card-caption">OneWay Drops</div>
      </div>
      <div className="service-card-item">
        <img src="images/twoway.png" className="service-card-img" alt="" />
        <div className="service-card-caption">Round Trips</div>
      </div>
      <div className="service-card-item">
        <img src="images/airport.png" className="service-card-img" alt="" />
        <div className="service-card-caption">Airport Transfers</div>
      </div>
      <div className="service-card-item">
        <img src="images/railway-station.png" className="service-card-img" alt="" />
        <div className="service-card-caption">Railway Station Transfers</div>
      </div>
      <div className="service-card-item">
        <img src="images/bus-stand.png" className="service-card-img" alt="" />
        <div className="service-card-caption">Bus Stand Transfers</div>
      </div>
      <div className="service-card-item">
        <img src="images/event.png" className="service-card-img" alt="" />
        <div className="service-card-caption">Event Booking</div>
      </div>
      <div className="service-card-item">
        <img src="images/office.png" className="service-card-img" alt="" />
        <div className="service-card-caption">For Office Use</div>
      </div>
    </div>
  </section>


  
  <section className="container second d-flex align-items-center justify-content-center gap-4">
    <h2 className="container-title">Why Us ?</h2>
    <div className="main-container d-flex align-items-center justify-content-center gap-4">
      <div className="container-2 d-flex align-items-center justify-content-center gap-4">
        <div className="d-flex align-items-center justify-content-center gap-4 img-container">
          <img src="images/whyus-1.png" alt="" />
        </div>
        <div className="d-flex align-items-center justify-content-center gap-4 info-container">
          <p className="info-title">Reasonable Prices</p>
        </div>
      </div>
      <div className="container-2 d-flex align-items-center justify-content-center gap-4">
        <div className="d-flex align-items-center justify-content-center gap-4 img-container">
          <img src="images/whyus-2.png" alt="" />
        </div>
        <div className="d-flex align-items-center justify-content-center gap-4 info-container">
          <p>Clean & Comfortable Cabs</p>
        </div>
      </div>
      <div className="container-2 d-flex align-items-center justify-content-center gap-4">
        <div className="d-flex align-items-center justify-content-center gap-4 img-container">
          <img src="images/whyus-3.png" alt="" />
        </div>
        <div className="d-flex align-items-center justify-content-center gap-4 info-container">
          <p>Simple & Convenient Booking</p>
        </div>
      </div>
      <div className="container-2 d-flex align-items-center justify-content-center gap-4">
        <div className="d-flex align-items-center justify-content-center gap-4 img-container">
          <img src="images/whyus-4.png" alt="" />
        </div>
        <div className="d-flex align-items-center justify-content-center gap-4 info-container">
          <p>Doorstep Pickup</p>
        </div>
      </div>
      <div className="container-2 d-flex align-items-center justify-content-center gap-4">
        <div className="d-flex align-items-center justify-content-center gap-4 img-container">
          <img src="images/whyus-5.png" alt="" />
        </div>
        <div className="d-flex align-items-center justify-content-center gap-4 info-container">
          <p>Experienced & Polite Drivers</p>
        </div>
      </div>
      <div className="container-2 d-flex align-items-center justify-content-center gap-4">
        <div className="d-flex align-items-center justify-content-center gap-4 img-container">
          <img src="images/whyus-6.png" alt="" />
        </div>
        <div className="d-flex align-items-center justify-content-center gap-4 info-container">
          <p>No Hidden Charges</p>
        </div>
      </div>
    </div>
  </section>


  <section className="container container-car" id="cars">
    <div className="container-title">Available Cars</div>
    <section className="container container-feature">
      <div className="feature-posts scrollbar-hidden">
        <div className="feature-post-title">Cars Types</div>
        <a href="single-post.html" className="feature-post-item">
          <img src="images/luxury.png" className="feature-post-img" alt="" />
          <div className="feature-post-caption">Luxury</div>
        </a>
        <a href="single-post.html" className="feature-post-item">
          <img src="images/mpv.png" className="feature-post-img" alt="" />
          <div className="feature-post-caption">MPV</div>
        </a>
        <a href="single-post.html" className="feature-post-item">
          <img src="images/suv.png" className="feature-post-img" alt="" />
          <div className="feature-post-caption">SUV</div>
        </a>
        <a href="single-post.html" className="feature-post-item">
          <img src="images/sedan.png" className="feature-post-img" alt="" />
          <div className="feature-post-caption">Sedan</div>
        </a>
        <a href="single-post.html" className="feature-post-item">
          <img src="images/hatchback.png" className="feature-post-img" alt="" />
          <div className="feature-post-caption">Hatchback</div>
        </a>
      </div>
    </section>
    <div className="car-card-list">
      <div className="car-card-item">
        <img src="images/xuv300.webp" className="car-card-img" alt="" />
        <div className="car-card-caption">
          <div className="cc-caption-top">
            <p><i className="fas fa-car"></i>SUV</p>
            <p><i className="fa fa-solid fa-users"></i>4 + 1</p>
            <p><i className="fa fa-regular fa-snowflake"></i>AC</p>
          </div>

          <div className="cc-caption-bot">
            <p>XUV 300</p>
            <a href="#book" className="btn-2">Book Now</a>
          </div>
          <span className="d-flex align-items-center justify-content-center gap-4 cc-caption-term">
            <b>Note :</b> For car booking price check the rate list.
          </span>
        </div>
      </div>

      <div className="car-card-item">
        <img src="images/innova.webp" className="car-card-img" alt="" />
        <div className="car-card-caption">
          <div className="cc-caption-top">
            <p><i className="fas fa-car"></i>MPV</p>
            <p><i className="fa fa-solid fa-users"></i>6 + 1</p>
            <p><i className="fa fa-regular fa-snowflake"></i>AC</p>
          </div>

          <div className="cc-caption-bot">
            <p>Innova</p>
            <a href="#book" className="btn-2">Book Now</a>
          </div>
          <span className="d-flex align-items-center justify-content-center gap-4 cc-caption-term">
            <b>Note :</b> For car booking price check the rate list.
          </span>
        </div>
      </div>

      <div className="car-card-item">
        <img src="images/dzire.webp" className="car-card-img" alt="" />
        <div className="car-card-caption">
          <div className="cc-caption-top">
            <p><i className="fas fa-car"></i>Sedan</p>
            <p><i className="fa fa-solid fa-users"></i>4 + 1</p>
            <p><i className="fa fa-regular fa-snowflake"></i>AC</p>
          </div>

          <div className="cc-caption-bot">
            <p>Dzire</p>
            <a href="#book" className="btn-2">Book Now</a>
          </div>
          <span className="d-flex align-items-center justify-content-center gap-4 cc-caption-term">
            <b>Note :</b> For car booking price check the rate list.
          </span>
        </div>
      </div>

      <div className="car-card-item">
        <img src="images/fortuner.webp" className="car-card-img" alt="" />
        <div className="car-card-caption">
          <div className="cc-caption-top">
            <p><i className="fas fa-car"></i>SUV</p>
            <p><i className="fa fa-solid fa-users"></i>6 + 1</p>
            <p><i className="fa fa-regular fa-snowflake"></i>AC</p>
          </div>

          <div className="cc-caption-bot">
            <p>Fortuner</p>
            <a href="#book" className="btn-2">Book Now</a>
          </div>
          <span className="d-flex align-items-center justify-content-center gap-4 cc-caption-term">
            <b>Note :</b> For car booking price check the rate list.
          </span>
        </div>
      </div>

      <div className="car-card-item">
        <img src="images/zest.avif" className="car-card-img" alt="" />
        <div className="car-card-caption">
          <div className="cc-caption-top">
            <p><i className="fas fa-car"></i>Sedan</p>
            <p><i className="fa fa-solid fa-users"></i>4 + 1</p>
            <p><i className="fa fa-regular fa-snowflake"></i>AC</p>
          </div>

          <div className="cc-caption-bot">
            <p>Zest</p>
            <a href="#book" className="btn-2">Book Now</a>
          </div>
          <span className="d-flex align-items-center justify-content-center gap-4 cc-caption-term">
            <b>Note :</b> For car booking price check the rate list.
          </span>
        </div>
      </div>

      <div className="car-card-item">
        <img src="images/indigo.webp" className="car-card-img" alt="" />
        <div className="car-card-caption">
          <div className="cc-caption-top">
            <p><i className="fas fa-car"></i>Sedan</p>
            <p><i className="fa fa-solid fa-users"></i>4 + 1</p>
            <p><i className="fa fa-regular fa-snowflake"></i>AC</p>
          </div>

          <div className="cc-caption-bot">
            <p>Indigo</p>
            <a href="#book" className="btn-2">Book Now</a>
          </div>
          <span className="d-flex align-items-center justify-content-center gap-4 cc-caption-term">
            <b>Note :</b> For car booking price check the rate list.
          </span>
        </div>
      </div>
    </div>
  </section>


  <header className="contact-header" id="contact">
    <div className="contact-title">
      <h3>CONTACT</h3>
      <h1>GET IN TOUCH</h1>
    </div>
  </header>

  <div className="contact">
    <div className="contact-info">
      <form className="contact-form">
        <span>
          <input type="text" name="form_name" placeholder="Name" id="form_name" required />
          <input type="tel" name="form_phone" placeholder="Phone No." id="form_phone" required />
        </span>
        <input type="email" name="form_email" placeholder="Email ID" id="form_email" required />
        <br />
        <input type="text" name="form_message" placeholder="Message" id="form_message" required />
        <br />
        <button type="button" id="button">
          Send Email
        </button>
      </form>

      <div className="contact-content">
        <div className="contact-content-item">
          <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
          <div>
            <h4>Address:</h4>
            <p>
              Head Office 102 , Om Plaza , Apartment sector 19 , Indira Nagar
              , lucknow - 226016
            </p>
          </div>
        </div>
        <div className="contact-content-item">
          <i className="fa fa-phone" aria-hidden="true"></i>
          <div>
            <h4>Phone:</h4>
            <p>+91-888188839</p>
          </div>
        </div>
        <div className="contact-content-item">
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <div>
            <h4>Email:</h4>
            <p>support@imaginegroup.com</p>
          </div>
        </div>
      </div>
    </div>
    <div className="gmap-canvas">
      <iframe width="100%" height="300" id="gmap_canvas"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.4519880543903!2d80.98884681531288!3d26.889146967576703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399959205b897b3b%3A0x385a5519bc060254!2sImagine%20group!5e0!3m2!1sen!2sin!4v1676302436631!5m2!1sen!2sin"
        loading="lazy" referrerPolicy="no-referrer-when-downgrade" frameBorder="0" scrolling="no" marginHeight={0}
        marginWidth={0}></iframe>
    </div>
  </div>
    </>
  )
}

export default TourTravelPage