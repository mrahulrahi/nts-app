'use client';
import Image from 'next/image';
import './TourCard.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { MdChair, MdTour } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaRupeeSign } from 'react-icons/fa';
import { BiTrip } from 'react-icons/bi';

interface Card {
    card: CardProp;
}

interface CardProp {
    imgUrl: string[];
    title: string;
    body: string;
    price: number;
    location: string;
    seat: number;
    distance: number;
    type: string;
}


const TourCard = ({ card }: Card) => {
    const { imgUrl, title, body, price, location, seat, distance, type } = card

    return (
        <div className="tour-card-box w-100 h-100 bg-dark">

            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    nextEl: ".property-arrow-next",
                    prevEl: ".property-arrow-prev",
                    disabledClass: "swiper-button-disabled"
                }}
                pagination={{
                    el: ".property-pagination",
                    type: 'fraction',
                }}
                className="position-relative"
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {imgUrl.map((item) =>
                    <SwiperSlide key={item} className="tour-card-img">
                        <Image src={item} alt="" width={4000} height={4000} quality={100} />
                    </SwiperSlide>
                )}

                <div className="tour-info-row d-flex align-items-center justify-content-between">
                    <div className="tour-price d-flex align-items-center justify-content-center gap-2"><FaRupeeSign />{price * 30}</div>
                    <div className="tour-list-arrow-container d-flex align-items-center justify-content-between gap-3">
                        <button
                            className="tour-arrow-prev arrow-button-box d-flex align-items-center justify-content-center">
                            <FaChevronLeft />
                        </button>
                        <div className="tour-pagination"></div>
                        <button
                            className="tour-arrow-next arrow-button-box d-flex align-items-center justify-content-center">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </Swiper>

            <div className="tour-card-content">
                <div className="tcc-inside">
                    <div className="tcc-row d-flex flex-wrap align-items-center justify-content-between">
                        <h5>{title}</h5>
                        <a href="#!" className="btn btn-light">Book</a>
                    </div>

                    <div className="tour-card-row d-flex flex-wrap rounded-2 overflow-hidden">
                        <div className="tour-card-col d-flex align-items-center justify-content-between w-100 "><FaMapLocationDot /><address>{location}</address></div>
                        <div className="tour-card-col d-flex align-items-center justify-content-between"><MdChair />{seat} Seats</div>
                        <div className="tour-card-col d-flex align-items-center justify-content-between"><BiTrip />{distance} km</div>
                        <div className="tour-card-col d-flex align-items-center justify-content-between"><MdTour />{type}</div>
                    </div>
                    <p>{body}</p>
                </div>
            </div>
        </div >
    )
}

export default TourCard