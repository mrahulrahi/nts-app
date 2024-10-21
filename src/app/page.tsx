'use client'
import { useState } from 'react';
import BlogCard from "../components/BlogCard/BlogCard";
import Hero from "../components/Hero/Hero";
import ImageTextBlock from '../components/ImageTextBlock/ImageTextBlock'
import WorkCard from '../components/WorkCard/WorkCard'
import ServiceBlock from "../components/ServiceBlock/ServiceBlock";
import TestimonialCard from "../components/TestimonialCard/TestimonialCard";
import CTABlock from "../components/CTABlock/CTABlock";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import TypeCard from "../components/TypeCard/TypeCard";
import CarCard from "../components/CarCard/CarCard";
import PropertyCard from "../components/PropertyCard/PropertyCard";
import FeatureCard from '../components/FeatureCard/FeatureCard';

export default function Home() {

  const [selectedCarType, setSelectedCarType] = useState<string | null>(null);

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

  const featureCards = [
    { imgUrl: "/images/whyus-1.png", title: "Reasonable Prices" },
    { imgUrl: "/images/whyus-2.png", title: "Clean & Comfortable Cabs" },
    { imgUrl: "/images/whyus-3.png", title: "Simple & Convenient Booking" },
    { imgUrl: "/images/whyus-4.png", title: "Doorstep Pickup" },
    { imgUrl: "/images/whyus-5.png", title: "Experienced & Polite Drivers" },
    { imgUrl: "/images/whyus-6.png", title: "No Hidden Charges" },
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

  const testimonialCards = [
    { name: "B. K. Singh", title: "Dist. Commanded Homegaurd", body: "Imagine Group made our vacation dreams a reality! Their attention to detail and personalized itinerary ensured we had an unforgettable experience. Highly recommended!" },
    { name: "Sanju Singh", title: "Folk Singer", body: "Finding the perfect home was a breeze thanks to Imagine Group. Their knowledgeable team guided us every step of the way, making the process smooth and stress-free." },
    { name: "K. D. Maurya", title: "National President (KKS)", body: "Our travel experience with Imagine Group was exceptional. From booking to exploring, their service was top-notch, and they truly went the extra mile for us." },
    { name: "Savita Maurya", title: "Block Head", body: "Imagine Group exceeded our expectations with their property services. Their professionalism and dedication helped us find the ideal investment property quickly and efficiently." },
    { name: "Manoj Manav", title: "Assistant Minister", body: "Thanks to Imagine Group, our family vacation was perfectly organized and tailored to our preferences. We couldn’t have asked for a better travel partner." },
    { name: "Parmatma Maurya", title: "Doctor", body: "Imagine Group made buying our new home an enjoyable experience. Their expertise and personalized approach were invaluable throughout the entire process." },
  ]

  const blogCards = [
    { imgUrl: "/images/blog-img-1.jpg", title: "Web Design", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { imgUrl: "/images/blog-img-2.jpg", title: "App Design", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { imgUrl: "/images/blog-img-3.jpg", title: "Graphic Design", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { imgUrl: "/images/blog-img-1.jpg", title: "Web Design", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { imgUrl: "/images/blog-img-2.jpg", title: "App Design", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { imgUrl: "/images/blog-img-3.jpg", title: "Graphic Design", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
  ]

  const serviceBlocks = [
    { imgUrl: "/images/service-img-1.jpg", title: "Tour & Travels", subTitle: "Book Your Car", body: "Discover the world with Imagine Group's bespoke tour and travel services. We craft personalized itineraries that turn every journey into an unforgettable adventure, ensuring a seamless experience from start to finish.", pageLink: "./tour-travels" },
    { imgUrl: "/images/service-img-2.jpg", title: "Property", subTitle: "Buy & Sell Property", body: "Find your ideal property with ease through Imagine Group. Our expert team offers a curated selection of homes and investment opportunities, guiding you to make informed decisions and secure the perfect space for your needs.", pageLink: "./properties" },

  ]

  const hiwCards = [
    { imgUrl: "/images/best-price.png", title: "Check Price", body: "Select your car & tell us about its current location, and our advanced AI tech will make the perfect price for you." },
    { imgUrl: "/images/book-ride.png", title: "Book Ride", body: "Select your car & your pickup location then click on the book button, & our service expert will call you and send car to you." },
    { imgUrl: "/images/pickup.png", title: "Schedule Pickup", body: "Book a ride and schedule pickup from your home or work or anywhere with current loaction best suits your convenience." },
  ]

  const ctaData = {
    cardBG: "dark-grey",
    cardHeading: "Book on Call / Whatsapp",
    cardPara: "Discover seamless travel with our tour and travel services, offering a range of comfortable vehicles to suit your journey. Whether it's a local rental, airport transfer, or an outstation trip, we provide reliable and affordable solutions for all your travel needs. Book now and experience a hassle-free ride with professional drivers and 24/7 support!",
    cardFirstHeading: "Book on call",
    cardFirstPara: "Our advisors are just a phone call away. On average, we answer calls <strong>within 90 seconds.</strong> Lines open 24/7.",
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
    <main>
      <Hero />

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
              <ImageTextBlock imgUrl='/images/about-img.jpg'>
                <h4>About Us</h4>
                <h5>Your Trusted Partner in Travel and Property Services Since 2016</h5>
                <p>At Imagine Group, we are dedicated to making your dreams come true with exceptional tour and travel experiences, as well as premier property services. Since our inception in 2016, based in the heart of Lucknow, we have been committed to delivering unparalleled service and personalized attention to each client. Whether you&apos;re planning a memorable journey, seeking your dream home, or looking to invest in the right property, our team of experts is here to guide you every step of the way. With a reputation for excellence and a passion for exceeding expectations, Imagine Group is your trusted partner for all your travel and property needs.</p>
                <a href="/about" className="btn btn-dark mt-auto w-25">Learn More</a>
              </ImageTextBlock>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container bg-pattern-light">
        <div className="container">
          <div className="row" data-aos="fade-up">
            <div className="col-md-12">
              <div className="heading text-center">
                <h3>Services</h3>
              </div>
              <div className="service-block-wrapper d-flex flex-wrap gap-5">
                {serviceBlocks.map(block => <div key={block.title} className="service-block-row">
                  <ServiceBlock block={block} />
                </div>
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
                <h3>How We Work ?</h3>
              </div>

              <div className="work-card-list d-flex flex-wrap">
                {hiwCards.map((card, index) => <div key={card.title} className="work-card-item">
                  <WorkCard card={card} index={index} />
                </div>)}
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="content-container bg-pattern-light overflow-hidden">
        <div className="container">
          <div className="row" data-aos="fade-up">
            <div className="col-md-12">
              <div className="heading text-center">
                <h3>Testimonials</h3>
              </div>

              <Swiper
                modules={[Autoplay]}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                }}
                slidesPerView={'auto'}
                spaceBetween={20}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="testimonial-card-list d-flex flex-wrap overflow-visible"
              >
                {testimonialCards.map((card) =>
                  <SwiperSlide key={card.name} className="testimonial-card-item">
                    <TestimonialCard card={card} />
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container bg-pattern-dark overflow-hidden">
        <div className="container">
          <div className="row" data-aos="fade-up">
            <div className="col-md-12">
              <div className="heading text-center">
                <h3>Blogs</h3>
              </div>

              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  992: {
                    slidesPerView: 3,
                  },
                }}
                slidesPerView={1}
                spaceBetween={30}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="blog-card-list d-flex flex-wrap overflow-visible"
              >

                {blogCards.map((card) =>
                  <SwiperSlide key={card.title} className="blog-card-item">
                    <BlogCard card={card} />
                  </SwiperSlide>)}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container full-width-cta-container bg-pattern-light ">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <CTABlock card={ctaData} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
