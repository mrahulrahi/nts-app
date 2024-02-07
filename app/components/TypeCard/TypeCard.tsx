import './TypeCard.css'

interface Card {
    card: CardProp;
}

interface CardProp {
    imgUrl: string;
    title: string;
}


const TypeCard = ({ card }: Card) => {
    const { imgUrl, title } = card;

    return (
        <div className="type-card-box w-100 h-100 d-flex flex-column">
            <div className="type-card-img mx-auto"><img src={imgUrl} alt="" /></div>
            <div className="type-card-label text-center mt-auto">{title}</div>
        </div>
    )
}

export default TypeCard