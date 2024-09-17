'use client';
import './PropertyCard.css'
import { FaChevronLeft, FaChevronRight, FaIndianRupeeSign } from "react-icons/fa6";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { IoBed } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import { FaMapLocationDot, FaBath } from "react-icons/fa6";

interface Card {
    card: CardProp;
}

interface CardProp {
    imgUrl: string[];
    title: string;
    body: string;
    price: number;
}


const PropertyCard = ({ card }: Card) => {
    const { imgUrl, title, body, price } = card

    return (
        <div className="property-card-box w-100 h-100">

            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    nextEl: ".property-arrow-next",
                    prevEl: ".property-arrow-prev",
                    disabledClass: "swiper-button-disabled"
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {imgUrl.map((item, index) =>
                    <SwiperSlide key={index} className="property-card-img">
                        <img src={item} alt="" />
                        <span className="property-card-count">{`${index + 1} / ${imgUrl.length}`}</span>
                    </SwiperSlide>
                )}
            </Swiper>

            <div className="property-card-content">
                <div className="pcc-inside">
                    <div className="pcc-row d-flex flex-wrap align-items-center justify-content-between">
                        <div className="property-list-arrow-container d-flex justify-content-between">
                            <button
                                className="property-arrow-prev swiper-arrow-prev arrow-button-box d-flex align-items-center justify-content-center">
                                <FaChevronLeft />
                            </button>
                            <button
                                className="property-arrow-next swiper-arrow-next arrow-button-box d-flex align-items-center justify-content-center">
                                <FaChevronRight />
                            </button>
                        </div>
                        <span className="d-flex align-items-center justify-content-center"><FaIndianRupeeSign />{price * 30}</span>
                        <a href="#!" className="btn btn-dark">Book</a>
                    </div>
                    <h5>{title}</h5>
                    <div className="property-card-row d-flex flex-wrap rounded-2 overflow-hidden">
                        <div className="property-card-col d-flex align-items-center justify-content-between w-100 "><FaMapLocationDot /><address>123 Main Street, <br /> Anytown, USA 12345</address></div>
                        <div className="property-card-col d-flex align-items-center justify-content-between"><IoBed /> 3</div>
                        <div className="property-card-col d-flex align-items-center justify-content-between"><FaBath />2</div>
                        <div className="property-card-col d-flex align-items-center justify-content-between"><MdSpaceDashboard />2,000sqft</div>
                    </div>
                    <p>{body}</p>
                </div>
            </div>
        </div >
    )
}

export default PropertyCard