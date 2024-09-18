'use client'
import './Hero.css'
import { Navigation, Pagination, EffectFade, Autoplay, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
    const swiper = useSwiper();
    const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);

    return (
        <>
            <div className="hero-container d-flex align-items-center">
                <div className="hero-bg-outer">
                    <Swiper
                        className="h-100"
                        modules={[EffectFade, Autoplay, Thumbs]}
                        effect="fade"
                        slidesPerView={1}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        watchSlidesProgress
                        onSwiper={setThumbsSwiper}
                        onSlideChange={() => console.log('slide change')}

                    >

                        <SwiperSlide>
                            <div className="hero-bg">
                                <img src="images/swiper-img-1.jpg" alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="hero-bg">
                                <img src="images/swiper-img-2.jpeg" alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="hero-bg">
                                <img src="images/swiper-img-3.jpeg" alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="hero-bg">
                                <img src="images/swiper-img-4.jpeg" alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="hero-bg">
                                <img src="images/swiper-img-5.jpeg" alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>


                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="hero-content-outer position-relative z-3" data-aos="fade-up">
                                <Swiper
                                    modules={[Navigation, Pagination, EffectFade, Autoplay, Thumbs]}
                                    slidesPerView={1}
                                    effect="fade"
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    navigation={{
                                        nextEl: ".hero-btn-next",
                                        prevEl: ".hero-btn-prev",
                                        disabledClass: "swiper-button-disabled"
                                    }}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    pagination={{
                                        el: ".swiper-pagination",
                                        clickable: true
                                    }}
                                    onSlideChange={() => console.log('slide change')}
                                >

                                    <SwiperSlide>
                                        <div className="hero-content flex flex-column justify-content-center text-uppercase">
                                            <h5>#01</h5>
                                            <h1>imagine</h1>
                                            <h3>group</h3>
                                            <hr />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="hero-content h-100 flex flex-column justify-content-center text-uppercase">
                                            <h5>#02</h5>
                                            <h1>book</h1>
                                            <h3>your car</h3>
                                            <hr />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="hero-content h-100 flex flex-column justify-content-center text-uppercase">
                                            <h5>#03</h5>
                                            <h1>travel</h1>
                                            <h3>with us</h3>
                                            <hr />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="hero-content h-100 flex flex-column justify-content-center text-uppercase">
                                            <h5>#04</h5>
                                            <h1>invest</h1>
                                            <h3>in property</h3>
                                            <hr />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="hero-content h-100 flex flex-column justify-content-center text-uppercase">
                                            <h5>#05</h5>
                                            <h1>buy</h1>
                                            <h3>your dream house</h3>
                                            <hr />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="swiper-pagination"></div>
                <div className="hero-bottom d-none d-lg-flex gap-4">
                    <button className="hero-btn hero-btn-next d-flex align-items-center justify-content-center gap-2">Next<span><FaChevronRight /></span></button>
                    <button className="hero-btn hero-btn-prev d-flex align-items-center justify-content-center gap-2"><span><FaChevronLeft /></span>Previous</button>
                </div>
            </div>
        </>
    )
}

export default Hero