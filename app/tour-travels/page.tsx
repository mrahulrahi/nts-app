import './TourTravels.css'
import Banner from "../components/Banner/Banner"
import ServiceCard from '../components/ServiceCard/ServiceCard'
import FeatureCard from '../components/FeatureCard/FeatureCard'
import TypeCard from '../components/TypeCard/TypeCard'
import CarCard from '../components/CarCard/CarCard'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IG - Tour & Travels",
  description: "More about tour & travels",
};

const TourTravelsPage = () => {

  const serviceCards = [
    { imgUrl: "images/local.png", title: "Local Rentals" },
    { imgUrl: "images/oneway.png", title: "OneWay Drops" },
    { imgUrl: "images/twoway.png", title: "Round Trips" },
    { imgUrl: "images/airport.png", title: "Airport Transfers" },
    { imgUrl: "images/railway-station.png", title: "Railway Station Transfers" },
    { imgUrl: "images/bus-stand.png", title: "Bus Stand Transfers" },
    { imgUrl: "images/event.png", title: "Event Booking" },
    { imgUrl: "images/office.png", title: "For Office Use" },
  ]

  const featureCards = [
    { imgUrl: "images/whyus-1.png", title: "Reasonable Prices" },
    { imgUrl: "images/whyus-2.png", title: "Clean & Comfortable Cabs" },
    { imgUrl: "images/whyus-3.png", title: "Simple & Convenient Booking" },
    { imgUrl: "images/whyus-4.png", title: "Doorstep Pickup" },
    { imgUrl: "images/whyus-5.png", title: "Experienced & Polite Drivers" },
    { imgUrl: "images/whyus-6.png", title: "No Hidden Charges" },
  ]

  const typeCards = [
    { imgUrl: "images/luxury.png", title: "Luxury" },
    { imgUrl: "images/mpv.png", title: "MPV" },
    { imgUrl: "images/suv.png", title: "SUV" },
    { imgUrl: "images/sedan.png", title: "Sedan" },
    { imgUrl: "images/hatchback.png", title: "Hatchback" },
  ]

  const carCards = [
    { imgUrl: "images/xuv300.webp", title: "XUV 300", type: "SUV", capacity: "4 + 1", airCondition: "AC" },
    { imgUrl: "images/innova.webp", title: "Innova", type: "MPV", capacity: "6 + 1", airCondition: "AC" },
    { imgUrl: "images/dzire.webp", title: "Dzire", type: "Sedan", capacity: "4 + 1", airCondition: "AC" },
    { imgUrl: "images/fortuner.webp", title: "Fortuner", type: "SUV", capacity: "6 + 1", airCondition: "AC" },
    { imgUrl: "images/zest.avif", title: "Zest", type: "Sedan", capacity: "4 + 1", airCondition: "AC" },
    { imgUrl: "images/indigo.webp", title: "Indigo", type: "Sedan", capacity: "4 + 1", airCondition: "AC" },
  ]

  return (
    <>
      <Banner heading="Tour & Travels" subheading="Book Your Car" />

      <div className="content-container py-0">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="book-form-wrapper w-100" data-aos="fade-up">
                <div className="form-control-row d-flex flex-wrap">
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

      <div className="content-container bg-pattern-light">
        <div className="container">
          <div className="row" data-aos="fade-up">
            <div className="col-md-12">
              <div className="heading text-center">
                <h3>Available Cars</h3>
              </div>
              <div className="type-card-list-wrapper scrollbar-hidden" data-aos="fade-up">
                <div className="type-card-list d-flex flex-wrap justify-content-center">
                  <div className="type-card-item">
                    <div className="type-card-box w-100 h-100 d-flex align-items-center justify-content-center">
                      <div className="type-card-title text-uppercase">Cars Types</div>
                    </div>
                  </div>
                  {typeCards.map((card) => <div key={card.title} className="type-card-item">
                    <TypeCard card={card} />
                  </div>)}
                </div>
              </div>

              <div className="car-card-list d-flex flex-wrap mt-5">
                {carCards.map((card) => <div key={card.title} className="car-card-item" data-aos="fade-up">
                  <CarCard card={card} />
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container bg-pattern-dark">
        <div className="container">
          <div className="row" data-aos="fade-up">
            <div className="col-md-12">
              <div className="heading text-center">
                <h3>Why Us ?</h3>
              </div>
              <div className="feature-card-list d-flex flex-wrap">
                {featureCards.map((card) => <div key={card.title} className="feature-card-item">
                  <FeatureCard card={card} />
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container bg-pattern-light">
        <div className="container">
          <div className="row" data-aos="fade-up">
            <div className="col-md-12">
              <div className="heading text-center">
                <h3>Our Services</h3>
              </div>
              <div className="service-card-list d-flex flex-wrap">
                {serviceCards.map((card) => <div key={card.title} className="service-card-item">
                  <ServiceCard card={card} />
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TourTravelsPage