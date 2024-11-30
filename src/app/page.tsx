'use client'
import Hero from "../components/Hero/Hero";
import ImageTextBlock from '../components/ImageTextBlock/ImageTextBlock'
import WorkCard from '../components/WorkCard/WorkCard'
import DestinationCard from "../components/DestinationCard/DestinationCard";
import TestimonialCard from "../components/TestimonialCard/TestimonialCard";
import CTABlock from "../components/CTABlock/CTABlock";
import FeatureCard from '../components/FeatureCard/FeatureCard';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


export default function Home() {

  const featureCards = [
    { imgUrl: "/images/whyus-1.png", title: "Reasonable Prices" },
    { imgUrl: "/images/whyus-2.png", title: "Clean & Comfortable Cabs" },
    { imgUrl: "/images/whyus-3.png", title: "Simple & Convenient Booking" },
    { imgUrl: "/images/whyus-4.png", title: "Doorstep Pickup" },
    { imgUrl: "/images/whyus-5.png", title: "Experienced & Polite Drivers" },
    { imgUrl: "/images/whyus-6.png", title: "No Hidden Charges" },
  ];

  const testimonialCards = [
    { name: "B. K. Singh", title: "Dist. Commanded Homegaurd", body: "Imagine Group made our vacation dreams a reality! Their attention to detail and personalized itinerary ensured we had an unforgettable experience. Highly recommended!" },
    { name: "Sanju Singh", title: "Folk Singer", body: "Finding the perfect home was a breeze thanks to Imagine Group. Their knowledgeable team guided us every step of the way, making the process smooth and stress-free." },
    { name: "K. D. Maurya", title: "National President (KKS)", body: "Our travel experience with Imagine Group was exceptional. From booking to exploring, their service was top-notch, and they truly went the extra mile for us." },
    { name: "Savita Maurya", title: "Block Head", body: "Imagine Group exceeded our expectations with their property services. Their professionalism and dedication helped us find the ideal investment property quickly and efficiently." },
    { name: "Manoj Manav", title: "Assistant Minister", body: "Thanks to Imagine Group, our family vacation was perfectly organized and tailored to our preferences. We couldn’t have asked for a better travel partner." },
    { name: "Parmatma Maurya", title: "Doctor", body: "Imagine Group made buying our new home an enjoyable experience. Their expertise and personalized approach were invaluable throughout the entire process." },
  ]

  const destinationCards = [
    { imgUrl: "/images/place-img-1.jpg", title: "Goa", subTitle: "Beaches", body: "A popular destination for tourists, both Indian and foreign, Goa is known for its beaches, warm weather, and welcoming people.", pageLink: "./tour-travels" },
    { imgUrl: "/images/place-img-2.jpg", title: "Jammu and Kashmir", subTitle: "Mountains", body: "A beautiful destination with green valleys, cool breezes, and gentle streams." },
    { imgUrl: "/images/place-img-3.jpg", title: "Delhi", subTitle: "Capital", body: "The capital of India, Delhi is a popular tourist destination with many historical monuments, museums, markets, and malls." },
    { imgUrl: "/images/place-img-4.jpg", title: "Agra", subTitle: "7 wonders", body: "Home to the Taj Mahal, one of the seven wonders of the world, Agra is a popular tourist destination on the banks of the Yamuna River." },
  ]

  const hiwCards = [
    { imgUrl: "/images/best-price.png", title: "Check Price", body: "Select your car & tell us about its current location, and our advanced AI tech will make the perfect price for you." },
    { imgUrl: "/images/book-ride.png", title: "Book Ride", body: "Select your car & your pickup location then click on the book button, & our service expert will call you and send car to you." },
    { imgUrl: "/images/pickup.png", title: "Schedule Pickup", body: "Book a ride and schedule pickup from your home or work or anywhere with current loaction best suits your convenience." },
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


  return (
    <>
      <Hero />

      <div className="content-container pb-0">
        <div className="container">
          <div className="row" data-aos="fade-up" suppressHydrationWarning>
            <div className="col-md-12">
              <ImageTextBlock imgUrl='/images/about-img.jpg'>
                <h4>About Us</h4>
                <h5>Your Trusted Partner in Travel and Property Services Since 2016</h5>
                <p>At Imagine Group, we are dedicated to making your dreams come true with exceptional tour and travel experiences, as well as premier property services. Since our inception in 2016, based in the heart of Lucknow, we have been committed to delivering unparalleled service and personalized attention to each client. Whether you&apos;re planning a memorable journey, seeking your dream home, or looking to invest in the right property, our team of experts is here to guide you every step of the way. With a reputation for excellence and a passion for exceeding expectations, Imagine Group is your trusted partner for all your travel and property needs.</p>
                <a href="/about" className="btn btn-light mt-auto w-25">Learn More</a>
              </ImageTextBlock>
            </div>
          </div>
        </div>
      </div>

      <div className="content-container pb-0">
        <div className="container">
          <div className="row" data-aos="fade-up" suppressHydrationWarning>
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

      <div className="content-container pb-0">
        <div className="container">
          <div className="row" data-aos="fade-up" suppressHydrationWarning>
            <div className="col-md-12">
              <div className="heading text-center">
                <h3>Popular Destination</h3>
              </div>
              <div className="destination-card-list d-flex flex-wrap">
                {destinationCards.map(card => <div key={card.title} className="destination-card-item">
                  <DestinationCard card={card} />
                </div>
                )}
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

      <div className="content-container overflow-hidden pb-0">
        <div className="container">
          <div className="row" data-aos="fade-up" suppressHydrationWarning>
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
                  <SwiperSlide key={card.name} className="testimonial-card-item h-auto">
                    <TestimonialCard card={card} />
                  </SwiperSlide>
                )}
              </Swiper>
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
}
