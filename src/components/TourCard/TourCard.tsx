'use client';
import Image from 'next/image';
import './TourCard.css'
import { MdChair, MdTour } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaRupeeSign } from 'react-icons/fa';
import { BiTrip } from 'react-icons/bi';

interface Card {
    card: CardProp;
}

interface CardProp {
    imgUrl: string;
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
        <div className="tour-card-box w-100 h-100 d-flex flex-column bg-dark">
            <div className="position-relative flex-shrink-0">
                <div className="tour-card-img">
                    <Image src={imgUrl} alt="" width={4000} height={4000} quality={100} />
                </div>
                <div className="tour-price d-flex align-items-center justify-content-center gap-2"><FaRupeeSign />{price * 30}</div>
            </div>

            <div className="tour-card-content flex-grow-1 d-flex flex-column">
                <div className="tcc-row d-flex align-items-center justify-content-between">
                    <h5 className="flex-grow-1">{title}</h5>
                    <a href="#!" className="btn btn-light flex-shrink-0">Book</a>
                </div>
                <div className="tcc-inside d-flex flex-column mt-auto">
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