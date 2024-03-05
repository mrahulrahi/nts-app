import './TestimonialCard.css'

interface Card {
  card: CardProp;
}

interface CardProp {
  name: string;
  title: string;
  body: string;
}


const TestimonialCard = ({ card }: Card) => {
  const { name, title, body } = card;

  return (
    <div className="testimonial-card-box w-100 h-100 d-flex flex-column bg-glass">
      <h5 className="testimonial-card-title">{name}</h5>
      <h6 className="testimonial-card-subtitle">{title}</h6>
      <div className="testimonial-card-info mt-auto">{body}</div>
    </div>
  )
}

export default TestimonialCard