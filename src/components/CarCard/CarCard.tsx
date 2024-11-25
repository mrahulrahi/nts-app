import Image from 'next/image';
import './CarCard.css'
import { FaCar, FaUsers, FaIndianRupeeSign } from 'react-icons/fa6';

interface Card {
    card: CardProp;
}

interface CardProp {
    imgUrl: string;
    title: string;
    type: string;
    capacity: string;
    rate: number;
}

const CarCard = ({ card }: Card) => {
    const { imgUrl, title, type, capacity, rate } = card;

    return (
        <div className="car-card-box w-100 h-100">
            <div className="car-card-img-box">
                <div className="car-card-img overflow-hidden"><Image src={imgUrl} alt={`${title} image`} width={4000} height={4000} quality={100} /></div>
            </div>

            <div className="car-card-row d-flex">
                <div className="car-card-col d-flex align-items-center justify-content-between"><FaCar />{type}</div>
                <div className="car-card-col d-flex align-items-center justify-content-between"><FaUsers />{capacity}</div>
                <div className="car-card-col d-flex align-items-center justify-content-between"><FaIndianRupeeSign />{rate} /Km</div>
            </div>

            <div className="car-card-content d-flex text-center">
                <h4>{title}</h4>
                <a href="#book" className="btn-2 text-center">Book Now</a>
            </div>
            
            <div className="car-card-note d-flex align-items-center justify-content-center gap-2">
                <span className="fw-semibold">Note :</span> For car booking price check the rate list.
            </div>
        </div>
    )
}

export default CarCard