import Image from 'next/image';
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
            <div className="service-card-img mx-auto position-relative"><Image src={imgUrl} alt={`${title} image`} width={100} height={100} quality={100} /></div>
            <div className="service-card-caption text-center mt-auto">{title}</div>
        </div>
    )
}

export default ServiceCard