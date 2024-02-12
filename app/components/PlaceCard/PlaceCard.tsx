import './PlaceCard.css'
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

const PlaceCard = ({ card, index }: Card) => {
    const { imgUrl, title, body, price } = card

return (
    <>
        <div className="place-card-box w-100 h-100 overflow-hidden">
            <div className="place-card-img">
                <span className="place-card-count">{index}</span>
                <img className="img-responsive" src={imgUrl}
                    alt="Item" />
            </div>
            <div className="place-card-content">
                <div className="pcc-top-row">
                    <span><FaIndianRupeeSign />{price * 30}</span>
                    <h3 className="menu-item-title">{title}</h3>
                </div>
                <p>{body}</p>
            </div>
        </div>
    </>
)
}

export default PlaceCard