'use client'
import { useState } from 'react';
import type { Metadata } from 'next';
import './Car.css';
import Banner from "../../components/Banner/Banner";
import TypeCard from "../../components/TypeCard/TypeCard";
import CarCard from "../../components/CarCard/CarCard";

// export const metadata: Metadata = {
//   title: "Car",
//   description: "Read Cars",
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

const carCards = [
  { imgUrl: "/images/xuv300.webp", title: "XUV 300", type: "SUV", capacity: "4 + 1", airCondition: "AC" },
  { imgUrl: "/images/innova.webp", title: "Innova", type: "MPV", capacity: "6 + 1", airCondition: "AC" },
  { imgUrl: "/images/dzire.webp", title: "Dzire", type: "Sedan", capacity: "4 + 1", airCondition: "AC" },
  { imgUrl: "/images/fortuner.webp", title: "Fortuner", type: "SUV", capacity: "6 + 1", airCondition: "AC" },
  { imgUrl: "/images/zest.avif", title: "Zest", type: "Sedan", capacity: "4 + 1", airCondition: "AC" },
  { imgUrl: "/images/indigo.webp", title: "Indigo", type: "Sedan", capacity: "4 + 1", airCondition: "AC" },
  { imgUrl: "/images/ertiga.webp", title: "Ertiga", type: "MPV", capacity: "6 + 1", airCondition: "AC" },
];




const CarPage = () => {

  const [selectedCarType, setSelectedCarType] = useState<string | null>(null);

    // Filter the carCards based on the selected car type
    const filteredCarCards = selectedCarType
    ? carCards.filter(car => car.type === selectedCarType)
    : carCards; // Show all cars if no type is selected

  return (
    <>
      <Banner heading="Cars" subheading="Something interesting"></Banner>

      
      <div className="content-container py-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="type-card-list-wrapper scrollbar-hidden" data-aos="fade-up">
                <div className="type-card-list d-flex">
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

      <div className="content-container">
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
     
    </>
  );
};

export default CarPage;
