'use client'
import Image from 'next/image';
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

    return (
        <>
            <div className="hero-container">
                <div className="hero-bg-outer d-flex flex-wrap">
                    <div className="hero-bg-left">
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
                                    <Image src="/images/swiper-img-2.jpeg" alt="" width={4000} height={4000} quality={100} />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="hero-bg">
                                    <Image src="/images/swiper-img-3.jpeg" alt="" width={4000} height={4000} quality={100} />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="hero-bg">
                                    <Image src="/images/swiper-img-4.jpeg" alt="" width={4000} height={4000} quality={100} />
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    <div className="hero-bg-right">

                    </div>
                </div>

                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
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
                                        <div className="hero-content h-100 flex flex-column justify-content-center text-uppercase">
                                            <h5>#01</h5>
                                            <h1>book</h1>
                                            <h3>your car</h3>
                                            <hr />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="hero-content h-100 flex flex-column justify-content-center text-uppercase">
                                            <h5>#02</h5>
                                            <h1>travel</h1>
                                            <h3>with us</h3>
                                            <hr />
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="hero-content h-100 flex flex-column justify-content-center text-uppercase">
                                            <h5>#03</h5>
                                            <h1>Explore</h1>
                                            <h3>the world</h3>
                                            <hr />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>

                        <div className="col-md-7 offset-md-1">
                            <div className="book-form-wrapper w-100 position-relative z-3" data-aos="fade-up">
                                <h3 className="text-white">Your Journey Begins Here</h3>

                                <ul className="book-form-nav d-flex align-items-center gap-2" id="myTab" role="tablist">
                                    <li className="bfn-item w-50" role="presentation">
                                        <button className="bfn-link w-100 active" id="car-tab" data-bs-toggle="tab" data-bs-target="#car-tab-pane" type="button" role="tab" aria-controls="car-tab-pane" aria-selected="true">Car Rental</button>
                                    </li>
                                    <li className="bfn-item w-50" role="presentation">
                                        <button className="bfn-link w-100" id="tour-tab" data-bs-toggle="tab" data-bs-target="#tour-tab-pane" type="button" role="tab" aria-controls="tour-tab-pane" aria-selected="false">Tour & Travels</button>
                                    </li>
                                </ul>
                                <div className="tab-content mt-4" id="myTabContent">
                                    <div className="tab-pane fade show active" id="car-tab-pane" role="tabpanel" aria-labelledby="car-tab" tabIndex={0}>
                                        <div className="form-control-row d-flex flex-wrap gap-3">
                                            <div className="form-control-col"><input type="text" className="form-control" placeholder="Pickup Location" /></div>
                                            <div className="form-control-col"><input type="text" className="form-control" placeholder="Drop Location" /></div>
                                            <div className="form-control-col"><input type="date" className="form-control" placeholder="Pickup Date" /></div>
                                            <div className="form-control-col">
                                                <select className="form-select">
                                                    <option>Select Car type</option>
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
                                    <div className="tab-pane fade" id="tour-tab-pane" role="tabpanel" aria-labelledby="tour-tab" tabIndex={0}>
                                        <div className="form-control-row d-flex flex-wrap gap-3">
                                            <div className="form-control-col"><input type="text" className="form-control" placeholder="Destination" /></div>
                                            <div className="form-control-col"><input type="date" className="form-control" placeholder="Departure Date" /></div>
                                            <div className="form-control-col"><input type="date" className="form-control" placeholder="Return Date" /></div>
                                            <div className="form-control-col">
                                                <select className="form-select">
                                                    <option>Select Tour type</option>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="swiper-pagination"></div>
                <div className="hero-bottom d-none d-lg-flex gap-4">
                    <button className="hero-btn hero-btn-prev d-flex align-items-center justify-content-center gap-2"><span><FaChevronLeft /></span>Previous</button>
                    <button className="hero-btn hero-btn-next d-flex align-items-center justify-content-center gap-2">Next<span><FaChevronRight /></span></button>
                </div>
            </div>
        </>
    )
}

export default Hero