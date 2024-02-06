import './TourTravel.css'
import Banner from "../components/Banner/Banner"
import WorkCard from '../components/WorkCard/WorkCard'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import FeatureCard from '../components/FeatureCard/FeatureCard'

const TourTravelPage = () => {
  const workCards = [
    { imgUrl: "images/best-price.png", title: "Check Price", body: "Select your car & tell us about its current location, and our advanced AI tech will make the perfect price for you." },
    { imgUrl: "images/book-ride.png", title: "Book Ride", body: "Select your car & your pickup location then click on the book button, & our service expert will call you and send car to you." },
    { imgUrl: "/images/pickup.png", title: "Schedule Pickup", body: "Book a ride and schedule pickup from your home or work or anywhere with current loaction best suits your convenience." },
  ]

  const serviceCards = [
    { imgUrl: "images/local.png", title: "Local Rentals"},
    { imgUrl: "images/oneway.png", title: "OneWay Drops"},
    { imgUrl: "images/twoway.png", title: "Round Trips"},
    { imgUrl: "images/airport.png", title: "Airport Transfers"},
    { imgUrl: "images/railway-station.png", title: "Railway Station Transfers"},
    { imgUrl: "images/bus-stand.png", title: "Bus Stand Transfers"},
    { imgUrl: "images/event.png", title: "Event Booking"},
    { imgUrl: "images/office.png", title: "For Office Use"},
  ]

  const featureCards = [
    { imgUrl: "images/whyus-1.png", title: "Reasonable Prices"},
    { imgUrl: "images/whyus-2.png", title: "Reasonable Prices"},
    { imgUrl: "images/whyus-3.png", title: "Reasonable Prices"},
    { imgUrl: "images/whyus-4.png", title: "Reasonable Prices"},
    { imgUrl: "images/whyus-5.png", title: "Reasonable Prices"},
    { imgUrl: "images/whyus-6.png", title: "Reasonable Prices"},
  ]

  return (
    <>
      <Banner heading="Tour & Travel" subheading="Book Your Car" />

      <div className="content-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading text-center">
                <h3>Book Your Car</h3>
              </div>
              <div className="book-form-wrapper w-100">
                <div className="form-control-row d-flex flex-wrap">
                  <div className="form-control-col"><input type="text" className="form-control" placeholder="Full Name" name="" id="book_name" /></div>
                  <div className="form-control-col"><input type="tel" className="form-control" placeholder="Phone No." name="" id="book_phone" /></div>
                  <div className="form-control-col"><input type="text" className="form-control" placeholder="Pickup Location" name="" id="book_pickup" /></div>
                  <div className="form-control-col"><input type="text" className="form-control" placeholder="Drop Location" name="" id="book_drop" /></div>
                  <div className="form-control-col"><input type="date" className="form-control" placeholder="Pickup Date" name="" id="book_datetime" /></div>
                  <div className="form-control-col">
                    <select className="form-select" id="book_cartype">
                      <option selected>Select Car type</option>
                      <option value="Luxury">Luxury</option>
                      <option value="MPV">MPV</option>
                      <option value="SUV">SUV</option>
                      <option value="Sedan">Sedan</option>
                      <option value="Hatchback">Hatchback</option>
                    </select>
                  </div>
                  <div className="form-control-col"> <button className="btn btn-default" type="button">Book Now</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="content-container pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading text-center">
                <h3>How We Work ?</h3>
              </div>
              <div className="work-card-list d-flex flex-wrap">
                {workCards.map((card, index) => <div className="work-card-item">
                  <WorkCard card={card} index={index} />
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="content-container pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading text-center">
                <h3>Our Services</h3>
              </div>
              <div className="service-card-list d-flex flex-wrap">
                {serviceCards.map((card) => <div className="service-card-item">
                  <ServiceCard card={card} />
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading text-center">
                <h3>Why Us ?</h3>
              </div>
              <div className="feature-card-list d-flex flex-wrap">
                {featureCards.map((card) => <div className="feature-card-item">
                  <FeatureCard card={card} />
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="container d-flex flex-column align-items-center justify-content-center gap-4">
        <h2 className="container-title"></h2>
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