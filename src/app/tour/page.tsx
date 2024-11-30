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
  { imgUrl: "/images/all-tours.png", title: "All Tours" },
  { imgUrl: "/images/religions.png", title: "Religious" },
  { imgUrl: "/images/adventure.png", title: "Adventure" },
  { imgUrl: "/images/historical.png", title: "Historical" },
  { imgUrl: "/images/mountains.png", title: "Mountains" },
  { imgUrl: "/images/beaches.png", title: "Beaches" },
];

const tourCards = [
  { imgUrl: "https://images.pexels.com/photos/863985/pexels-photo-863985.jpeg", title: "Goa ", duration: "3 Days - 2 Nights", price: 6000, location: "Palolem Beach, Baga Beach, Calangute", seat: 6, distance: 200, type: "Beaches"   },
  { imgUrl: "https://images.pexels.com/photos/14374647/pexels-photo-14374647.jpeg", title: "Jammu  & Kashmir", duration: "5 Days - 4 Nights", price: 7000, location: "Gulmarg, Lake", seat: 10, distance: 350, type: "Mountains"   },
  { imgUrl: "https://images.pexels.com/photos/14844301/pexels-photo-14844301.jpeg", title: "Kerala", duration: "6 Days - 5 Nights", price: 8000, location: "Alappuzha, Kochi", seat: 6, distance: 600, type: "Beaches"   },
  { imgUrl: "https://images.pexels.com/photos/5414582/pexels-photo-5414582.jpeg", title: "Mumbai", duration: "4 Days - 3 Nights", price: 9000, location: "Marine Drive, Gateway of India", seat: 3, distance:450, type: "City"   },
  { imgUrl: "https://images.pexels.com/photos/14441811/pexels-photo-14441811.jpeg", title: "Pune", duration: "2 Days - 1 Nights", price: 10000, location: "Shani Shingnapur, Sinhagad Fort", seat: 3, distance: 500, type: "Hill Station"   },
  { imgUrl: "https://images.pexels.com/photos/3574440/pexels-photo-3574440.jpeg", title: "Shimla", duration: "7 Days - 6 Nights", price: 11000, location: "Mall Road, Kufri", seat: 3, distance: 250, type: "Hill Station"   },
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
      <Banner heading="Tours" subheading="Explore the best tours in India"></Banner>

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

              <div className="tour-card-list d-flex flex-wrap mt-5">
                {filteredTourCards.length > 0 ? (
                  filteredTourCards.map((card) => (
                    <div key={card.title} className="tour-card-item" data-aos="fade-up" suppressHydrationWarning>
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
