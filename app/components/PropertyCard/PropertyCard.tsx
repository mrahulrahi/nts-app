import './PropertyCard.css'

interface Card {
    card: CardProp
}

interface CardProp {
    imgUrl: string;
    title: string;
    body: string;
}

const PropertyCard = ({ card }: Card) => {
    const { imgUrl, title, body } = card

    return (
        <div className="property-card-box w-100 h-100 overflow-hidden">
            <div className="property-card-img">
                <img src={imgUrl} alt="" />
            </div>
            <div className="property-card-text text-center">
                <h5>{title}</h5>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default PropertyCard