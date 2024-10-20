'use client'
import { useState } from 'react';
import './TourTravels.css';
import Banner from "../../components/Banner/Banner";
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import TypeCard from '../../components/TypeCard/TypeCard';
import CarCard from '../../components/CarCard/CarCard';
import CTABlock from '../../components/CTABlock/CTABlock';
import PropertyCard from '@/src/components/PropertyCard/PropertyCard';

const TourTravelsPage = () => {
  const [selectedCarType, setSelectedCarType] = useState<string | null>(null);

  const serviceCards = [
    { imgUrl: "/images/local.png", title: "Local Rentals" },
    { imgUrl: "/images/oneway.png", title: "OneWay Drops" },
    { imgUrl: "/images/twoway.png", title: "Round Trips" },
    { imgUrl: "/images/airport.png", title: "Airport Transfers" },
    { imgUrl: "/images/railway-station.png", title: "Railway Station Transfers" },
    { imgUrl: "/images/bus-stand.png", title: "Bus Stand Transfers" },
    { imgUrl: "/images/event.png", title: "Event Booking" },
    { imgUrl: "/images/office.png", title: "For Office Use" },
  ];

  const featureCards = [
    { imgUrl: "/images/whyus-1.png", title: "Reasonable Prices" },
    { imgUrl: "/images/whyus-2.png", title: "Clean & Comfortable Cabs" },
    { imgUrl: "/images/whyus-3.png", title: "Simple & Convenient Booking" },
    { imgUrl: "/images/whyus-4.png", title: "Doorstep Pickup" },
    { imgUrl: "/images/whyus-5.png", title: "Experienced & Polite Drivers" },
    { imgUrl: "/images/whyus-6.png", title: "No Hidden Charges" },
  ];

  const typeCards = [
    { imgUrl: "/images/luxury.png", title: "Luxury" },
    { imgUrl: "/images/mpv.png", title: "MPV" },
    { imgUrl: "/images/suv.png", title: "SUV" },
    { imgUrl: "/images/sedan.png", title: "Sedan" },
    { imgUrl: "/images/hatchback.png", title: "Hatchback" },
    { imgUrl: "/images/house.png", title: "Villa" },
    { imgUrl: "/images/buy-house.png", title: "Commercial" },
    { imgUrl: "/images/sell-house.png", title: "House" },
    { imgUrl: "/images/buy-plot.png", title: "Flat" },
    { imgUrl: "/images/sell-plot.png", title: "Plot" },
  ];

  const carCards = [
    { imgUrl: "/images/xuv300.webp", title: "XUV 300", type: "SUV", capacity: "4 + 1", airCondition: "AC" },
    { imgUrl: "/images/innova.webp", title: "Innova", type: "MPV", capacity: "6 + 1", airCondition: "AC" },
    { imgUrl: "/images/dzire.webp", title: "Dzire", type: "Sedan", capacity: "4 + 1", airCondition: "AC" },
    { imgUrl: "/images/fortuner.webp", title: "Fortuner", type: "SUV", capacity: "6 + 1", airCondition: "AC" },
    { imgUrl: "/images/zest.avif", title: "Zest", type: "Sedan", capacity: "4 + 1", airCondition: "AC" },
    { imgUrl: "/images/indigo.webp", title: "Indigo", type: "Sedan", capacity: "4 + 1", airCondition: "AC" },
    { imgUrl: "/images/ertiga.webp", title: "Ertiga", type: "MPV", capacity: "6 + 1", airCondition: "AC" },
  ];

  const propertyCards = [
    { imgUrl: ["/images/house-img-1.jpg", "/images/house-img-2.jpg", "/images/house-img-3.jpg", "/images/house-img-4.jpg", "/images/house-img-5.jpg"], title: "Property 1", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 60000 },
    { imgUrl: ["/images/house-img-1.jpg", "/images/house-img-2.jpg", "/images/house-img-3.jpg", "/images/house-img-4.jpg", "/images/house-img-5.jpg"], title: "Property 2", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 70000 },
    { imgUrl: ["/images/house-img-1.jpg", "/images/house-img-2.jpg", "/images/house-img-3.jpg", "/images/house-img-4.jpg", "/images/house-img-5.jpg"], title: "Property 3", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 80000 },
    { imgUrl: ["/images/house-img-1.jpg", "/images/house-img-2.jpg", "/images/house-img-3.jpg", "/images/house-img-4.jpg", "/images/house-img-5.jpg"], title: "Property 4", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 90000 },
  ]

  const ctaData = {
    cardBG: "dark-grey",
    cardHeading: "Book on Call / Whatsapp",
    cardPara: "Discover seamless travel with our tour and travel services, offering a range of comfortable vehicles to suit your journey. Whether it's a local rental, airport transfer, or an outstation trip, we provide reliable and affordable solutions for all your travel needs. Book now and experience a hassle-free ride with professional drivers and 24/7 support!",
    cardFirstHeading: "Book on call",
    cardFirstPara: "Our advisors are just a phone call away. On average, we answer calls within 90 seconds. Lines open 24/7.",
    cardFirstLink: "+91 8881 888339",
    cardFirstUrl: "tel:+918881888339",
    cardSecondHeading: "Book on whatsapp",
    cardSecondPara: "Book your ride easily on WhatsApp! Just send us your details, and we'll arrange your vehicle in no time. Fast, simple, and convenient – your next journey is just a message away!",
    cardSecondLink: "Start chat",
    cardSecondUrl: "https://api.whatsapp.com/send/?phone=%2B918881888339&text&type=phone_number&app_absent=0",
  };

  // Filter the carCards based on the selected car type
  const filteredCarCards = selectedCarType
    ? carCards.filter(car => car.type === selectedCarType)
    : carCards; // Show all cars if no type is selected

  return (
    <>
      <Banner heading="Tour & Travels" subheading="Book Your Car">
        <div className="book-form-wrapper w-100 mt-5" data-aos="fade-up">
          <div className="form-control-row d-flex flex-wrap">
            <div className="form-control-col"><input type="text" className="form-control" placeholder="Pickup Location" /></div>
            <div className="form-control-col"><input type="text" className="form-control" placeholder="Drop Location" /></div>
            <div className="form-control-col"><input type="date" className="form-control" placeholder="Pickup Date" /></div>
            <div className="form-control-col">
              <select className="form-select">
                <option selected>Select Car type</option>
                {typeCards.map((typeCard) => (
                  <option key={typeCard.title} value={typeCard.title}>
                    {typeCard.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control-col"><button className="btn btn-default" type="button">Book Now</button></div>
          </div>
        </div>
      </Banner>

      <div className="content-container py-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="type-card-list-wrapper scrollbar-hidden" data-aos="fade-up">
                <div className="type-card-list d-flex flex-wrap justify-content-center">
                  <div className="type-card-item">
                    <div className="type-card-box w-100 h-100 d-flex align-items-center justify-content-center">
                      <div className="type-card-title text-uppercase">Cars Types</div>
                    </div>
                  </div>
                  {typeCards.map((card) => (
                    <div key={card.title} className="type-card-item" onClick={() => setSelectedCarType(card.title)}>
                      <TypeCard card={card} />
                    </div>
                  ))}
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

              <div className="car-card-list d-flex flex-wrap mt-5">
                {filteredCarCards.length > 0 ? (
                  filteredCarCards.map((card) => (
                    <div key={card.title} className="car-card-item" data-aos="fade-up">
                      <CarCard card={card} />
                    </div>
                  ))
                ) : (
                  <p className="text-center">No cars available for the selected type.</p>
                )}
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
                <h3>Available Tour</h3>
              </div>

              <div className="property-card-list d-flex flex-wrap mt-5">
                {propertyCards.map((card) => <div key={card.title} className="property-card-item" data-aos="fade-up">
                  <PropertyCard card={card} />
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
                <h3>Why Us?</h3>
              </div>
              <div className="feature-card-list d-flex flex-wrap">
                {featureCards.map((card) => (
                  <div key={card.title} className="feature-card-item">
                    <FeatureCard card={card} />
                  </div>
                ))}
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
                <h3>Our Services</h3>
              </div>
              <div className="service-card-list d-flex flex-wrap">
                {serviceCards.map((card) => (
                  <div key={card.title} className="service-card-item">
                    <ServiceCard card={card} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container full-width-cta-container bg-pattern-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <CTABlock card={ctaData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourTravelsPage;
