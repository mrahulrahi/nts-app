import './About.css'
import Banner from '../components/Banner/Banner'
import ImageTextBlock from '../components/ImageTextBlock/ImageTextBlock'
import TeamCard from '../components/TeamCard/TeamCard'
import TextCard from '../components/TextCard/TextCard'
import CareerForm from '../components/CareerForm/CareerForm'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IG - About",
  description: "About the company",
};


const AboutPage = () => {
    const teamCards = [
        { imgUrl: "images/team-img-1.jpg", name: "Anuj Maurya", jobPost: "Founder", Links: { facebook: "https://www.facebook.com/anujmauryaa", instagram: "https://www.instagram.com/anujmauryaa"}},
        { imgUrl: "images/team-img-2.png", name: "Kalpana Maurya", jobPost: "CEO" },
        { imgUrl: "images/team-img-3.png", name: "Komal Rathor", jobPost: "Chief Manager" },
        { imgUrl: "images/team-img-4.png", name: "Yogendra Singh", jobPost: "CFO" },
        { imgUrl: "images/team-img-5.jpg", name: "Rahul Maurya", jobPost: "CTO", Links: { linkedin: "https://www.linkedin.com/in/mrahulrahi/" } },
        { imgUrl: "images/team-img-6.png", name: "Priyanka Tiwari", jobPost: "Assistant" },
    ]

    return (
        <>
            <Banner heading="About Us" subheading="Know Us" />

            <div className="content-container bg-pattern-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ImageTextBlock imgUrl='images/about-img.jpg'>
                                <h4>Our Story</h4>
                                <h5>Your Trusted Partner in Travel and Property Services Since 2016</h5>
                                <p>At Imagine Group, our journey began in 2016 with a vision to transform the travel and property experience for our clients. Based in Lucknow, we started with a small but passionate team committed to providing personalized and exceptional services. What began as a modest endeavor quickly grew into a trusted name in both the travel and property sectors.</p>
                                <p>Our story is built on a foundation of dedication, expertise, and a deep understanding of our clients’ needs. From curating memorable travel experiences to finding the perfect properties, we have always strived to exceed expectations and deliver unparalleled satisfaction. Over the years, we’ve expanded our services and refined our approach, but our core values remain the same: integrity, innovation, and customer-centricity.</p>
                                <p>As we continue to grow, we are proud of the lasting relationships we’ve built and the milestones we’ve achieved. Our commitment to excellence drives us forward, and we are excited to help you embark on your next adventure or find your ideal property. Thank you for being part of our journey.</p>
                            </ImageTextBlock>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-container bg-pattern-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading text-center">
                                <h3>Mission & Vision</h3>
                            </div>
                            <TextCard />
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-container pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading text-center">
                                <h3>Our Team</h3>
                            </div>
                            <div className="team-card-list d-flex flex-wrap">
                                {teamCards.map((card) => <div key={card.name} className="team-card-item">
                                    <TeamCard card={card} />
                                </div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-container pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading text-center">
                                <h3>Careers</h3>
                            </div>

                            <CareerForm />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutPage
