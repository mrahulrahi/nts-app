'use client';
import './PropertyCard.css'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

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
        <div className="property-card-box w-100 h-100 overflow-hidden">

            <Swiper
            modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1} navigation    
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {imgUrl.map((item, index) =>
                    <SwiperSlide key={index} className="property-card-img">
                        <img src={item} alt="" />
                        <span className="property-card-count">{`# ${index + 1}`}</span>
                    </SwiperSlide>
                )}
            </Swiper>

            <div className="property-card-content">
                <div className="pcc-inside">
                    <div className="pcc-row d-flex flex-wrap align-items-center justify-content-between">
                        <span className="d-flex align-items-center justify-content-center"><FaIndianRupeeSign />{price * 30}</span>
                        <h5>{title}</h5>
                    </div>
                    <address>123 Main Street, <br /> Anytown, USA 12345</address>
                    2BHK | 2,000sqft
                    <p>{body}</p>
                </div>
            </div>
        </div >
    )
}

export default PropertyCard