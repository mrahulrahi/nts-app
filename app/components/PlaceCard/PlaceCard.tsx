import './PlaceCard.css'

interface Card {
    card: CardProp
}

interface CardProp {
    imgUrl: string;
    title: string;
    body: string;
}

const PlaceCard = ({ card }: Card) => {
    const { imgUrl, title, body } = card

    return (
        <div className="place-card-box w-100 h-100 overflow-hidden">
            <div className="place-card-img">
                <img src={imgUrl} alt="" />
            </div>
            <div className="place-card-text text-center">
                <h5>{title}</h5>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default PlaceCard