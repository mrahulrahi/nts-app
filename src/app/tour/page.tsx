'use client'
import { useState } from 'react';
import type { Metadata } from 'next';
import './Tour.css';
import Banner from "../../components/Banner/Banner";
import TypeCard from "../../components/TypeCard/TypeCard";
import TourCard from "../../components/TourCard/TourCard";
import CTABlock from '@/src/components/CTABlock/CTABlock';

// export const metadata: Metadata = {
//   title: "Tour",
//   description: "Read Tours",
// };


const typeCards = [
  { imgUrl: "/images/house.png", title: "All Tours" },
  { imgUrl: "/images/house.png", title: "Sightseeing" },
  { imgUrl: "/images/buy-house.png", title: "Adventure" },
  { imgUrl: "/images/sell-house.png", title: "Historical" },
  { imgUrl: "/images/buy-plot.png", title: "Mountains" },
  { imgUrl: "/images/sell-plot.png", title: "Beaches" },
];

const tourCards = [
  { imgUrl: ["/images/house-img-1.jpg", "/images/house-img-2.jpg", "/images/house-img-3.jpg", "/images/house-img-4.jpg", "/images/house-img-5.jpg"], title: "Goa ", body: "3 Days - 2 Nights", price: 60000, location: "Palolem Beach, Baga Beach, Calangute", seat: 6, distance: 200, type: "Beaches"   },
  { imgUrl: ["/images/house-img-1.jpg", "/images/house-img-2.jpg", "/images/house-img-3.jpg", "/images/house-img-4.jpg", "/images/house-img-5.jpg"], title: "Jammu  & Kashmir", body: "5 Days - 4 Nights", price: 70000, location: "Gulmarg, Lake", seat: 10, distance: 350, type: "Mountains"   },
  { imgUrl: ["/images/house-img-1.jpg", "/images/house-img-2.jpg", "/images/house-img-3.jpg", "/images/house-img-4.jpg", "/images/house-img-5.jpg"], title: "Kerala", body: "6 Days - 5 Nights", price: 80000, location: "Alappuzha, Kochi", seat: 6, distance: 600, type: "Beaches"   },
  { imgUrl: ["/images/house-img-1.jpg", "/images/house-img-2.jpg", "/images/house-img-3.jpg", "/images/house-img-4.jpg", "/images/house-img-5.jpg"], title: "Mumbai", body: "4 Days - 3 Nights", price: 90000, location: "Marine Drive, Gateway of India", seat: 3, distance:450, type: "City"   },
  { imgUrl: ["/images/house-img-1.jpg", "/images/house-img-2.jpg", "/images/house-img-3.jpg", "/images/house-img-4.jpg", "/images/house-img-5.jpg"], title: "Pune", body: "2 Days - 1 Nights", price: 100000, location: "Shani Shingnapur, Sinhagad Fort", seat: 3, distance: 500, type: "Hill Station"   },
  { imgUrl: ["/images/house-img-1.jpg", "/images/house-img-2.jpg", "/images/house-img-3.jpg", "/images/house-img-4.jpg", "/images/house-img-5.jpg"], title: "Shimla", body: "7 Days - 6 Nights", price: 110000, location: "Mall Road, Kufri", seat: 3, distance: 250, type: "Hill Station"   },
]

const ctaData = {
  cardBG: "dark",
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

const TourPage = () => {

  const [selectedTourType, setSelectedTourType] = useState<string | null>(null);

    // Filter the tourCards based on the selected tour type
    const filteredTourCards = selectedTourType === "All Tours"
    ? tourCards // Show all tours if "All Tours" is selected
    : selectedTourType
    ? tourCards.filter(tour => tour.type === selectedTourType)
    : tourCards; // Show all tours if no type is selected

  return (
    <>
      <Banner heading="Tours" subheading="Something interesting"></Banner>

      <div className="content-container py-0">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="type-card-list-wrapper scrollbar-hidden" data-aos="fade-up" suppressHydrationWarning>
                <div className="type-card-list d-flex">
                  <div className="type-card-item">
                    <div className="type-card-box w-100 h-100 d-flex align-items-center justify-content-center">
                      <div className="type-card-title text-uppercase">Tours Types</div>
                    </div>
                  </div>
                  {typeCards.map((card) => (
                    <div key={card.title} className="type-card-item" onClick={() => setSelectedTourType(card.title)}>
                      <TypeCard card={card} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="content-container pb-0">
        <div className="container">
          <div className="row" data-aos="fade-up" suppressHydrationWarning>
            <div className="col-md-12">
              <div className="heading text-center">
                <h3>Available Tour</h3>
              </div>

              <div className="property-card-list d-flex flex-wrap mt-5">
                {filteredTourCards.length > 0 ? (
                  filteredTourCards.map((card) => (
                    <div key={card.title} className="property-card-item" data-aos="fade-up" suppressHydrationWarning>
                      <TourCard card={card} />
                    </div>
                  ))
                ) : (
                  <p className="text-center">No tour available for the selected type.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container full-width-cta-container ">
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

export default TourPage;
