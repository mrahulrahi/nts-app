import Image from 'next/image';
import './DestinationCard.css'

interface Card {
    card: CardProp;
}

interface CardProp {
    imgUrl: string;
    title: string;
    subTitle: string;
    body: string;
    pageLink?: string;
}

const DestinationCard = ({ card }: Card) => {
    const { imgUrl, title, subTitle, body, pageLink } = card;

    return (
        <>
            <div className="destination-card-box d-flex bg-dark">
                <div className="destination-card-img overflow-hidden">
                    <Image src={imgUrl} alt={`${title} image`} width={4000} height={4000} quality={100} />
                </div>
                <div className="destination-card-content d-flex flex-column flex-grow-1">
                    <h6>{subTitle}</h6>
                    <h4>{title}</h4>
                    <p>{body}</p>

                    <div className="destination-card-btn mt-auto">
                        <a href={pageLink} className="btn btn-light">Open</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DestinationCard