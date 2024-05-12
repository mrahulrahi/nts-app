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
    { name: "Jake Sinclair", title: "Brand Designer", body: "Hostingry impressed me with amazing customer experience and effortless migration from my previous provider." },
    { name: "Yassen Sattar", title: "Graphic and Web Designer", body: "Support matters to me the most. Your specialists were always there to help me immediately." },
    { name: "Jhon Ortega", title: "Entrepreneur", body: "I was looking for a company that is very intuitive for beginners and very well-configured for good performance." },
    { name: "Jake Sinclair", title: "Brand Designer", body: "Hostingry impressed me with amazing customer experience and effortless migration from my previous provider." },
    { name: "Yassen Sattar", title: "Graphic and Web Designer", body: "Support matters to me the most. Your specialists were always there to help me immediately." },
    { name: "Jhon Ortega", title: "Entrepreneur", body: "I was looking for a company that is very intuitive for beginners and very well-configured for good performance." },
  ]

  const blogCards = [
    { imgUrl: "images/blog-img-1.jpg", title: "Web Design", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { imgUrl: "images/blog-img-2.jpg", title: "App Design", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { imgUrl: "images/blog-img-3.jpg", title: "Graphic Design", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
  ]

  const serviceBlocks = [
    { imgUrl: "images/service-img-1.jpg", title: "Tour & Travels", subTitle: "Book Your Car", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nihil non rem facilis ipsa soluta!" },
    { imgUrl: "images/service-img-2.png", title: "Property", subTitle: "Buy & Sell Property", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nihil non rem facilis ipsa soluta!" },

  ]


  return (
    <main>
      <Hero />

      <div className="content-container">
                <div className="container">
                    <div className="row" data-aos="fade-up">
                        <div className="col-md-12">
                            <ImageTextBlock imgUrl='images/about-img.jpg'>
                                <h4>About Us</h4>
                                <h5>Welcome to Imagine Group<br />We’re keen to tell you about us.</h5>
                                <p>The website which you’re looking at right now was established in November 2019. With more than five years development experience.</p>
                                <a href="#!" className="btn btn-light mt-auto w-25">Learn More</a>
                            </ImageTextBlock>
                        </div>
                    </div>
                </div>
            </div>

      <div className="content-container pt-0">
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


      <div className="content-container pt-0">
        <div className="container">
          <div className="row" data-aos="fade-up">
            <div className="col-md-12">
              <div className="heading text-center">
                <h3>Testimonials</h3>
              </div>

              <Swiper
                modules={[Autoplay]}
                loop={true}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                }}
                slidesPerView={1}
                spaceBetween={30}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="testimonial-card-list d-flex flex-wrap"
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

      <div className="content-container pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading text-center">
                <h3>Blogs</h3>
              </div>

              <div className="blog-card-list d-flex flex-wrap">
                {blogCards.map((card) => <div key={card.title} className="blog-card-item">
                  <BlogCard card={card} />
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
