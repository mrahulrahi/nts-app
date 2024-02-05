import Banner from "../components/Banner/Banner"


const TourTravelPage = () => {



  return (
    <>
      <Banner heading="Tour & Travel" subheading="Book Your Car" />


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


      <section className="container first d-flex flex-column align-items-center justify-content-center gap-4">
        <h2 className="container-title">How We Work ?</h2>
        <ul className="d-flex align-items-center justify-content-center gap-4 main-container">
          <li className="container-1 d-flex align-items-center justify-content-center gap-4">
            <img className="img-container-first" src="images/best-price.png" alt="" />
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
            <img className="img-container-first" src="images/book-ride.png" alt="" />
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
            <img className="img-container-first" src="images/pickup.png" alt="" />
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


      <section className="container container-service d-flex flex-column align-items-center justify-content-center gap-4" id="services">
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



      <section className="container second d-flex flex-column align-items-center justify-content-center gap-4">
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
    </>
  )
}

export default TourTravelPage