import './PropertyCard.css'
import { FaIndianRupeeSign } from "react-icons/fa6";

interface Card {
    card: CardProp;
    index: number;
}

interface CardProp {
    imgUrl: string;
    title: string;
    body: string;
    price: number;
}


const PropertyCard = ({ card, index }: Card) => {
    const { imgUrl, title, body, price } = card

    return (
        <div className="property-card-box w-100 h-100 overflow-hidden">
            <div className="property-card-img">
                <img src={imgUrl} alt="" />
                <span className="property-card-count">{`# ${index + 1}`}</span>
            </div>
            <div className="property-card-content text-center">
                <div className="pcc-top-row d-flex align-items-center justify-content-between">
                    <span><FaIndianRupeeSign />{price * 30}</span>
                    <h5>{title}</h5>
                </div>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default PropertyCard