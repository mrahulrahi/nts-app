'use client';
import Image from 'next/image';
import './TourCard.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { IoBed } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { FaMapLocationDot, FaBath } from "react-icons/fa6";
import { FaRupeeSign } from 'react-icons/fa';

interface Card {
    card: CardProp;
}

interface CardProp {
    imgUrl: string[];
    title: string;
    body: string;
    price: number;
}


const TourCard = ({ card }: Card) => {
    const { imgUrl, title, body, price } = card

    return (
        <div className="tour-card-box w-100 h-100">

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
                        <div className="tour-card-col d-flex align-items-center justify-content-between w-100 "><FaMapLocationDot /><address>123 Main Street, <br /> Anytown, USA 12345</address></div>
                        <div className="tour-card-col d-flex align-items-center justify-content-between"><IoBed /> 3</div>
                        <div className="tour-card-col d-flex align-items-center justify-content-between"><FaBath />2</div>
                        <div className="tour-card-col d-flex align-items-center justify-content-between"><MdSpaceDashboard />2,000sqft</div>
                    </div>
                    <p>{body}</p>
                </div>
            </div>
        </div >
    )
}

export default TourCard