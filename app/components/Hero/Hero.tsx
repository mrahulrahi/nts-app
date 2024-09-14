'use client'
import './Hero.css'
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = () => {
    const swiper = useSwiper();

    return (
        <>
            <div className="hero-container">
                <Swiper
                    modules={[Navigation, Pagination, EffectFade, Autoplay]} 
                    effect="fade"
                    spaceBetween={50}
                    slidesPerView={1} 
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    navigation={{
                        nextEl: ".hero-btn-next",
                        prevEl: ".hero-btn-prev",
                        disabledClass: "swiper-button-disabled"
                      }}
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >

                    <SwiperSlide className="property-card-img">
                        <div className="hero-bg">
                            <img src="images/swiper-img-1.jpg" alt="" />
                        </div>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-md-7">
                                    <div className="hero-content text-uppercase position-relative z-3" data-aos="fade-up">
                                        <h5>#01</h5>
                                        <h1>imagine</h1>
                                        <h3>group</h3>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="property-card-img">
                        <div className="hero-bg">
                            <img src="images/swiper-img-2.jpeg" alt="" />
                        </div>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-md-7">
                                    <div className="hero-content text-uppercase position-relative z-3" data-aos="fade-up">
                                        <h5>#02</h5>
                                        <h1>book</h1>
                                        <h3>your car</h3>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="property-card-img">
                        <div className="hero-bg">
                            <img src="images/swiper-img-3.jpeg" alt="" />
                        </div>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-md-7">
                                    <div className="hero-content text-uppercase position-relative z-3" data-aos="fade-up">
                                        <h5>#03</h5>
                                        <h1>travel</h1>
                                        <h3>with us</h3>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="property-card-img">
                        <div className="hero-bg">
                            <img src="images/swiper-img-4.jpeg" alt="" />
                        </div>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-md-7">
                                    <div className="hero-content text-uppercase position-relative z-3" data-aos="fade-up">
                                        <h5>#04</h5>
                                        <h1>invest</h1>
                                        <h3>in property</h3>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="property-card-img">
                        <div className="hero-bg">
                            <img src="images/swiper-img-5.jpeg" alt="" />
                        </div>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-md-7">
                                    <div className="hero-content text-uppercase position-relative z-3" data-aos="fade-up">
                                        <h5>#05</h5>
                                        <h1>buy</h1>
                                        <h3>your dream house</h3>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                      
                <div className="hero-bottom d-none d-lg-flex gap-4">
                    <button className="hero-btn hero-btn-next"><span>Next&gt;</span></button>
                    <button className="hero-btn hero-btn-prev"><span>&lt;Previous</span></button>
                </div>
                </Swiper>


            </div>
        </>
    )
}

export default Hero