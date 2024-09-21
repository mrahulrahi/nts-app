import Image from 'next/image';
import './WorkCard.css'

interface Card {
    card: CardProp;
    index: number;
}

interface CardProp {
    imgUrl: string;
    title: string;
    body: string;
}

const WorkCard = ({ card, index }: Card) => {
    const { imgUrl, title, body } = card;

    return (
        <div className="work-card-box w-100 h-100 d-flex flex-column position-relative">
             <span className="work-card-count">{index + 1}</span>
            <div className="work-card-img"><Image src={imgUrl} alt={`${title} image`} width={100} height={100} quality={100} /></div>
            <div className="work-card-text">
                <h4>{title}</h4>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default WorkCard