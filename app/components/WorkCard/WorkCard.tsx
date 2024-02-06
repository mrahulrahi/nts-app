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
        <div className="work-card-box w-100 h-100 d-flex flex-column">
            <div className="work-card-img"><img src={imgUrl} alt={`${title} image`} /></div>
            <div className="work-card-text">
                <div className="d-flex align-items-center gap-3 mb-4">
                    <span className="work-card-count">{index + 1}</span>
                    <h4>{title}</h4>
                </div>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default WorkCard