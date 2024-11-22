'use client'
import { useState } from 'react';
import type { Metadata } from 'next';
import './Tour.css';
import Banner from "../../components/Banner/Banner";
import TypeCard from "../../components/TypeCard/TypeCard";
import TourCard from "../../components/TourCard/TourCard";

// export const metadata: Metadata = {
//   title: "Tour",
//   description: "Read Tours",
// };


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

const tourCards = [
  { imgUrl: ["/images/house-img-1.jpg", "/images/house-img-2.jpg", "/images/house-img-3.jpg", "/images/house-img-4.jpg", "/images/house-img-5.jpg"], title: "Property 1", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 60000 },
  { imgUrl: ["/images/house-img-1.jpg", "/images/house-img-2.jpg", "/images/house-img-3.jpg", "/images/house-img-4.jpg", "/images/house-img-5.jpg"], title: "Property 2", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 70000 },
  { imgUrl: ["/images/house-img-1.jpg", "/images/house-img-2.jpg", "/images/house-img-3.jpg", "/images/house-img-4.jpg", "/images/house-img-5.jpg"], title: "Property 3", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 80000 },
  { imgUrl: ["/images/house-img-1.jpg", "/images/house-img-2.jpg", "/images/house-img-3.jpg", "/images/house-img-4.jpg", "/images/house-img-5.jpg"], title: "Property 4", body: "One of the most vibrant cities you can visit - a trip no one should miss!", price: 90000 },
]



const TourPage = () => {

  const [selectedTourType, setSelectedTourType] = useState<string | null>(null);

  // Filter the carCards based on the selected car type
  const filteredTourCards = selectedTourType
    ? tourCards.filter(tour => tour.title === selectedTourType)
    : tourCards; // Show all cars if no type is selected

  return (
    <>
      <Banner heading="Tours" subheading="Something interesting"></Banner>

      <div className="content-container py-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
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


      <div className="content-container">
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

    </>
  );
};

export default TourPage;
