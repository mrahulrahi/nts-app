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
            <div className="hero-container d-flex flex-wrap">
                <div className="hero-left position-relative">
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
                                    <Image src="/images/swiper-img-1.jpg" alt="" width={4000} height={4000} quality={100} />
                                </div>
                            </SwiperSlide>

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

                            <SwiperSlide>
                                <div className="hero-bg">
                                    <Image src="/images/swiper-img-5.jpeg" alt="" width={4000} height={4000} quality={100} />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>


                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
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
                        <button className="hero-btn hero-btn-prev d-flex align-items-center justify-content-center gap-2"><span><FaChevronLeft /></span>Previous</button>
                        <button className="hero-btn hero-btn-next d-flex align-items-center justify-content-center gap-2">Next<span><FaChevronRight /></span></button>
                    </div>
                </div>
                <div className="hero-right p-5">
                    <div className="book-form-wrapper w-100 mt-5 position-relative z-3" data-aos="fade-up">
                        <h3>Your Journey Begins Here</h3>

                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item w-50" role="presentation">
                                <button className="nav-link w-100 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Car Rental</button>
                            </li>
                            <li className="nav-item w-50" role="presentation">
                                <button className="nav-link w-100" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Tour & Travels</button>
                            </li>
                        </ul>
                        <div className="tab-content mt-4" id="myTabContent">
                            <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                                <div className="form-control-row d-flex flex-wrap gap-3">
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
                            <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                                <div className="form-control-row d-flex flex-wrap gap-3">
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
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Hero