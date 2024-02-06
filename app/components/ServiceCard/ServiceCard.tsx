import './ServiceCard.css'

interface Card {
    card: CardProp;
}

interface CardProp {
    imgUrl: string;
    title: string;
}

const ServiceCard = ({ card }: Card) => {
    const { imgUrl, title } = card;

    return (
        <div className="service-card-box w-100 h-100 d-flex flex-column">
            <div className="service-card-img mx-auto"><img src={imgUrl}  alt={`${title} image`} /></div>
            <div className="service-card-caption text-center">{title}</div>
        </div>
    )
}

export default ServiceCard