'use client'
import BlogCard from "./components/BlogCard/BlogCard";
import Hero from "./components/Hero/Hero";
import ImageTextBlock from './components/ImageTextBlock/ImageTextBlock'
import ServiceBlock from "./components/ServiceBlock/ServiceBlock";
import TestimonialCard from "./components/TestimonialCard/TestimonialCard";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  const testimonialCards = [
    { name: "B. K. Singh", title: "Dist. Commanded Homegaurd", body: "Imagine Group made our vacation dreams a reality! Their attention to detail and personalized itinerary ensured we had an unforgettable experience. Highly recommended!" },
    { name: "Sanju Singh", title: "Folk Singer", body: "Finding the perfect home was a breeze thanks to Imagine Group. Their knowledgeable team guided us every step of the way, making the process smooth and stress-free." },
    { name: "K. D. Maurya", title: "National President (KKS)", body: "Our travel experience with Imagine Group was exceptional. From booking to exploring, their service was top-notch, and they truly went the extra mile for us." },
    { name: "Savita Maurya", title: "Block Head", body: "Imagine Group exceeded our expectations with their property services. Their professionalism and dedication helped us find the ideal investment property quickly and efficiently." },
    { name: "Manoj Manav", title: "Assistant Minister", body: "Thanks to Imagine Group, our family vacation was perfectly organized and tailored to our preferences. We couldn’t have asked for a better travel partner." },
    { name: "Parmatma Maurya", title: "Doctor", body: "Imagine Group made buying our new home an enjoyable experience. Their expertise and personalized approach were invaluable throughout the entire process." },
  ]

  const blogCards = [
    { imgUrl: "images/blog-img-1.jpg", title: "Web Design", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { imgUrl: "images/blog-img-2.jpg", title: "App Design", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { imgUrl: "images/blog-img-3.jpg", title: "Graphic Design", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
  ]

  const serviceBlocks = [
    { imgUrl: "images/service-img-1.jpg", title: "Tour & Travels", subTitle: "Book Your Car", body: "Discover the world with Imagine Group's bespoke tour and travel services. We craft personalized itineraries that turn every journey into an unforgettable adventure, ensuring a seamless experience from start to finish.", pageLink: "./tour-travels"},
    { imgUrl: "images/service-img-2.jpg", title: "Property", subTitle: "Buy & Sell Property", body: "Find your ideal property with ease through Imagine Group. Our expert team offers a curated selection of homes and investment opportunities, guiding you to make informed decisions and secure the perfect space for your needs.", pageLink: "./properties"},

  ]


  return (
    <main>
      <Hero />

      <div className="content-container bg-pattern-dark">
                <div className="container">
                    <div className="row" data-aos="fade-up">
                        <div className="col-md-12">
                            <ImageTextBlock imgUrl='images/about-img.jpg'>
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


      <div className="content-container bg-pattern-dark overflow-hidden">
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

      <div className="content-container bg-pattern-light d-none">
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
                    slidesPerView: 2,
                  },
                }}
                slidesPerView={1}
                spaceBetween={30}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="blog-card-list d-flex flex-wrap"
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
    </main>
  );
}
