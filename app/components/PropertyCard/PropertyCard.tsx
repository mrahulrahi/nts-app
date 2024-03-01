'use client';
import './PropertyCard.css'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface Card {
    card: CardProp;
    index: number;
}

interface CardProp {
    imgUrl: [string];
    title: string;
    body: string;
    price: number;
}


const PropertyCard = ({ card, index }: Card) => {
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

            <div className="property-card-content text-center">
                <div className="pcc-inside">
                    <div className="pcc-row d-flex flex-wrap align-items-center justify-content-between">
                        <span className="d-flex align-items-center justify-content-center"><FaIndianRupeeSign />{price * 30}</span>
                        <h5>{title}</h5>
                    </div>
                    <p>{body}</p>
                </div>
            </div>
        </div >
    )
}

export default PropertyCard