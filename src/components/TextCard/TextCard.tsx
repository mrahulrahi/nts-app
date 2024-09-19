import './TextCard.css'

const TextCard = () => {
    return (
        <div className="text-card-list d-flex flex-wrap py-5">
        <div className="text-card-item">
            <div className="text-card-box w-100 h-100 d-flex flex-column bg-glass">
                <div className="text-card-heading ms-auto">Mission</div>
                <p className="mt-auto">At Imagine Group, our mission is to deliver exceptional travel and property services that enhance the lives of our clients. We are dedicated to providing personalized, seamless experiences that meet the unique needs and preferences of each individual. Our goal is to build lasting relationships by consistently exceeding expectations and setting the standard for excellence in our industry.</p>
            </div>
        </div>
        <div className="text-card-item">
            <div className="text-card-box w-100 h-100 d-flex flex-column bg-glass">
                <div className="text-card-heading ms-auto">Vision</div>
                <p className="mt-auto">Our vision at Imagine Group is to be the leading provider of travel and property services, recognized for our unmatched expertise and dedication to client success. We aspire to be the first choice for individuals seeking extraordinary travel experiences and ideal property solutions. Through innovation, excellence, and a commitment to personal service, we aim to shape the future of our industry and inspire confidence and trust in every interaction.</p>
            </div>
        </div>
        <div className="text-card-item">
            <div className="text-card-box w-100 h-100 d-flex flex-column bg-glass">
                <div className="text-card-heading ms-auto">Values</div>
                <p className="mt-auto">Our core values at Imagine Group are integrity, customer-centricity, and innovation. We believe in conducting our business with the highest ethical standards, always placing the needs and satisfaction of our clients at the forefront. By fostering a culture of continuous improvement and embracing new ideas, we strive to offer forward-thinking solutions and exceptional service in everything we do.</p>
            </div>
        </div>
    </div>
    )
}

export default TextCard